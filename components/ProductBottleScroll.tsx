"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductBottleScroll({ product }: { product: Product }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

  // Preload images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    // Only load the 120 images required by the current product
    for (let i = 1; i <= 120; i++) {
        const img = new Image();
        // Load webp per instructions. Make sure assets are named 1.webp etc.
        img.src = `${product.folderPath}/${i}.webp`;
        images.push(img);
    }
    imagesRef.current = images;
  }, [product.folderPath]);

  // Handle canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = imagesRef.current[currentFrame];

      if (img && img.complete) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate "contain" drawing
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
          img,
          0, 0, img.width, img.height,
          centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
        );
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [frameIndex]);

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
        canvasRef.current.height = canvasRef.current.parentElement.clientHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full max-w-5xl mx-auto z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        />
      </div>
    </div>
  );
}
