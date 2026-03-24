/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Phone, Clock, Instagram, Facebook, ChevronRight, Utensils, Star, ArrowRight } from 'lucide-react';

const MENU_ITEMS = [
  { id: 1, name: "Classic Beef Shawarma", price: "₱85", description: "Tender beef strips, fresh veggies, and our signature garlic sauce.", category: "Best Seller" },
  { id: 2, name: "Chicken Shawarma Wrap", price: "₱75", description: "Grilled chicken breast with pickles and creamy tahini.", category: "Popular" },
  { id: 3, name: "Shawarma Rice Bowl", price: "₱110", description: "Your choice of meat served over fragrant turmeric rice.", category: "Filling" },
  { id: 4, name: "Cheesy Shawarma Fries", price: "₱95", description: "Crispy fries topped with shawarma meat and melted cheese.", category: "Sides" },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMenu = MENU_ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-olive selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-brand-orange">
            SHAWARMA BAYUGAN
          </h1>
          <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest">
            <a href="#home" className="hover:text-brand-orange transition-colors">Home</a>
            <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>
          <button className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            ORDER NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2076&auto=format&fit=crop" 
            alt="Delicious Shawarma" 
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/50 via-transparent to-brand-cream"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-widest uppercase mb-6">
              Authentic Middle Eastern Flavors
            </span>
            <h2 className="font-serif text-6xl md:text-8xl font-light leading-tight mb-8">
              Taste the Heart of <br />
              <span className="italic font-semibold text-brand-orange">Bayugan City</span>
            </h2>
            
            {/* Search Bar Component */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-brand-olive/40 group-focus-within:text-brand-orange transition-colors" />
              </div>
              <input 
                type="text"
                placeholder="Search our menu (e.g. Beef, Rice, Fries...)"
                className="w-full bg-white border-2 border-brand-olive/10 rounded-2xl py-5 pl-14 pr-6 text-lg focus:outline-none focus:border-brand-orange shadow-xl shadow-brand-olive/5 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-brand-olive/5 overflow-hidden z-20">
                  {filteredMenu.length > 0 ? (
                    filteredMenu.map(item => (
                      <div key={item.id} className="p-4 hover:bg-brand-cream transition-colors flex justify-between items-center border-b border-brand-olive/5 last:border-0">
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-xs opacity-60">{item.description}</p>
                        </div>
                        <span className="font-serif font-bold text-brand-orange">{item.price}</span>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center opacity-50 italic">
                      No items found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <p className="mt-8 text-lg opacity-70 max-w-2xl mx-auto">
              From our family to yours, we bring the most authentic, juicy, and flavorful shawarma experience to the streets of Bayugan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">Our Signature Menu</h3>
              <p className="opacity-60 max-w-md">Hand-crafted with fresh ingredients and secret spices passed down through generations.</p>
            </div>
            <div className="flex space-x-4">
              <button className="p-3 rounded-full border border-brand-olive/10 hover:bg-brand-orange hover:text-white transition-all">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <button className="p-3 rounded-full border border-brand-olive/10 hover:bg-brand-orange hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-brand-cream rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={`https://picsum.photos/seed/shawarma${item.id}/600/800`} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl font-bold">{item.name}</h4>
                  <span className="text-brand-orange font-bold">{item.price}</span>
                </div>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-brand-olive text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden aspect-video shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2048&auto=format&fit=crop" 
                alt="Cooking Shawarma" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Bringing the Mediterranean to Bayugan</h3>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Shawarma Bayugan started with a simple mission: to provide high-quality, authentic flavors that everyone can enjoy. We believe that great food brings people together, and there's nothing better than a perfectly grilled wrap shared with friends.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif text-brand-orange mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Fresh Ingredients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-orange mb-2">5,000+</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Info */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="font-serif text-3xl">Visit Us</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Location</p>
                    <p className="opacity-60 text-sm">Poblacion, Bayugan City,<br />Agusan del Sur, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="opacity-60 text-sm">+63 912 345 6789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Hours</p>
                    <p className="opacity-60 text-sm">Mon - Sun: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-10 rounded-[40px] shadow-xl shadow-brand-olive/5 border border-brand-olive/5">
              <h4 className="font-serif text-3xl mb-8">Send us a message</h4>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Name</label>
                  <input type="text" className="w-full bg-brand-cream/50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email</label>
                  <input type="email" className="w-full bg-brand-cream/50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                  <textarea rows={4} className="w-full bg-brand-cream/50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-brand-orange outline-none transition-all resize-none"></textarea>
                </div>
                <button className="md:col-span-2 bg-brand-olive text-white py-4 rounded-2xl font-bold hover:bg-brand-orange transition-colors flex items-center justify-center space-x-2">
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-olive/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm opacity-50">© 2026 Shawarma Bayugan. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="p-2 rounded-full hover:bg-brand-orange/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-brand-orange/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
