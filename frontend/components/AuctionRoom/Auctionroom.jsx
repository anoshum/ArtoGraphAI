import React, { useState, useEffect } from 'react';
import { 
  Palette, Gavel, Clock, History, ArrowLeft, 
  Share2, Heart, Calendar, ShieldCheck, User, Sparkles,
  TrendingUp, DollarSign, MessageSquare, ArrowUpRight
} from 'lucide-react';

const AuctionRoom = () => {
  const [currentBid, setCurrentBid] = useState(1450.50);
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 12 });
  const [bids, setBids] = useState([
    { id: 1, user: "UrbanCollector", amount: 1450.50, time: "2 mins ago", avatar: "UC" },
    { id: 2, user: "DigitalNomad", amount: 1380.00, time: "5 mins ago", avatar: "DN" },
    { id: 3, user: "ArtLover99", amount: 1250.00, time: "12 mins ago", avatar: "AL" },
  ]);
  const [myBid, setMyBid] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('bids'); // 'bids' or 'details'

  // Mock countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePlaceBid = (e) => {
    e.preventDefault();
    const amount = parseFloat(myBid);
    if (amount > currentBid) {
      const newBid = {
        id: Date.now(),
        user: "You",
        amount: amount,
        time: "Just now",
        avatar: "ME"
      };
      setBids([newBid, ...bids]);
      setCurrentBid(amount);
      setMyBid("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
      <main className="pt-28 pb-12 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="relative group">
            {/* The Main Artwork Image */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200" 
                alt="Auction Art" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Live Badge */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <Clock size={16} className="text-red-500 animate-pulse" />
                    <span className="font-mono font-bold tracking-widest text-sm">
                      {timeLeft.h.toString().padStart(2, '0')}:
                      {timeLeft.m.toString().padStart(2, '0')}:
                      {timeLeft.s.toString().padStart(2, '0')}
                    </span>
                 </div>
                 <div className="bg-indigo-600 px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-600/30">
                    <Sparkles size={14} /> Gemini Verified
                 </div>
              </div>

              {/* Action Buttons Overlay */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-4 rounded-full border backdrop-blur-md transition-all ${isFavorite ? 'bg-red-500 border-red-500 text-white' : 'bg-black/60 border-white/20 text-white hover:bg-white/10'}`}
                 >
                   <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                 </button>
                 <button className="p-4 bg-black/60 border border-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-all">
                   <Share2 size={20} />
                 </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none">NEON HORIZON #042</h1>
                <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Cyber-Impressionism Collection</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 font-black uppercase mb-1">Created By</p>
                <div className="flex items-center gap-2">
                   <span className="font-black text-indigo-400">@CyberVanguard</span>
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                </div>
              </div>
            </div>

            {/* AI Narrative Section */}
            <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Sparkles size={120} />
               </div>
               <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400 font-black text-xs uppercase tracking-widest">
                     <Sparkles size={16} /> Gemini Appraisal Narrative
                  </div>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    "This piece explores digital entropy through high-contrast neon highlights and structured glitch aesthetics. Gemini analysis indicates a strong correlation with emerging trends in urban digitalism. Recommended as a long-term hold for high-end secondary market potential."
                  </p>
                  <div className="pt-6 border-t border-white/5 grid grid-cols-3 gap-8">
                     <div>
                        <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Original Mint</p>
                        <p className="font-bold">Oct 2024</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Ownerships</p>
                        <p className="font-bold text-indigo-400">Ledger Verified</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Royalty</p>
                        <p className="font-bold">10.0% GPay</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Bid Card */}
          <div className="bg-white text-black rounded-[3rem] p-8 space-y-8 shadow-2xl shadow-indigo-500/20">
             <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-600" /> Current Leading Bid
                </span>
                <span className="text-[10px] font-black text-white bg-black px-2 py-1 rounded-md">LIVE</span>
             </div>
             
             <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                   <span className="text-6xl font-black tracking-tight">${currentBid.toLocaleString()}</span>
                   <span className="text-gray-400 font-bold">USD</span>
                </div>
                <p className="text-xs font-bold text-gray-400 italic">≈ 0.62 ETH</p>
             </div>

             <form onSubmit={handlePlaceBid} className="space-y-4">
                <div className="relative">
                   <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                   <input 
                    type="number" 
                    value={myBid}
                    onChange={(e) => setMyBid(e.target.value)}
                    placeholder={`Min. bid $${(currentBid + 50).toLocaleString()}`}
                    className="w-full bg-gray-100 border-none p-6 pl-14 rounded-2xl font-black text-xl focus:ring-2 focus:ring-indigo-500 outline-none text-black transition-all"
                   />
                </div>
                <button 
                  type="submit"
                  className="w-full py-6 bg-black text-white font-black text-xl rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-indigo-500/30 group"
                >
                  PLACE YOUR BID <Gavel size={24} className="group-hover:rotate-12 transition-transform" />
                </button>
             </form>

             <button className="w-full flex items-center justify-center gap-2 py-4 border-t border-gray-100 text-[10px] font-black uppercase text-gray-400 hover:text-indigo-600 transition-colors">
                <Calendar size={14} /> SYNC TO GOOGLE CALENDAR (SMART INVITE)
             </button>
          </div>

          {/* Activity Feed */}
          <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-indigo-500/10 rounded-xl">
                      <History size={18} className="text-indigo-400" />
                   </div>
                   <h3 className="text-sm font-black uppercase tracking-widest">Live Activity</h3>
                </div>
                <span className="text-[10px] font-black text-gray-600 uppercase">{bids.length} Offers</span>
             </div>

             <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {bids.map((bid, i) => (
                  <div key={bid.id} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${i === 0 ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-white/5 border-transparent'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-black text-[10px]">
                        {bid.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-bold flex items-center gap-2">
                           {bid.user} 
                           {i === 0 && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>}
                        </p>
                        <p className="text-[10px] text-gray-600 uppercase font-black">{bid.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-black ${i === 0 ? 'text-indigo-400 text-lg' : 'text-gray-400'}`}>${bid.amount.toLocaleString()}</p>
                      {i === 0 && <span className="text-[8px] font-black uppercase text-green-500 tracking-tighter">Leading</span>}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AuctionRoom;