export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 md:px-24 rounded-t-[3rem] mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Nano Banana
          </h3>
          <p className="text-gray-400">The Future of Freshness. Premium cold-pressed juices delivered to your door.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">Subscriptions</a></li>
            <li><a href="#" className="hover:text-white transition">Our Story</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Sign up for early access to new flavors.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-gray-800 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-white" />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nano Banana. All rights reserved.</p>
      </div>
    </footer>
  );
}
