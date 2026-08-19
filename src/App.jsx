import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
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
  ChevronDown,
  Search,
  ArrowLeft
} from 'lucide-react';
import { BRAND, SERVICES, REVIEWS, BLOGS, GALLERY_ITEMS } from './data/siteData';

// --- Scroll To Top On URL Change ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ==========================================
// 1. HOME PAGE COMPONENT
// ==========================================
function HomePage({ setLightboxImg }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#182820] via-[#0E1512] to-[#0E1512]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#52B788]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <Link 
                to="/reviews"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md hover:border-[#52B788]/60 transition-all cursor-pointer"
              >
                <div className="flex items-center text-[#52B788]">
                  <Star className="w-3.5 h-3.5 fill-[#52B788]" />
                  <span className="font-bold ml-1 text-white">{BRAND.rating}</span>
                </div>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{BRAND.reviewsCount} Google Reviews in Agra</span>
                <ArrowRight className="w-3 h-3 text-[#52B788]" />
              </Link>

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
                <Link
                  to="/gallery"
                  className="px-7 py-4 rounded-xl bg-[#52B788] text-[#0E1512] font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-xl shadow-[#52B788]/20 flex items-center gap-2 group"
                >
                  <span>Explore Work Gallery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${BRAND.phoneRaw}`}
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
                  alt="POP Ceiling and PVC Interior Work" 
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

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Fatehabad Road Villa</span>
                  <Link to="/gallery" className="text-[#52B788] font-bold flex items-center gap-1 hover:underline">
                    <span>See All Designs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <Link 
                to="/reviews"
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-gradient-to-r from-[#18261E]/95 to-[#121B16]/95 border border-[#52B788]/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[280px] z-20 text-left hover:scale-105 transition-transform"
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
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#121B16] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">Popular Interior Services</h2>
            </div>
            <Link to="/services" className="text-xs text-[#52B788] uppercase tracking-wider font-bold hover:underline flex items-center gap-1.5 mt-3 md:mt-0">
              <span>View All 11 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((item) => (
              <div key={item.id} className="p-8 rounded-2xl bg-[#0E1512] border border-white/10 hover:border-[#52B788]/60 transition-all">
                <span className="font-mono text-sm text-[#52B788] font-bold block mb-3">{item.id}</span>
                <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-[#0E1512] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">Recent Execution</span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">POP Ceiling & PVC Gallery</h2>
            </div>
            <Link to="/gallery" className="text-xs text-[#52B788] uppercase tracking-wider font-bold hover:underline flex items-center gap-1.5 mt-3 md:mt-0">
              <span>Open Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div key={item.id} onClick={() => setLightboxImg(item)} className="aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer group relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-[10px] font-bold uppercase text-[#52B788]">{item.category}</span>
                  <p className="text-[11px] text-white font-medium line-clamp-2 mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 2. ABOUT PAGE COMPONENT
// ==========================================
function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#182820] via-[#121B16] to-[#0E1512] p-8 sm:p-14 mb-16 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block">About Our Studio</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Architectural Elegance & <br />
            <span className="font-['Playfair_Display',serif] italic font-normal text-[#52B788]">Quality Execution in Agra</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            {BRAND.aboutText}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why Agra Homeowners Trust Ghar Decor</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#16221B] border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#52B788] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Skilled POP & PVC Applicators</strong>
                Precision laser-level false ceiling channels, moisture-resistant gypsum sheets, and interlocking PVC louvers.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#16221B] border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#52B788] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">100% Turnkey Solutions</strong>
                We handle civil work, carpentry, tiles, painting, and electrical lighting under one roof.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#16221B] border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#52B788] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm mb-1">Munasib (Fair) Market Rates</strong>
                Transparent square-foot pricing with zero hidden charges and material-grade guarantees.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#16221B] p-8 rounded-3xl border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Studio Information</h3>
          <div className="space-y-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">Studio Location</span>
              <p className="text-white font-medium mt-1">{BRAND.address}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">Working Timings</span>
              <p className="text-white font-medium mt-1">{BRAND.hours}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">Direct Contact</span>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-[#52B788] font-bold text-sm hover:underline block mt-1">
                {BRAND.phone}
              </a>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="w-full py-3.5 bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all text-center block"
          >
            Book a Free Site Survey
          </Link>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SERVICES PAGE COMPONENT
// ==========================================
function ServicesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">Comprehensive Solutions</span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Our 11 Core Interior Services</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-3">
          From individual ceiling and wall treatments to full turnkey residential and commercial renovations across Agra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((item) => (
          <div 
            key={item.id}
            className="p-8 rounded-2xl bg-[#16221B] border border-white/10 hover:border-[#52B788]/60 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-[#52B788] font-bold">{item.id}</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#52B788]/30 group-hover:bg-[#52B788] transition-colors" />
              </div>
              <h3 className="text-xl text-white font-bold mb-3 group-hover:text-[#52B788] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Agra Service Area</span>
              <Link 
                to="/contact"
                className="text-xs text-[#52B788] font-bold flex items-center gap-1 hover:underline"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. GALLERY PAGE COMPONENT
// ==========================================
function GalleryPage({ setLightboxImg }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === filter);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">Our Portfolio</span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">POP & PVC Design Gallery</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-3">
          Explore completed residential living rooms, master bedrooms, TV consoles, and ambient lighting setups.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {['All', 'POP Ceiling', 'PVC Panels', 'Interior Work'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filter === cat
                ? 'bg-[#52B788] text-[#0E1512] shadow-lg shadow-[#52B788]/20'
                : 'bg-[#16221B] text-slate-300 border border-white/10 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div 
            key={item.id}
            onClick={() => setLightboxImg(item)}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#16221B] cursor-pointer shadow-md hover:shadow-xl hover:border-[#52B788]/60 transition-all duration-300"
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#52B788]">{item.category}</span>
              <p className="text-[11px] text-white font-medium line-clamp-2 mt-1 leading-tight">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 5. REVIEWS PAGE COMPONENT
// ==========================================
function ReviewsPage() {
  const [search, setSearch] = useState('');
  const filtered = REVIEWS.filter(r => 
    r.quote.toLowerCase().includes(search.toLowerCase()) || 
    r.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#182820] via-[#121B16] to-[#0E1512] p-8 sm:p-12 mb-12 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#52B788]/10 border border-[#52B788]/30 text-xs text-[#52B788] font-bold">
            <Star className="w-3.5 h-3.5 fill-[#52B788]" />
            <span>Google Verified Customer Testimonials</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Reviews from our <br />
            <span className="font-['Playfair_Display',serif] italic font-normal text-[#52B788]">Customers</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            See how we take care of our customers' experience with reliability, top quality, fair pricing, and expert craftsmanship in Agra.
          </p>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <span>4.8</span>
                <div className="flex text-[#52B788]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#52B788]" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400">Average Google Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#52B788]">52+</div>
              <p className="text-[11px] text-slate-400">Verified Reviews</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-white">100%</div>
              <p className="text-[11px] text-slate-400">Client Satisfaction Target</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            placeholder="Search reviews by keyword (e.g. POP, PVC, Adil)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#16221B] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none"
          />
        </div>
        <div className="text-xs text-slate-400">
          Showing <strong className="text-white">{filtered.length}</strong> of {REVIEWS.length} customer reviews
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((rev, idx) => (
          <div 
            key={idx}
            className="p-7 rounded-2xl bg-[#16221B] border border-white/10 hover:border-[#52B788]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#52B788]">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#52B788]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#52B788]/30 group-hover:text-[#52B788]/60 transition-colors" />
              </div>

              <p className="text-sm text-slate-200 leading-relaxed italic mb-6 font-['Playfair_Display',serif]">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white capitalize">{rev.author}</h3>
                <p className="text-[10px] text-[#52B788] uppercase tracking-wider font-semibold">Verified Google Review • Agra</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0E1512] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                {rev.author.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 6. BLOG PAGE COMPONENT
// ==========================================
function BlogPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block mb-2">Knowledge Base</span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Ghar Decor Insights & Guides</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-3">
          Helpful articles and expert interior design tips specifically written for Agra homes and office spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <div 
            key={blog.id}
            className="p-8 rounded-2xl bg-[#16221B] border border-white/10 hover:border-[#52B788]/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-[#52B788] font-bold mb-3">
                <span>{blog.date}</span>
                <span className="text-slate-500">{blog.readTime || '5 min read'}</span>
              </div>
              <h3 className="text-xl text-white font-bold mb-3 group-hover:text-[#52B788] transition-colors leading-snug">
                {blog.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {blog.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs uppercase tracking-widest text-[#52B788] font-bold">
              <span>Read Article</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 7. CONTACT PAGE COMPONENT
// ==========================================
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'POP False Ceiling', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#52B788] font-bold block">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Consult With Ghar Decor Agra
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Connect with our studio team for site surveys, POP & PVC evaluations, wooden work quotations, and complete home interior execution.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#16221B] border border-white/10">
              <Phone className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-bold block">Studio Phone</span>
                <a href={`tel:${BRAND.phoneRaw}`} className="text-sm font-bold text-white hover:text-[#52B788]">
                  {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#16221B] border border-white/10">
              <MapPin className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-bold block">Studio Address</span>
                <p className="text-xs text-slate-300 leading-relaxed">{BRAND.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#16221B] border border-white/10">
              <Clock className="w-5 h-5 text-[#52B788] shrink-0 mt-1" />
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-bold block">Business Hours</span>
                <p className="text-xs text-slate-300">{BRAND.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#16221B] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Request Free Site Measurement</h2>
          <p className="text-xs text-slate-400 mb-6">Fill in your details below and Mr. Adil Ali will get back to you within 2 business hours.</p>

          {formSent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-[#52B788] mx-auto mb-3" />
              <h3 className="text-2xl text-white font-bold mb-2">Inquiry Received Successfully</h3>
              <p className="text-xs text-slate-400">Ghar Decor team will contact you shortly on {formData.phone || 'your phone'}.</p>
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
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Complete Home Makeover">Complete Turnkey Interior Makeover</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Your Requirement / Area in Agra</label>
                <textarea
                  rows={3}
                  placeholder="Mention your requirements, property location in Agra, or timing..."
                  className="w-full bg-[#0E1512] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#52B788]/20 cursor-pointer"
              >
                <span>Send Estimate Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

// ==========================================
// MAIN APP WRAPPER WITH ROUTES
// ==========================================
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const navLinkClass = ({ isActive }) => 
    `hover:text-[#52B788] transition-colors py-1 ${isActive ? 'text-[#52B788] border-b-2 border-[#52B788] font-bold' : 'text-slate-300'}`;

  return (
    <div className="min-h-screen bg-[#0E1512] text-[#F3F4F6] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#52B788] selection:text-[#0E1512] flex flex-col justify-between">
      
      <ScrollToTop />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0E1512]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop NavLinks with actual Routes */}
          <div className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-widest font-semibold">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/reviews" className={navLinkClass}>Reviews (52+)</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white px-3 py-2"
            >
              Get Quote
            </Link>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-[#52B788] text-[#0E1512] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#52B788]/20"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#16211C] border-b border-white/10 px-6 py-6 flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">Services</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">Gallery</NavLink>
            <NavLink to="/reviews" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-[#52B788] font-bold">Reviews (52+)</NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">Blog</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-left text-sm uppercase tracking-wider text-white">Contact</NavLink>
            <a 
              href={`tel:${BRAND.phoneRaw}`}
              className="w-full py-3 bg-[#52B788] text-[#0E1512] font-bold text-center text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call: {BRAND.phone}
            </a>
          </div>
        )}
      </nav>

      {/* ROUTES CONFIGURATION */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage setLightboxImg={setLightboxImg} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage setLightboxImg={setLightboxImg} />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

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
                href={`tel:${BRAND.phoneRaw}`}
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
              <img src="/logo.png" alt="Ghar Decor" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div>
              <p className="font-bold text-white tracking-wider uppercase">{BRAND.name}</p>
              <p className="text-[10px] text-slate-500">{BRAND.address}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-400">
            <Link to="/" className="hover:text-[#52B788]">Home</Link>
            <Link to="/about" className="hover:text-[#52B788]">About</Link>
            <Link to="/services" className="hover:text-[#52B788]">Services</Link>
            <Link to="/gallery" className="hover:text-[#52B788]">Gallery</Link>
            <Link to="/reviews" className="hover:text-[#52B788]">Reviews</Link>
            <Link to="/blog" className="hover:text-[#52B788]">Blog</Link>
            <Link to="/contact" className="hover:text-[#52B788]">Contact</Link>
          </div>

          <a href={`tel:${BRAND.phoneRaw}`} className="text-[#52B788] font-semibold hover:underline">
            Call: {BRAND.phone}
          </a>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918445200348?text=Hello%20Ghar%20Decor,%20I%20want%20to%20inquire%20about%20interior%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider pr-1">WhatsApp</span>
      </a>

      {/* MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#16221B]/95 border-t border-white/10 p-3 flex gap-2">
        <a 
          href={`tel:${BRAND.phoneRaw}`}
          className="flex-1 py-3 bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-wider text-center rounded-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" /> Call Now
        </a>
        <Link 
          to="/contact"
          className="flex-1 py-3 bg-white/10 text-white font-medium text-xs uppercase tracking-wider text-center rounded-xl flex items-center justify-center"
        >
          Get Quote
        </Link>
      </div>

    </div>
  );
}