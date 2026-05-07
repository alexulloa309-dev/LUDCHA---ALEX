import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag, Star, Heart, ZoomIn, X } from 'lucide-react';

export default function LudchaStore() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [influencerIndex, setInfluencerIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setInfluencerIndex((prev) => (prev + 1) % influencersData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%238B6F47"/><text x="50" y="60" font-size="50" font-weight="bold" text-anchor="middle" fill="white" font-family="serif">LCH</text></svg>';
    document.head.appendChild(favicon);
  }, []);

  const generateProductCode = (seed) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt((seed + i) % chars.length);
    }
    return code;
  };

  const benefits = [
    { text: '📍 Envío a todo el país + CBA en el día', icon: '📦' },
    { text: '💳 20% OFF con transferencia o efectivo', icon: '💰' },
    { text: '3️⃣ 3 CUOTAS SIN INTERÉS', icon: '✨' }
  ];

  // PRODUCTOS REALES DEL CATÁLOGO LUDCHA
  const realProducts = {
    cuero: [
      {
        id: 'LCH-BR001',
        name: 'Birkin Shoulder',
        description: 'Clean, elegante y atemporal',
        medidas: 'Ancho: 27cm / Largo: 20cm',
        price: '$28.000',
        colors: ['#000000', '#8B4513'],
        image: '👜',
        material: 'Cuero Premium',
        bestseller: true,
        category: 'cuero'
      },
      {
        id: 'LCH-BR002',
        name: 'Birkin Chain',
        description: 'El estilo está en vos',
        medidas: 'Ancho: 34cm / Largo: 20cm',
        price: '$28.000',
        colors: ['#1F2937', '#4A5568'],
        image: '🎒',
        material: 'Cuero Premium',
        category: 'cuero'
      },
      {
        id: 'LCH-MB001',
        name: 'MasBolsos Belt - Rojo',
        description: 'El estilo está en vos',
        medidas: 'Ancho: 30cm / Largo: 15cm',
        price: '$28.000',
        colors: ['#8B0000'],
        image: '👛',
        material: 'Cuero Premium',
        category: 'cuero'
      },
      {
        id: 'LCH-MB002',
        name: 'MasBolsos Belt - Negro',
        description: 'El estilo está en vos',
        medidas: 'Ancho: 30cm / Largo: 15cm',
        price: '$28.000',
        colors: ['#000000'],
        image: '💼',
        material: 'Cuero Premium',
        category: 'cuero'
      },
      {
        id: 'LCH-MB003',
        name: 'MasBolsos Belt - Variantes',
        description: 'Múltiples opciones de tamaño',
        medidas: 'Ancho: 28-31cm / Largo: 14-20cm',
        price: '$28.000',
        colors: ['#000000', '#1F2937', '#8B4513'],
        image: '👝',
        material: 'Cuero Premium',
        category: 'cuero'
      }
    ],
    denim: [
      {
        id: 'LCH-DN001',
        name: 'Denim Classic',
        description: 'Versátil y moderna',
        medidas: 'Ancho: 30cm / Largo: 25cm',
        price: '$25.000',
        colors: ['#4A5568', '#667EEA'],
        image: '👖',
        material: 'Denim',
        category: 'denim'
      },
      {
        id: 'LCH-DN002',
        name: 'Denim Mini',
        description: 'Perfecta para el día a día',
        medidas: 'Ancho: 20cm / Largo: 18cm',
        price: '$22.000',
        colors: ['#2563EB', '#1E3A8A'],
        image: '🎀',
        material: 'Denim',
        limited: true,
        category: 'denim'
      },
      {
        id: 'LCH-DN003',
        name: 'Denim Chain',
        description: 'Con detalles metálicos',
        medidas: 'Ancho: 25cm / Largo: 20cm',
        price: '$26.000',
        colors: ['#1F2937', '#4A5568'],
        image: '💎',
        material: 'Denim',
        category: 'denim'
      }
    ],
    terciopelo: [
      {
        id: 'LCH-TV001',
        name: 'Velvet Luxe - Rojo',
        description: 'Sofisticada y elegante',
        medidas: 'Ancho: 28cm / Largo: 22cm',
        price: '$30.000',
        colors: ['#8B0000'],
        image: '💼',
        material: 'Terciopelo',
        bestseller: true,
        category: 'terciopelo'
      },
      {
        id: 'LCH-TV002',
        name: 'Velvet Luxe - Negro',
        description: 'Sofisticada y elegante',
        medidas: 'Ancho: 28cm / Largo: 22cm',
        price: '$30.000',
        colors: ['#000000'],
        image: '🎩',
        material: 'Terciopelo',
        category: 'terciopelo'
      },
      {
        id: 'LCH-TV003',
        name: 'Velvet Mini',
        description: 'Versión reducida de lujo',
        medidas: 'Ancho: 22cm / Largo: 18cm',
        price: '$28.000',
        colors: ['#8B0000', '#000000', '#4B0082'],
        image: '👑',
        material: 'Terciopelo',
        category: 'terciopelo'
      }
    ],
    goma: [
      {
        id: 'LCH-GM001',
        name: 'Sport Chic - Negro',
        description: 'Resistente y práctica',
        medidas: 'Ancho: 32cm / Largo: 24cm',
        price: '$20.000',
        colors: ['#000000'],
        image: '⚫',
        material: 'Goma Lycra',
        category: 'goma'
      },
      {
        id: 'LCH-GM002',
        name: 'Sport Chic - Blanco',
        description: 'Resistente y práctica',
        medidas: 'Ancho: 32cm / Largo: 24cm',
        price: '$20.000',
        colors: ['#FFFFFF'],
        image: '⚪',
        material: 'Goma Lycra',
        category: 'goma'
      },
      {
        id: 'LCH-GM003',
        name: 'Sport Chic - Variantes',
        description: 'Múltiples colores disponibles',
        medidas: 'Ancho: 32cm / Largo: 24cm',
        price: '$20.000',
        colors: ['#000000', '#FFFFFF', '#FF6B6B'],
        image: '🎯',
        material: 'Goma Lycra',
        category: 'goma'
      }
    ],
    especiales: [
      {
        id: 'LCH-SP001',
        name: 'Edición Limitada Star',
        description: 'Única y especial',
        medidas: 'Ancho: 25cm / Largo: 20cm',
        price: '$35.000',
        colors: ['#8B4513', '#D4AF37'],
        image: '⭐',
        material: 'Edición Especial',
        limited: true,
        category: 'especiales'
      },
      {
        id: 'LCH-SP002',
        name: 'Colección Exclusiva',
        description: 'Diseño único y limitado',
        medidas: 'Ancho: 26cm / Largo: 21cm',
        price: '$32.000',
        colors: ['#8B4513', '#FFFFFF', '#8B0000'],
        image: '✨',
        material: 'Edición Especial',
        limited: true,
        category: 'especiales'
      },
      {
        id: 'LCH-SP003',
        name: 'Premium Collection',
        description: 'Lo mejor de lo mejor',
        medidas: 'Ancho: 30cm / Largo: 23cm',
        price: '$38.000',
        colors: ['#8B4513', '#D4AF37', '#000000'],
        image: '👑',
        material: 'Edición Especial',
        bestseller: true,
        category: 'especiales'
      }
    ]
  };

  // Bestsellers
  const bestsellers = Object.values(realProducts)
    .flat()
    .filter(p => p.bestseller)
    .slice(0, 3);

  // Stock limitado
  const limitedStock = Object.values(realProducts)
    .flat()
    .filter(p => p.limited)
    .slice(0, 3);

  const influencersData = [
    { username: '@areacarletti_', followers: '45.2K', image: '👩', verified: true },
    { username: '@lovelybitchferias', followers: '38.9K', image: '👱‍♀️', verified: true },
    { username: '@ludcha_collab', followers: '52.1K', image: '👸', verified: true },
    { username: '@fashion_cba', followers: '29.5K', image: '💄', verified: false },
    { username: '@estilo_ludcha', followers: '41.3K', image: '👗', verified: false },
    { username: '@cartera_vibes', followers: '35.8K', image: '🎯', verified: false }
  ];

  const categories = [
    { name: 'Denim', slug: 'denim', icon: '👖', products: realProducts.denim },
    { name: 'Cuero Premium', slug: 'cuero', icon: '🧴', products: realProducts.cuero },
    { name: 'Terciopelo', slug: 'terciopelo', icon: '🎀', products: realProducts.terciopelo },
    { name: 'Goma Lycra', slug: 'goma', icon: '🌊', products: realProducts.goma },
    { name: 'Especiales', slug: 'especiales', icon: '✨', products: realProducts.especiales }
  ];

  const ProductCard = ({ item, limited = false, showQuickView = true }) => (
    <div className="group relative">
      <div className={`aspect-square rounded-xl mb-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden relative shadow-md hover:shadow-xl ${
        limited 
          ? 'bg-gradient-to-br from-red-50 to-orange-50' 
          : 'bg-gradient-to-br from-amber-50 to-amber-100'
      }`}
      onClick={() => showQuickView && setSelectedProduct(item)}>
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300 mb-2">{item.image}</span>
        {limited && item.limited && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            Stock Limitado
          </div>
        )}
        {item.bestseller && (
          <div className="absolute top-2 left-2 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⭐ Bestseller
          </div>
        )}
        {showQuickView && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-amber-900 px-4 py-2 rounded-full font-serif font-bold text-sm flex items-center gap-2">
                <ZoomIn size={16} />
                Ver Detalles
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          {item.colors.slice(0, 5).map((color, i) => (
            <div 
              key={i} 
              className="w-5 h-5 rounded-full border-2 border-gray-300 hover:scale-125 transition-transform cursor-pointer hover:border-amber-800" 
              style={{ backgroundColor: color }}
              title={`Color ${i + 1}`}
            ></div>
          ))}
          {item.colors.length > 5 && (
            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white">
              +{item.colors.length - 5}
            </div>
          )}
        </div>
        <h3 className="font-serif font-bold text-gray-900 text-sm leading-tight">{item.name}</h3>
        <p className="text-xs text-gray-600 font-serif">{item.description}</p>
        <p className="text-xs text-gray-500 font-mono">{item.medidas}</p>
        <p className="text-xl font-bold text-amber-800">{item.price}</p>
        <p className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded inline-block">
          {item.id}
        </p>
      </div>
    </div>
  );

  const CategoryGrid = ({ category }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white rounded-lg">
      {category.products && category.products.length > 0 ? (
        category.products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          <p className="font-serif">Carteras de esta categoría próximamente</p>
        </div>
      )}
    </div>
  );

  const handleInfluencerClick = (username) => {
    window.open(`https://instagram.com/${username.replace('@', '')}`, '_blank');
  };

  const scrollToCatalog = () => {
    const categoriesSection = document.getElementById('categorias');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modal de Detalles del Producto
  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-serif text-3xl font-bold text-amber-950">{product.name}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl font-light">
                <X size={32} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Imagen */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl aspect-square flex items-center justify-center shadow-lg">
                <span className="text-9xl">{product.image}</span>
              </div>
              
              {/* Detalles */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2 text-lg">Descripción</h3>
                  <p className="text-gray-600 font-serif">{product.description}</p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2 text-lg">Material</h3>
                  <p className="text-gray-600 font-serif text-lg font-bold text-amber-800">{product.material}</p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2 text-lg">Medidas</h3>
                  <p className="text-gray-600 font-mono text-sm bg-gray-100 p-3 rounded">{product.medidas}</p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-3 text-lg">Colores Disponibles</h3>
                  <div className="flex gap-4 flex-wrap">
                    {product.colors.map((color, i) => (
                      <div 
                        key={i} 
                        className="w-12 h-12 rounded-full border-3 border-gray-300 hover:border-amber-800 transition-all cursor-pointer shadow-md" 
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t-2 border-gray-200">
                  <p className="text-5xl font-bold text-amber-800 mb-4">{product.price}</p>
                  <p className="text-sm text-gray-500 font-mono mb-6 bg-gray-100 p-2 rounded">
                    Código: {product.id}
                  </p>
                  
                  <button className="w-full bg-amber-800 text-white py-4 rounded-full font-serif font-bold text-lg hover:bg-amber-900 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <ShoppingBag size={20} />
                    Consultar Disponibilidad
                  </button>
                  
                  {product.limited && (
                    <p className="text-center mt-4 text-red-600 font-serif font-bold animate-pulse">
                      ⚠️ Stock Limitado - ¡Apúrate!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      {/* Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      
      {/* Top Benefits Banner */}
      <div className="sticky top-0 z-40 bg-black text-white overflow-hidden h-12 flex items-center">
        <div className="w-full flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-full h-full flex items-center justify-center px-4 text-center font-serif text-sm md:text-base font-bold transition-all duration-1000 absolute ${
                  idx === benefitIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
          <div className="invisible flex items-center justify-center px-4 text-sm md:text-base font-bold">
            <span>{benefits[0].text}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-12 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer">
              <span className="text-white font-serif font-bold text-sm">LCH</span>
            </div>
            <span className="font-serif text-xl text-amber-900 font-bold tracking-widest">LUDCHA</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToCatalog}
              className="text-sm text-amber-900 hover:text-amber-950 transition-colors font-serif font-bold hover:underline"
            >
              Catálogo
            </button>
            <button className="bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-serif font-bold hover:bg-amber-900 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
              <ShoppingBag size={16} />
              Shop
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-amber-800 overflow-hidden flex items-center justify-center pt-12">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
          <div className="mb-8 inline-block animate-fadeIn">
            <div className="w-28 h-28 bg-white bg-opacity-10 rounded-full flex items-center justify-center border-4 border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300">
              <span className="text-white font-serif font-bold text-5xl">LCH</span>
            </div>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight px-2 animate-fadeIn">
            LUDCHA
          </h1>

          <p className="font-serif text-2xl md:text-3xl text-white mb-6 px-2 animate-fadeIn" style={{animationDelay: '100ms'}}>
            Carteras para las más bellas
          </p>

          <p className="font-serif text-lg md:text-xl text-white text-opacity-95 mb-10 max-w-2xl mx-auto px-2 animate-fadeIn" style={{animationDelay: '200ms'}}>
            Diseño, calidad y estilo que se adaptan a tu personalidad
          </p>

          <button 
            onClick={scrollToCatalog}
            className="bg-white text-amber-950 px-10 py-4 rounded-full text-lg font-serif font-bold hover:bg-amber-50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group shadow-lg hover:shadow-xl animate-fadeIn"
            style={{animationDelay: '300ms'}}
          >
            Explorar Colección
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white text-opacity-70" />
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-amber-950 mb-3">
              Nuestras Favoritas
            </h2>
            <p className="text-gray-600 font-serif">Las carteras más elegidas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {bestsellers.length > 0 ? bestsellers.map((item) => (
              <div key={item.id} className="text-center">
                <ProductCard item={item} />
              </div>
            )) : (
              <p className="col-span-3 text-center text-gray-500 font-serif">Productos destacados próximamente</p>
            )}
          </div>
        </div>
      </section>

      {/* Limited Stock Section */}
      {limitedStock.length > 0 && (
        <section className="py-20 px-4 bg-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-amber-950 mb-3">
                ¡Se Agotan!
              </h2>
              <p className="text-gray-600 font-serif">Stock limitado - Apúrate</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {limitedStock.map((item) => (
                <div key={item.id} className="text-center">
                  <ProductCard item={item} limited={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Influencers Banner Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-amber-950 mb-3">
              Nuestras Colaboraciones
            </h2>
            <p className="text-gray-600 font-serif">Amadas por los mejores estilos</p>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-12 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-102"
            onClick={() => handleInfluencerClick(influencersData[influencerIndex].username)}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative mb-8 inline-block">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white to-amber-100 flex items-center justify-center text-9xl border-4 border-white shadow-xl transition-transform duration-500 transform hover:scale-110">
                  {influencersData[influencerIndex].image}
                </div>
                {influencersData[influencerIndex].verified && (
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 border-4 border-white shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723p.226a3.066 3.066 0 015.695.74 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 01-.723 5.695 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-5.695-.74 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 01-.723-1.745 3.066 3.066 0 01.723-5.695 3.066 3.066 0 001.745-.723zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className="font-serif font-bold text-amber-950 text-4xl mb-2">
                {influencersData[influencerIndex].username}
              </h3>
              <p className="text-lg text-amber-800 font-serif mb-6">
                {influencersData[influencerIndex].followers} seguidores
              </p>

              <div className="mt-6 flex gap-2 justify-center">
                {influencersData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === influencerIndex 
                        ? 'bg-amber-800 w-8' 
                        : 'bg-amber-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-amber-950 mb-3">
              Mira todo nuestro stock
            </h2>
            <p className="text-gray-600 font-serif">Encuentra tu estilo perfecto</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(activeCategory === category.slug ? null : category.slug)}
                className={`px-6 py-3 rounded-full font-serif font-bold transition-all duration-300 hover:shadow-md ${
                  activeCategory === category.slug
                    ? 'bg-amber-800 text-white shadow-lg scale-105'
                    : 'bg-white text-amber-950 border-2 border-amber-200 hover:border-amber-800'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 text-xs bg-amber-200 text-amber-900 px-2 py-1 rounded-full font-bold">
                  {category.products.length}
                </span>
              </button>
            ))}
          </div>

          {activeCategory && (
            <div className="animate-fadeIn">
              <CategoryGrid category={categories.find(c => c.slug === activeCategory)} />
            </div>
          )}

          {!activeCategory && (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-amber-200">
              <p className="text-gray-600 text-lg font-serif mb-2">Selecciona una categoría para ver las carteras</p>
              <p className="text-sm text-gray-500 font-serif">
                {Object.values(realProducts).flat().length} diseños disponibles
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-amber-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            ¿Ya encontraste tu cartera?
          </h2>
          <p className="text-amber-100 mb-8 text-lg font-serif">
            Compra ahora y recibe tu pedido a domicilio en toda Argentina
          </p>
          <button className="bg-white text-amber-800 px-8 py-4 rounded-full font-serif font-bold hover:bg-amber-50 transition-colors inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-xl">
            <ShoppingBag size={20} />
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xs">LCH</span>
                </div>
                <span className="font-serif font-bold text-white tracking-widest">LUDCHA</span>
              </div>
              <p className="text-sm font-serif">Carteras con estilo y calidad</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white mb-4">Información</h4>
              <ul className="space-y-2 text-sm font-serif">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white mb-4">Síguenos</h4>
              <ul className="space-y-2 text-sm font-serif">
                <li><a href="https://instagram.com/ludcha.cba" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white mb-4">Contacto</h4>
              <p className="text-sm font-serif">Córdoba Capital, Argentina</p>
              <p className="text-sm font-serif">📧 info@ludcha.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm font-serif">© 2026 LUDCHA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
