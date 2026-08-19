import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Quote, 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles, 
  ArrowLeft,
  Search
} from 'lucide-react';
import { BRAND, REVIEWS } from './data/siteData';

export default function ReviewsPage({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredReviews = REVIEWS.filter(rev => 
    rev.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rev.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0E1512] text-[#F3F4F6] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#52B788] selection:text-[#0E1512]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0E1512]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#52B788]/60 bg-white flex items-center justify-center shrink-0 shadow-lg shadow-[#52B788]/10">
              <img 
                src="/logo.png" 
                alt="Ghar Decor Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#52B788] fill-[#52B788]" />
                Ghar<span className="text-[#52B788]">Decor</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-slate-400 font-semibold">
                Decor & More • Agra
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-300">
            <button onClick={onNavigateHome} className="hover:text-[#52B788] transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={onNavigateHome} className="hover:text-[#52B788] transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={onNavigateHome} className="hover:text-[#52B788] transition-colors cursor-pointer">
              Gallery
            </button>
            <span className="text-[#52B788] font-bold">Reviews (52+)</span>
            <button onClick={onNavigateHome} className="hover:text-[#52B788] transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
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
            <button onClick={onNavigateHome} className="text-left text-sm uppercase tracking-wider text-white">Home</button>
            <span className="text-sm uppercase tracking-wider text-[#52B788] font-bold">Customer Reviews (52+)</span>
            <button onClick={onNavigateHome} className="text-left text-sm uppercase tracking-wider text-white">Gallery</button>
            <button onClick={onNavigateHome} className="text-left text-sm uppercase tracking-wider text-white">Services</button>
            <a 
              href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
              className="w-full py-3 bg-[#52B788] text-[#0E1512] font-bold text-center text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call: {BRAND?.phone || '+91 84452 00348'}
            </a>
          </div>
        )}
      </nav>

      {/* REVIEWS CONTENT */}
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#52B788]" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#182820] via-[#121B16] to-[#0E1512] p-8 sm:p-12 mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#52B788]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
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
                <p className="text-[11px] text-slate-400">Work Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search by name, POP, PVC, Adil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#16221B] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:border-[#52B788] focus:outline-none"
            />
          </div>

          <div className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredReviews.length}</strong> of {REVIEWS.length} customer reviews
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
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
                  <p className="text-[10px] text-[#52B788] uppercase tracking-wider font-semibold">Verified Client • Agra</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0E1512] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {rev.author.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-16 bg-[#16221B] rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No reviews found matching "{searchQuery}".</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#52B788] font-bold underline cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center bg-[#182820] border border-white/10 p-10 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Want to Transform Your Home?</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
            Get your space designed by Agra's trusted POP ceiling, PVC wall panel, and modular interior specialists.
          </p>
          <a 
            href={`tel:${BRAND?.phoneRaw || '+918445200348'}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#52B788] text-[#0E1512] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl shadow-[#52B788]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BRAND?.phone || '+91 84452 00348'}</span>
          </a>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#090E0C] text-slate-400 border-t border-white/5 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#52B788]/50 bg-white flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Ghar Decor" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div className="text-left">
              <p className="font-bold text-white tracking-wider uppercase">{BRAND?.name || 'Ghar Decor'}</p>
              <p className="text-[10px] text-slate-500">{BRAND?.address || 'Fatehabad Road, Agra'}</p>
            </div>
          </button>
          <button onClick={onNavigateHome} className="text-slate-400 hover:text-[#52B788] transition-colors cursor-pointer">
            ← Back to Home Page
          </button>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918445200348?text=Hello%20Ghar%20Decor,%20I%20saw%20your%20customer%20reviews%20and%20want%20to%20inquire%20about%20interior%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider pr-1">WhatsApp</span>
      </a>

    </div>
  );
}