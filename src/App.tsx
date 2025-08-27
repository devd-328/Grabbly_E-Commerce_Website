import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, ChevronDown, Star, Truck, Shield, RefreshCw, Store } from 'lucide-react';

// Loading Screen Component
const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 69, 193, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 193, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Purple Blur Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Loading Content */}
      <div className="relative text-center">
        <div className="flex items-center space-x-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
            <Store size={24} className="text-black" />
          </div>
          <h1 className="text-4xl font-bold text-white">Grabbly</h1>
        </div>
        
        {/* Animated Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-300 mt-4 animate-pulse">Loading your fashion experience...</p>
      </div>
    </div>
  );
};

// Women Page Component
const WomenPage = ({ onBack }) => {
  const womenProducts = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: 159,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Casual Blouse",
      price: 79,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 299,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "High Heels",
      price: 189,
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Women's Collection</h2>
          <p className="text-gray-300">Discover elegant and sophisticated pieces for the modern woman</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {womenProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-800 mb-4 rounded-lg">
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
    </div>
  );
};

// Men Page Component
const MenPage = ({ onBack }) => {
  const menProducts = [
    {
      id: 1,
      name: "Classic Suit",
      price: 399,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Casual Shirt",
      price: 89,
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 259,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Dress Shoes",
      price: 179,
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Men's Collection</h2>
          <p className="text-gray-300">Sophisticated styles for the modern gentleman</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {menProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-800 mb-4 rounded-lg">
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
    </div>
  );
};

// Accessories Page Component
const AccessoriesPage = ({ onBack }) => {
  const accessoryProducts = [
    {
      id: 1,
      name: "Designer Watch",
      price: 299,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Silk Scarf",
      price: 89,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Leather Belt",
      price: 129,
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Sunglasses",
      price: 159,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Accessories</h2>
          <p className="text-gray-300">Complete your look with our premium accessories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {accessoryProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-800 mb-4 rounded-lg">
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
    </div>
  );
};

// Sale Page Component
const SalePage = ({ onBack }) => {
  const saleProducts = [
    {
      id: 1,
      name: "Summer Dress",
      price: 59,
      originalPrice: 99,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Casual Jacket",
      price: 89,
      originalPrice: 149,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Designer Bag",
      price: 199,
      originalPrice: 299,
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Sneakers",
      price: 79,
      originalPrice: 129,
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Sale</h2>
          <p className="text-gray-300">Don't miss out on these amazing deals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {saleProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-800 mb-4 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  SALE
                </div>
                <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={16} />
                </button>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">{product.name}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                </div>
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
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'women':
        return <WomenPage onBack={() => setCurrentPage('home')} />;
      case 'men':
        return <MenPage onBack={() => setCurrentPage('home')} />;
      case 'accessories':
        return <AccessoriesPage onBack={() => setCurrentPage('home')} />;
      case 'sale':
        return <SalePage onBack={() => setCurrentPage('home')} />;
      default:
        return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <>
      {/* Hero Section with Spline Animation */}
      <section className="relative h-[70vh] bg-gray-900 flex items-center overflow-hidden">
        {/* Spline Animation Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/shirtexpressionanimation-TOnOPrU3PLpnLROWTqrJoPVU/"
            className="w-full h-full border-none"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            New Collection
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover the latest trends in fashion. Elegant designs that define your style.
          </p>
          <button className="px-8 py-3 text-lg font-medium text-white transition-colors rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
                <div className="relative overflow-hidden bg-gray-800 mb-4 rounded-lg">
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

      {/* Technology in Fashion Section with Grid Background and Purple Blur */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 193, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 193, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technology in Fashion</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover how cutting-edge technology is transforming the fashion industry, 
              from smart textiles to AI-powered design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Smart Textiles */}
            <div className="space-y-6 relative">
              {/* Purple blur behind card */}
              <div className="absolute -inset-4 bg-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Smart Textiles & Wearables</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Revolutionary fabrics embedded with sensors and electronics are creating clothing that responds to your body and environment. 
                  From temperature-regulating materials to fitness-tracking garments, smart textiles are making fashion more functional than ever.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Example:</strong> Nike's Adapt sneakers automatically adjust fit using smartphone connectivity, 
                    while Levi's Trucker Jacket integrates touch-sensitive fabric for music and call control.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Printing */}
            <div className="space-y-6 relative">
              {/* Purple blur behind card */}
              <div className="absolute -inset-4 bg-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">3D Printing & Manufacturing</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Additive manufacturing is revolutionizing fashion production, enabling designers to create complex geometries 
                  and customized pieces impossible with traditional methods. This technology reduces waste and allows for on-demand production.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Example:</strong> Adidas Futurecraft 4D shoes feature 3D-printed midsoles, while designers like Iris van Herpen 
                    create avant-garde couture pieces using advanced 3D printing techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Virtual Reality */}
            <div className="space-y-6 relative">
              {/* Purple blur behind card */}
              <div className="absolute -inset-4 bg-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">AI & Virtual Reality</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Artificial intelligence is transforming fashion through trend prediction, personalized recommendations, and virtual try-on experiences. 
                  AR and VR technologies are creating immersive shopping experiences and revolutionizing the design process.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Example:</strong> Sephora's Virtual Artist app uses AR for makeup try-ons, while Stitch Fix employs AI algorithms 
                    to curate personalized clothing selections for millions of customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainable Technology */}
            <div className="space-y-6 relative">
              {/* Purple blur behind card */}
              <div className="absolute -inset-4 bg-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Sustainable Innovation</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Technology is driving sustainability in fashion through innovative materials, circular design principles, and supply chain transparency. 
                  From lab-grown leather to recycling technologies, the industry is becoming more environmentally conscious.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Example:</strong> Bolt Threads creates Mylo leather from mushroom roots, while Patagonia uses blockchain 
                    technology to track supply chain transparency and ensure ethical production.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Trends */}
          <div className="relative">
            {/* Purple blur behind card */}
            <div className="absolute -inset-4 bg-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm text-white p-8 rounded-2xl border border-gray-700">
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
              className="flex-1 px-4 py-3 rounded-2xl border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 font-medium text-white transition-colors rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                  <Store size={18} className="text-black" />
                </div>
                <h4 className="text-lg font-bold text-white">Grabbly</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Your destination for premium fashion and timeless style.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Shop</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('women')} className="text-gray-300 hover:text-white">Women</button></li>
                <li><button onClick={() => setCurrentPage('men')} className="text-gray-300 hover:text-white">Men</button></li>
                <li><button onClick={() => setCurrentPage('accessories')} className="text-gray-300 hover:text-white">Accessories</button></li>
                <li><button onClick={() => setCurrentPage('sale')} className="text-gray-300 hover:text-white">Sale</button></li>
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
    </>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* More Transparent Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-black/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                  <Store size={18} className="text-black" />
                </div>
                <h1 className="text-2xl font-bold text-white">Grabbly</h1>
              </button>
              
              <nav className="hidden md:flex space-x-8">
                <button onClick={() => setCurrentPage('women')} className="text-gray-300 hover:text-white transition-colors">Women</button>
                <button onClick={() => setCurrentPage('men')} className="text-gray-300 hover:text-white transition-colors">Men</button>
                <button onClick={() => setCurrentPage('accessories')} className="text-gray-300 hover:text-white transition-colors">Accessories</button>
                <button onClick={() => setCurrentPage('sale')} className="text-gray-300 hover:text-white transition-colors">Sale</button>
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
        </div>
      </header>

      {renderPage()}
    </div>
  );
}

export default App;