import React, { useState } from 'react';
import { 
  Palette, Search, Filter, Gavel, Heart, Share2, 
  MessageCircle, Sparkles, Clock, ArrowUpRight, 
  MoreHorizontal, ChevronDown, LayoutGrid, List
} from 'lucide-react';

const DiscoveryFeed = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('All Artworks');

  const categories = ['All Artworks', 'Digital', 'Oil Painting', 'Sculpture', 'Abstract', 'Photography'];

  const feedItems = [
    {
      id: 1,
      title: "Vibrant Dystopia",
      artist: "CyberVanguard",
      artistAvatar: "CV",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600",
      price: "1.20 ETH",
      timeLeft: "2h 15m",
      likes: 245,
      comments: 18,
      aiInsight: "High secondary market potential due to unique neon-glitch technique.",
      description: "A deep dive into the intersection of urban decay and digital rebirth. This piece uses a custom generative algorithm to layer textures."
    },
    {
      id: 2,
      title: "Serene Solitude",
      artist: "Elena_V",
      artistAvatar: "EV",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600",
      price: "0.85 ETH",
      timeLeft: "5h 40m",
      likes: 120,
      comments: 5,
      aiInsight: "Composition suggests classical impressionism influence.",
      description: "Hand-painted oil on canvas, digitized for the ArtoGraph ecosystem. Capturing the silence of a foggy morning."
    },
    {
      id: 3,
      title: "Fractured Logic",
      artist: "Marcus_Dev",
      artistAvatar: "MD",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600",
      price: "2.50 ETH",
      timeLeft: "45m 10s",
      likes: 890,
      comments: 42,
      aiInsight: "Rare geometric complexity detected. High demand expected.",
      description: "An exploration of mathematical patterns found in nature. The symmetry in this work is procedurally perfected."
    },
    {
      id: 4,
      title: "Oceanic Drift",
      artist: "Aqua_Marine",
      artistAvatar: "AM",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600",
      price: "1.10 ETH",
      timeLeft: "12h 00m",
      likes: 312,
      comments: 12,
      aiInsight: "Calm color palette increases emotional resonance for living spaces.",
      description: "Long exposure photography captured at the edge of the Atlantic. Post-processed to emphasize the fluid motion of tides."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
          <div className="flex items-center gap-2 shrink-0">
            <Palette className="text-indigo-500" size={24} />
            <span className="text-xl font-black tracking-tighter hidden md:block">ArtoGraph AI</span>
          </div>

          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by artist, style, or AI keyword..." 
              className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-2.5 rounded-full text-sm focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hidden sm:block">
              <Filter size={18} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-black"></div>
          </div>
        </div>
      </nav>

      {/* --- MAIN FEED --- */}
      <main className="pt-28 pb-12 max-w-7xl mx-auto px-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black italic mb-2 tracking-tight">Discover Masterpieces.</h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">Curated by Gemini Intelligence</p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat 
                ? 'bg-indigo-600 border-indigo-600 text-white' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feed Grid */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
          {feedItems.map((item) => (
            <div key={item.id} className="group bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col">
              
              {/* Artist Header */}
              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-black text-xs border border-white/10">
                    {item.artistAvatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">@{item.artist}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Artist</p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-black uppercase">
                  <Clock size={12} className="text-red-500" />
                  {item.timeLeft}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black tracking-tight mb-1 group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest">
                       <Sparkles size={12} /> AI Verified Appraisal
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-600 font-bold uppercase">Current Bid</p>
                    <p className="font-black text-lg">{item.price}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* AI Insight Box (Small Toast) */}
                <div className="bg-indigo-500/5 border border-indigo-500/10 p-3 rounded-2xl mb-6">
                   <p className="text-[10px] text-indigo-300 italic font-medium">
                     " {item.aiInsight} "
                   </p>
                </div>

                {/* Social Actions */}
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart size={20} />
                        <span className="text-xs font-bold">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-indigo-400 transition-colors">
                        <MessageCircle size={20} />
                        <span className="text-xs font-bold">{item.comments}</span>
                      </button>
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <Share2 size={20} />
                      </button>
                   </div>
                   <button className="bg-white text-black px-6 py-2 rounded-xl font-black text-xs hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2">
                      BID NOW <Gavel size={14} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / End of Feed */}
        <div className="mt-16 text-center">
           <div className="inline-block p-4 bg-zinc-900 border border-white/5 rounded-full text-gray-500">
             <ArrowUpRight size={24} className="animate-bounce" />
           </div>
           <p className="text-xs font-black uppercase tracking-[0.4em] mt-4 text-gray-700">End of Daily Feed</p>
        </div>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DiscoveryFeed;