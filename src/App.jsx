import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Quote, 
  Menu, 
  X, 
  Send, 
  MessageCircle, 
  Sparkles, 
  ArrowUpRight, 
  Eye, 
  ChevronDown 
} from 'lucide-react';
import { BRAND, SERVICES, REVIEWS, BLOGS, GALLERY_ITEMS } from './data/siteData';
import ReviewsPage from './ReviewsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'reviews'
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Civil work', message: '' });
  const [formSent, setFormSent] = useState(false);

  // Gallery Display State (Default 8 images)
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  // Agar Reviews page khola hai toh ReviewsPage render karo
  if (currentPage === 'reviews') {
    return <ReviewsPage onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#0E1512] text-[#F3F4F6] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#52B788] selection:text-[#0E1512]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0E1512]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#52B788]/60 bg-white flex items-center justify-center shrink-0 shadow-lg shadow-[#52B788]/10">
              <img 
                src="/logo.png" 
                alt="Ghar Decor Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-4 h-4 text-[#52B788] fill-[#52B788]" />
                Ghar<span className="text-[#52B788]">Decor</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-slate-400 font-semibold">
                Decor & More • Agra
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-300">
            <a href="#about" className="hover:text-[#52B788] transition-colors">About</a>
            <a href="#services" className="hover:text-[#52B788] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#52B788] transition-colors">Gallery</a>
            
            {/* Reviews Page Redirection Button */}
            <button 
              onClick={() => setCurrentPage('reviews')} 
              className="hover:text-[#52B788] transition-colors cursor-pointer flex items-center gap-1 font-bold text-slate-200"
            >
              <span>Reviews</span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#52B788]/20 text-[#52B788] border border-[#52B788]/30">52+</span>
            </button>

            <a href="#blog" className="hover:text-[#52B788] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#52B788] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white px-4 py-2"
            >
              Get Quote
            </a>
            <a
              href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
              className="px-5 py-2.5 rounded-xl bg-[#52B788] text-[#0E1512] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#52B788]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Studio</span>
            </a>
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#16211C] border-b border-white/10 px-6 py-6 flex flex-col space-y-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white">Services</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white">Gallery</a>
            <button 
              onClick={() => { setCurrentPage('reviews'); setMenuOpen(false); }} 
              className="text-left text-sm uppercase tracking-wider text-[#52B788] font-bold flex items-center justify-between"
            >
              <span>Customer Reviews</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-[#52B788]/20">52+</span>
            </button>
            <a href="#blog" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white">Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider text-white">Contact</a>
            <a 
              href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
              className="w-full py-3 bg-[#52B788] text-[#0E1512] font-bold text-center text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call: {BRAND?.phone || '+91 84452 00348'}
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#182820] via-[#0E1512] to-[#0E1512]">
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#52B788]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              
              <button 
                onClick={() => setCurrentPage('reviews')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md hover:border-[#52B788]/60 transition-all cursor-pointer"
              >
                <div className="flex items-center text-[#52B788]">
                  <Star className="w-3.5 h-3.5 fill-[#52B788]" />
                  <span className="font-bold ml-1 text-white">{BRAND?.rating || '4.8'}</span>
                </div>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{BRAND?.reviewsCount || '52'} Google Reviews in Agra</span>
                <ArrowRight className="w-3 h-3 text-[#52B788]" />
              </button>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]">
                POP Ceiling & <br />
                <span className="font-['Playfair_Display',serif] italic font-normal text-[#52B788] underline decoration-[#52B788]/30 underline-offset-8 pr-2">
                  PVC Panel
                </span> 
                <br />
                Interiors of your choice!
              </h1>

              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                Specialists in designer POP false ceilings, waterproof PVC wall cladding, customized wallpapers, modular woodwork, and ambient COB profile lighting across Agra.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#gallery"
                  className="px-7 py-4 rounded-xl bg-[#52B788] text-[#0E1512] font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-xl shadow-[#52B788]/20 flex items-center gap-2 group"
                >
                  <span>Explore Work Gallery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
                  className="px-7 py-4 rounded-xl bg-white/5 border border-white/15 hover:border-[#52B788] hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#52B788]" />
                  <span>Free Consultation</span>
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-xl font-bold text-white">POP & PVC</div>
                  <div className="text-slate-400 text-[11px]">Specialist Execution</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#52B788]">100%</div>
                  <div className="text-slate-400 text-[11px]">Turnkey Delivery</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Fatehabad Rd</div>
                  <div className="text-slate-400 text-[11px]">Prime Agra Studio</div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                  alt="POP Ceiling and PVC Interior Work by Ghar Decor Agra" 
                  className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1512] via-transparent to-black/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                    <span>Signature Site Showcase</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-[#52B788] text-[#0E1512] text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    POP & PVC Done
                  </div>
                </div>

                <div className="absolute top-28 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#52B788]" />
                  <span>POP & Profile Lights</span>
                </div>

                <div className="absolute bottom-16 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#52B788]" />
                  <span>PVC Fluted Panels</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Fatehabad Road Villa</span>
                  <a href="#gallery" className="text-[#52B788] font-bold flex items-center gap-1 hover:underline">
                    <span>See All Designs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating Verified Review Card (Clickable to Reviews Page) */}
              <button 
                onClick={() => setCurrentPage('reviews')}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-gradient-to-r from-[#18261E]/95 to-[#121B16]/95 border border-[#52B788]/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[280px] z-20 text-left hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Quote className="w-3.5 h-3.5 text-[#52B788]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Google Verified Client</span>
                </div>
                <p className="text-[11px] text-white/90 italic leading-snug mb-2 font-['Playfair_Display',serif]">
                  "Shaandaar kaam Kiya h Munasib rate pr..."
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#52B788] font-bold">
                  <span>~ Mohd A. (Agra)</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#52B788]" />
                    ))}
                  </div>
                </div>
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-[#121B16] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Gallery
            </h2>
            <div className="w-12 h-1 bg-[#52B788] mx-auto mt-2 rounded-full" />
            <p className="text-xs text-slate-400 mt-2 font-light">
              POP False Ceilings • PVC Wall Panels • COB Profile Lighting • Complete Interiors
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {(GALLERY_ITEMS || []).slice(0, visibleCount).map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#18241E] cursor-pointer shadow-md hover:shadow-xl hover:border-[#52B788]/60 transition-all duration-300"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#52B788] text-[#0E1512] flex items-center justify-center shadow-lg mb-2">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#52B788]">
                    {item.category}
                  </span>
                  <p className="text-[11px] text-white font-medium line-clamp-2 mt-1 leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            {visibleCount < (GALLERY_ITEMS || []).length ? (
              <button
                onClick={() => setVisibleCount((GALLERY_ITEMS || []).length)}
                className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full border border-[#52B788] text-[#52B788] hover:bg-[#52B788] hover:text-[#0E1512] font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Show more ({(GALLERY_ITEMS || []).length - visibleCount} more designs)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            ) : (
              <p className="text-xs text-slate-400">
                All designs loaded. Call Ghar Decor studio for site measurements & estimate.
              </p>
            )}
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#0E1512] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-3">
                About Ghar Decor
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight mb-6">
                Your Space. <br />
                <span className="font-['Playfair_Display',serif] italic font-normal text-[#52B788]">Our Skilled Craft.</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#16221B] border border-white/10 text-xs text-slate-300 space-y-2">
                <p><strong className="text-white">Studio Address:</strong> {BRAND?.address || 'Fatehabad Road, Agra'}</p>
                <p><strong className="text-white">Hours:</strong> {BRAND?.hours || '10:00 AM – 10:00 PM'}</p>
                <p><strong className="text-white">Phone:</strong> {BRAND?.phone || '+91 84452 00348'}</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {BRAND?.aboutText || 'Ghar Decor delivers complete turnkey interior solutions including POP false ceiling, PVC wall paneling, modular woodwork, and civil renovation in Agra.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs font-semibold text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788]" /> Skilled POP & PVC Applicators
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788]" /> Timely Delivered Service
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788]" /> Munasib (Fair) Rates
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788]" /> Complete Solution Under One Roof
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#121B16] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">
                What We Provide
              </span>
              <h2 className="text-3xl sm:text-5xl text-white font-bold tracking-tight">
                Our Core Services
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-xs mt-4 md:mt-0 font-medium">
              All interior execution, POP ceiling, PVC panels, and home improvements managed under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(SERVICES || []).map((item) => (
              <div 
                key={item.id}
                className="p-8 rounded-2xl bg-[#0E1512] border border-white/10 hover:border-[#52B788]/60 transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-[#52B788] font-bold">{item.id}</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#52B788] transition-colors" />
                </div>
                <h3 className="text-xl text-white font-bold mb-2 group-hover:text-[#52B788] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS PREVIEW ON HOME PAGE */}
      <section id="reviews" className="py-24 bg-[#0E1512] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">
                Google Customer Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">
                4.8 Rating from 52+ Happy Clients
              </h2>
            </div>

            <button
              onClick={() => setCurrentPage('reviews')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-[#52B788] hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all mt-4 md:mt-0 cursor-pointer"
            >
              <span>See All 52+ Reviews</span>
              <ArrowRight className="w-4 h-4 text-[#52B788]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(REVIEWS || []).slice(0, 3).map((rev, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#16221B] border border-white/10 flex flex-col justify-between hover:border-[#52B788]/40 transition-all cursor-pointer"
                onClick={() => setCurrentPage('reviews')}
              >
                <div>
                  <Quote className="w-8 h-8 text-[#52B788] mb-4 opacity-50" />
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6 font-['Playfair_Display',serif]">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-base text-white font-bold capitalize">~ {rev.author}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Verified Google Review</p>
                  </div>
                  <div className="flex text-[#52B788]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#52B788]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-24 bg-[#121B16] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">
                Latest Insights
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">
                Ghar Decor Blog
              </h2>
            </div>
            <span className="text-xs text-[#52B788] uppercase tracking-widest font-bold">Agra Interior Tips</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(BLOGS || []).map((blog, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#0E1512] border border-white/10 hover:border-[#52B788]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] text-[#52B788] uppercase tracking-wider block mb-2 font-bold">
                    Posted on: {blog.date}
                  </span>
                  <h3 className="text-2xl text-white font-bold mb-3 hover:text-[#52B788] transition-colors cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs uppercase tracking-widest text-[#52B788] font-bold">
                  <span>Read Full Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#0E1512]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold leading-tight">
                Consult With Ghar Decor Agra
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect with our team for site surveys, POP & PVC evaluations, wooden work quotations, and complete home interior execution.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 font-bold block">Phone</span>
                    <a href={`tel:${BRAND?.phoneRaw || '+918445200348'}`} className="text-sm font-bold text-white hover:text-[#52B788]">
                      {BRAND?.phone || '+91 84452 00348'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 font-bold block">Address</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {BRAND?.address || 'Fatehabad Road, Agra'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 font-bold block">Business Hours</span>
                    <p className="text-xs text-slate-300">
                      {BRAND?.hours || '10:00 AM – 10:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#16221B] text-white p-8 rounded-3xl border border-white/10 shadow-2xl">
              {formSent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-[#52B788] mx-auto mb-3" />
                  <h3 className="text-2xl text-white font-bold mb-2">Message Received</h3>
                  <p className="text-xs text-slate-400">Ghar Decor will contact you shortly on your provided phone number.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        className="w-full bg-[#0E1512] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 84452 XXXXX"
                        className="w-full bg-[#0E1512] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Required Service</label>
                    <select
                      className="w-full bg-[#0E1512] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#52B788] focus:outline-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {(SERVICES || []).map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Complete Home Makeover">Complete Interior Makeover</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Your Requirement / Query</label>
                    <textarea
                      rows={3}
                      placeholder="Mention your requirements, area in Agra, or timing..."
                      className="w-full bg-[#0E1512] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#52B788]/20 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#16221B] rounded-2xl overflow-hidden border border-white/20 p-3 shadow-2xl"
          >
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#52B788] hover:text-[#0E1512] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={lightboxImg.img} 
              alt={lightboxImg.title} 
              className="w-full max-h-[75vh] object-cover rounded-xl"
            />
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-bold text-[#52B788] uppercase">{lightboxImg.category}</span>
                <h3 className="text-lg font-bold">{lightboxImg.title}</h3>
                <p className="text-xs text-slate-400">Ghar Decor Site Execution • Agra</p>
              </div>
              <a 
                href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
                className="px-5 py-2.5 rounded-xl bg-[#52B788] text-[#0E1512] text-xs font-bold uppercase tracking-wider text-center"
              >
                Inquire For Similar Design
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#090E0C] text-slate-400 border-t border-white/5 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#52B788]/50 bg-white flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="Ghar Decor" 
                className="w-full h-full object-contain" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <p className="font-bold text-white tracking-wider uppercase">{BRAND?.name || 'Ghar Decor'}</p>
              <p className="text-[10px] text-slate-500">{BRAND?.address || 'Fatehabad Road, Agra'}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setCurrentPage('reviews')} 
              className="text-slate-400 hover:text-[#52B788] transition-colors cursor-pointer"
            >
              All Customer Reviews (52+)
            </button>
            <a href={`tel:${BRAND?.phoneRaw || '+918445200348'}`} className="text-[#52B788] font-semibold hover:underline">
              Call: {BRAND?.phone || '+91 84452 00348'}
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918445200348?text=Hello%20Ghar%20Decor,%20I%20want%20to%20inquire%20about%20POP%20and%20PVC%20interior%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider pr-1">WhatsApp</span>
      </a>

      {/* MOBILE BOTTOM STICKY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#16221B]/95 border-t border-white/10 p-3 flex gap-2">
        <a 
          href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
          className="flex-1 py-3 bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-wider text-center rounded-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" /> Call Now
        </a>
        <button 
          onClick={() => setCurrentPage('reviews')}
          className="flex-1 py-3 bg-white/10 text-white font-medium text-xs uppercase tracking-wider text-center rounded-xl flex items-center justify-center"
        >
          Reviews (52+)
        </button>
      </div>

    </div>
  );
}