import React, { useState } from 'react';
import { 
  Palette, Search, Upload, Gavel, Calendar, User, Menu, X, 
  ArrowRight, Sparkles, Heart, MessageCircle, Share2, ShieldCheck, 
  Clock, TrendingUp, Mail, MapPin, Phone, Github, Twitter, Instagram,
  Layers, Zap, Coins, History, BarChart3, Globe
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

  const features = [
    {
      icon: <Sparkles className="text-purple-400" size={32} />,
      title: "AI Appraisal Engine",
      description: "Harness the power of Google Gemini to analyze brushstrokes, colors, and complexity to suggest scientifically accurate starting bids."
    },
    {
      icon: <Coins className="text-yellow-400" size={32} />,
      title: "Automated Resale Royalties",
      description: "The first platform where artists earn 10% of every secondary sale automatically via GPay and Firebase Cloud Functions."
    },
    {
      icon: <Calendar className="text-blue-400" size={32} />,
      title: "Smart Calendar Sync",
      description: "Collectors get deep-linked Google Calendar invites for every watched auction, ensuring they never miss a crucial bid."
    },
    {
      icon: <History className="text-green-400" size={32} />,
      title: "Immutable Provenance",
      description: "A transparent digital ledger tracks every owner in the artwork's history, building trust and verifying authenticity."
    }
  ];

  const auctionPreview = [
    { id: 1, title: 'Abstract Horizon', artist: 'Artiste_01', price: '1.5 ETH', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'Cyber Pulse', artist: 'FutureMind', price: '0.9 ETH', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'Deep Solitude', artist: 'Elena_V', price: '2.1 ETH', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
    
      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold mb-8 animate-pulse">
            <Sparkles size={14} />
            <span>GDG TECHSPRINT 2025 INNOVATION</span>
          </div>
          <h1 className="text-6xl md:text-[100px] font-black mb-8 leading-[0.9] tracking-tight">
            OWN THE ART, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 underline decoration-white/20">PROTECT THE LEGACY.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl mb-12 leading-relaxed font-light">
            A next-generation ecosystem for artists and collectors. Appraise with <span className="text-white">Gemini AI</span>, 
            secure with <span className="text-white">Google Pay</span>, and empower creators through 
            <span className="text-purple-400 font-bold italic"> automated secondary royalties.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="px-10 py-5 bg-white text-black rounded-full font-black text-xl hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-white/5">
              Start Your Collection
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md">
              Learn the Tech
            </button>
          </div>
        </div>
      </header>

      {/* --- FEATURE BREAKDOWN --- */}
      <section id="features" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Four Pillars of Innovation.</h2>
            <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] hover:-translate-y-2 transition-all cursor-default group">
                <div className="mb-6 p-4 bg-black rounded-2xl w-fit group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONDITIONAL AUCTION SECTION --- */}
      <section id="auctions" className="py-32 border-y border-white/10 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          {isLoggedIn ? (
            <div>
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-5xl font-black italic">Live Marketplace.</h2>
                <button className="text-purple-400 font-bold border-b border-purple-400">View All Listings</button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Auction items would go here */}
                <p className="text-gray-500 italic">No live auctions matching your preferences...</p>
              </div>
            </div>
          ) : (
            <div className="relative rounded-[60px] overflow-hidden border border-white/10 p-12 md:p-24 text-center">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale blur-sm" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1200)'}}></div>
              <div className="relative z-10">
                <Gavel size={64} className="mx-auto mb-8 text-purple-500" />
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Exclusive Live Bidding</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join our verified community to view active auctions, place bids in real-time, 
                  and receive AI-driven investment insights.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <div className="flex -space-x-4 mb-4 md:mb-0">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                        {i === 4 ? "500+" : <User size={16} />}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setIsLoggedIn(true)}
                    className="bg-purple-600 hover:bg-purple-500 px-10 py-4 rounded-full font-black text-lg transition-all"
                  >
                    Login to Access Auctions
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- HOW IT WORKS (STORYTELLING) --- */}
      <section id="how-it-works" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-black mb-8">The Artist Journey.</h2>
              {[
                { step: "01", title: "AI Appraisal", desc: "Upload your art and let Gemini analyze its market potential instantly.", icon: <Zap /> },
                { step: "02", title: "Schedule Auction", desc: "Set your timeframe. Collectors get formal Google Calendar invites automatically.", icon: <Calendar /> },
                { step: "03", title: "Live Bidding", desc: "Engage with a global audience in a real-time, transparent environment.", icon: <Gavel /> },
                { step: "04", title: "Forever Royalties", desc: "Get paid via GPay. Earn 10% on every future resale, forever.", icon: <ShieldCheck /> }
              ].map((s, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-4xl font-black text-white/10 group-hover:text-purple-500 transition-colors">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {s.title} <span className="text-purple-500">{s.icon}</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-[40px] border border-white/10 p-8 aspect-square flex items-center justify-center">
                <div className="text-center animate-bounce">
                  <Palette size={120} className="text-white/20 mb-4 mx-auto" />
                  <p className="font-bold text-gray-500 italic tracking-[10px]">CREATIVE FLOW</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl text-black shadow-2xl hidden md:block">
                <p className="text-xs font-black uppercase text-gray-400 mb-2">Recent Royalty Paid</p>
                <p className="text-3xl font-black">+ 0.15 ETH</p>
                <p className="text-[10px] text-green-600 font-bold">Resale of 'Neon Dreams' by User_88</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & SUPPORT --- */}
      <section id="contact" className="py-32 bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black mb-6">Need Help? <br />Ask the Curators.</h2>
              <p className="text-gray-400 text-lg mb-12">Our team and AI assistants are available 24/7 to help you with onboarding or technical queries.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500 transition-all"><Mail /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Email Us</p>
                    <p className="text-lg font-bold">hello@artograph.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500 transition-all"><Globe /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Global Hub</p>
                    <p className="text-lg font-bold">Bengaluru, KA - GDG Campus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black border border-white/10 p-10 rounded-[40px]">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 focus:outline-none transition-all" />
                  <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 focus:outline-none transition-all" />
                </div>
                <textarea placeholder="Tell us about your art project..." rows="5" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-purple-500 focus:outline-none transition-all"></textarea>
                <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;