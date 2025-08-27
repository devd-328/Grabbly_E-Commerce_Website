import { ShoppingBag, Star, Truck, Shield, RefreshCw, Heart } from 'lucide-react';

function App() {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 89,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 129,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Summer Dress",
      price: 79,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Leather Boots",
      price: 199,
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Removed Gabbly header line as requested */}
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Women</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Men</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Accessories</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Sale</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Fashion hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            New Collection
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover the latest trends in fashion. Elegant designs that define your style.
          </p>
          <button className="px-8 py-3 text-lg font-medium text-white transition-colors" style={{backgroundColor: '#2596be'}} onMouseEnter={e => ((e.target as HTMLButtonElement).style.backgroundColor = '#1e7a9a')} onMouseLeave={e => ((e.target as HTMLButtonElement).style.backgroundColor = '#2596be')}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Featured Products</h3>
            <p className="text-gray-300">Handpicked items just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-800 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} />
                  </button>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{product.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className="fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Free Shipping</h4>
              <p className="text-gray-300">Free shipping on orders over $100</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Secure Payment</h4>
              <p className="text-gray-300">100% secure payment processing</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <RefreshCw size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Easy Returns</h4>
              <p className="text-gray-300">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* Technology in Fashion Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technology in Fashion</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover how cutting-edge technology is transforming the fashion industry, 
              from smart textiles to AI-powered design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Smart Textiles */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Smart Textiles & Wearables</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Revolutionary fabrics embedded with sensors and electronics are creating clothing that responds to your body and environment. 
                From temperature-regulating materials to fitness-tracking garments, smart textiles are making fashion more functional than ever.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Example:</strong> Nike's Adapt sneakers automatically adjust fit using smartphone connectivity, 
                  while Levi's Trucker Jacket integrates touch-sensitive fabric for music and call control.
                </p>
              </div>
            </div>

            {/* 3D Printing */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold text-white">3D Printing & Manufacturing</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Additive manufacturing is revolutionizing fashion production, enabling designers to create complex geometries 
                and customized pieces impossible with traditional methods. This technology reduces waste and allows for on-demand production.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Example:</strong> Adidas Futurecraft 4D shoes feature 3D-printed midsoles, while designers like Iris van Herpen 
                  create avant-garde couture pieces using advanced 3D printing techniques.
                </p>
              </div>
            </div>

            {/* AI & Virtual Reality */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold text-white">AI & Virtual Reality</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Artificial intelligence is transforming fashion through trend prediction, personalized recommendations, and virtual try-on experiences. 
                AR and VR technologies are creating immersive shopping experiences and revolutionizing the design process.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Example:</strong> Sephora's Virtual Artist app uses AR for makeup try-ons, while Stitch Fix employs AI algorithms 
                  to curate personalized clothing selections for millions of customers.
                </p>
              </div>
            </div>

            {/* Sustainable Technology */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">4</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Sustainable Innovation</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Technology is driving sustainability in fashion through innovative materials, circular design principles, and supply chain transparency. 
                From lab-grown leather to recycling technologies, the industry is becoming more environmentally conscious.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Example:</strong> Bolt Threads creates Mylo leather from mushroom roots, while Patagonia uses blockchain 
                  technology to track supply chain transparency and ensure ethical production.
                </p>
              </div>
            </div>
          </div>

          {/* Future Trends */}
          <div className="bg-gray-800 text-white p-8 rounded-lg">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">The Future of Fashion Technology</h4>
              <p className="text-gray-300 max-w-3xl mx-auto">
                As we look ahead, emerging technologies promise to further transform how we design, produce, and experience fashion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h5 className="font-semibold mb-2">Digital Fashion</h5>
                <p className="text-gray-300 text-sm">
                  Virtual clothing and NFT fashion items are creating new markets and reducing physical waste
                </p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold mb-2">Biofabrication</h5>
                <p className="text-gray-300 text-sm">
                  Lab-grown materials and bio-engineered textiles will replace traditional resource-intensive production
                </p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold mb-2">Hyper-Personalization</h5>
                <p className="text-gray-300 text-sm">
                  AI-driven customization will create unique pieces tailored to individual preferences and body measurements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">Stay In Style</h3>
          <p className="text-gray-300 mb-8">Subscribe to our newsletter and get 10% off your first order</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-none border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 font-medium text-white transition-colors" style={{backgroundColor: '#2596be'}} onMouseEnter={e => ((e.target as HTMLButtonElement).style.backgroundColor = '#1e7a9a')} onMouseLeave={e => ((e.target as HTMLButtonElement).style.backgroundColor = '#2596be')}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Grabbly</h4>
              <p className="text-gray-300 text-sm">
                Your destination for premium fashion and timeless style.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Shop</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">Women</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Men</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Accessories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Size Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-300">
              <p>&copy; 2025 Grabbly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;