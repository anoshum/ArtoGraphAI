import React, { useState } from 'react';
import { 
  Palette, Github, Twitter, Instagram, Globe, 
  ShieldCheck, Award, Heart, MessageCircle, 
  Gavel, ArrowLeft, Star, ExternalLink, 
  LayoutGrid, History, UserPlus, ArrowUpRight
} from 'lucide-react';

const PublicProfile = () => {
  const [activeTab, setActiveTab] = useState('Gallery');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock Artist Data
  const artist = {
    name: "CyberVanguard",
    handle: "cyber_vanguard",
    bio: "Visualizing the intersection of digital entropy and urban decay. Pioneer of the Neon-Glitch movement. Based in the Metaverse.",
    location: "Neo-Tokyo / Digital",
    verified: true,
    githubId: "cyber_vanguard_dev",
    profilePic: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=400",
    stats: {
      sales: "42",
      creations: "156",
      followers: "12.5k",
      rating: "4.9"
    }
  };

  const artworks = [
    { id: 1, title: "Neon Horizon #042", price: "1.20 ETH", image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600", status: "Active" },
    { id: 2, title: "Digital Entropy", price: "0.85 ETH", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600", status: "Sold" },
    { id: 3, title: "Silicon Dreams", price: "2.10 ETH", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", status: "Sold" },
    { id: 4, title: "Ghost in the Machine", price: "1.45 ETH", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", status: "Active" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-600 rounded-lg">
              <Palette size={20} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter">ArtoGraph AI</span>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Back to Discover
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* --- PROFILE HEADER --- */}
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 text-center md:text-left">
            {/* Avatar with Glow Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src={artist.profilePic} 
                alt={artist.name} 
                className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl"
              />
              {artist.verified && (
                <div className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 rounded-2xl border-4 border-black text-white shadow-xl shadow-indigo-600/30">
                  <ShieldCheck size={24} />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{artist.name}</h1>
                  <button className="p-2 bg-white/5 rounded-full border border-white/10 hover:text-indigo-400 transition-colors hidden md:block">
                    <ExternalLink size={18} />
                  </button>
                </div>
                <p className="text-indigo-400 font-black tracking-[0.2em] uppercase text-xs">@{artist.handle}</p>
              </div>
              
              <p className="max-w-xl text-gray-400 text-sm leading-relaxed font-medium">
                {artist.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-8 py-3 rounded-full font-black text-xs tracking-widest transition-all flex items-center gap-2 ${
                    isFollowing 
                    ? "bg-white/10 text-white border border-white/20" 
                    : "bg-white text-black hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  <UserPlus size={16} /> {isFollowing ? "FOLLOWING" : "FOLLOW ARTIST"}
                </button>
                <div className="flex gap-2">
                  <SocialIcon icon={<Twitter size={18}/>} />
                  <SocialIcon icon={<Instagram size={18}/>} />
                  <a href={`https://github.com/${artist.githubId}`} target="_blank" rel="noreferrer">
                    <SocialIcon icon={<Github size={18}/>} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar (Bento Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 bg-zinc-950 border border-white/5 rounded-[2.5rem] p-8">
             <StatItem label="Creations" value={artist.stats.creations} />
             <StatItem label="Total Sales" value={artist.stats.sales} />
             <StatItem label="Followers" value={artist.stats.followers} />
             <StatItem label="Avg. Rating" value={artist.stats.rating} icon={<Star size={12} className="text-amber-400" />} />
          </div>
        </section>

        {/* --- TABBED CONTENT --- */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 border-b border-white/5 mb-12">
            <TabItem label="Gallery" active={activeTab === 'Gallery'} onClick={() => setActiveTab('Gallery')} count={artworks.length} />
            <TabItem label="Provenance" active={activeTab === 'Provenance'} onClick={() => setActiveTab('Provenance')} />
            <TabItem label="Reviews" active={activeTab === 'Reviews'} onClick={() => setActiveTab('Reviews')} />
          </div>

          {activeTab === 'Gallery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {artworks.map((art) => (
                <div key={art.id} className="group bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border shadow-lg ${
                      art.status === 'Active' ? 'bg-indigo-600 border-indigo-400' : 'bg-black/80 border-white/20'
                    }`}>
                      {art.status}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-4 truncate group-hover:text-indigo-400 transition-colors">{art.title}</h3>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="text-xs text-gray-500 font-black uppercase tracking-widest">
                        {art.status === 'Active' ? 'Min Bid' : 'Sold For'}
                        <p className="text-white text-base mt-1">{art.price}</p>
                      </div>
                      <button className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition-colors">
                        {art.status === 'Active' ? <Gavel size={18} /> : <ArrowUpRight size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Reviews' && (
             <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 text-center py-20">
                <MessageCircle size={48} className="text-gray-800 mx-auto mb-4" />
                <h3 className="text-xl font-bold">No Public Reviews Yet</h3>
                <p className="text-gray-500 text-sm italic max-w-sm mx-auto">Only collectors who have successfully purchased a work from this artist can leave a verified review.</p>
             </div>
          )}

          {activeTab === 'Provenance' && (
             <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
                <div className="p-10 bg-zinc-950 border border-white/5 rounded-[3rem]">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <History className="text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter italic">Chain of Ownership</h3>
                   </div>
                   <div className="space-y-10 relative">
                      {/* Vertical line for the timeline */}
                      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500/20 via-white/5 to-transparent"></div>
                      
                      <ProvenanceStep date="Dec 24, 2025" title="Artist Registered" desc="Account identity verified via GitHub and Google Identity services." />
                      <ProvenanceStep date="Dec 20, 2025" title="Provenance Ledger Initialized" desc="Primary creation smart-contract link established. Automated royalty splits locked at 10%." />
                      <ProvenanceStep date="Dec 15, 2024" title="First Exhibition" desc="Exhibited at the Neo-Tokyo Virtual Gallery showcase." />
                   </div>
                </div>
             </div>
          )}
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-gray-800 text-[10px] font-black uppercase tracking-[0.5em] border-t border-white/5">
        Verification: CV_ART_99 // ArtoGraph Provenance System // Secured by Firebase
      </footer>
    </div>
  );
};

// Helper Components
const SocialIcon = ({ icon }) => (
  <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-gray-500 hover:text-indigo-400 hover:bg-white/10 transition-all">
    {icon}
  </button>
);

const StatItem = ({ label, value, icon }) => (
  <div className="text-center">
    <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-1">{label}</p>
    <p className="text-3xl font-black tracking-tight flex items-center justify-center gap-1">
      {icon} {value}
    </p>
  </div>
);

const TabItem = ({ label, active, onClick, count }) => (
  <button 
    onClick={onClick}
    className={`pb-4 px-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
      active ? "text-indigo-400" : "text-gray-500 hover:text-white"
    }`}
  >
    {label} {count !== undefined && <span className="ml-1 opacity-50 font-mono">[{count}]</span>}
    {active && <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-full animate-in fade-in slide-in-from-left duration-300"></div>}
  </button>
);

const ProvenanceStep = ({ date, title, desc }) => (
  <div className="relative pl-10 group">
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-black border-4 border-white/5 flex items-center justify-center group-hover:border-indigo-600/50 transition-colors">
       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{date}</p>
      <h4 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed max-w-xl">{desc}</p>
    </div>
  </div>
);

export default PublicProfile;