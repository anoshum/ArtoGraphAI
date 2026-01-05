import React, { useState } from 'react';
import { 
  Palette, LayoutDashboard, Image as ImageIcon, Wallet, 
  Sparkles, Gavel, Bell, Settings, LogOut, TrendingUp, 
  Clock, Plus, ArrowUpRight, Search, Filter, MoreHorizontal,
  DollarSign, BarChart3, ShieldCheck
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Mock Data
  const stats = [
    { label: "Total Revenue", value: "$12,450.00", trend: "+14.5%", icon: <DollarSign size={20} className="text-emerald-400" /> },
    { label: "Active Bids", value: "8", trend: "+2 new", icon: <Gavel size={20} className="text-blue-400" /> },
    { label: "AI Appraisal Score", value: "94/100", trend: "Top 5%", icon: <Sparkles size={20} className="text-purple-400" /> },
    { label: "Resale Royalties", value: "$1,204.50", trend: "+$45.00", icon: <ShieldCheck size={20} className="text-indigo-400" /> },
  ];

  const recentAuctions = [
    { id: 1, name: "Neon Horizon", currentBid: "$1,200", status: "Active", time: "2h 45m", bidders: 12 },
    { id: 2, name: "Digital Solitude", currentBid: "$850", status: "Closing", time: "12m 30s", bidders: 24 },
    { id: 3, name: "Cyber Canvas", currentBid: "$3,400", status: "Sold", time: "Ended", bidders: 45 },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col hidden lg:flex">
        <div className="p-8 flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Palette size={20} />
          </div>
          <span className="font-black tracking-tighter text-xl">ArtoGraph</span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={18}/>} label="Overview" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <NavItem icon={<ImageIcon size={18}/>} label="My Gallery" active={activeTab === 'Gallery'} onClick={() => setActiveTab('Gallery')} />
          <NavItem icon={<Gavel size={18}/>} label="Active Auctions" active={activeTab === 'Auctions'} onClick={() => setActiveTab('Auctions')} />
          <NavItem icon={<Wallet size={18}/>} label="Wallet & Royalties" active={activeTab === 'Wallet'} onClick={() => setActiveTab('Wallet')} />
          <div className="pt-4 pb-2 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">AI Services</div>
          <NavItem icon={<Sparkles size={18}/>} label="Gemini Lab" active={activeTab === 'AI'} onClick={() => setActiveTab('AI')} />
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <NavItem icon={<Settings size={18}/>} label="Settings" />
          <NavItem icon={<LogOut size={18}/>} label="Logout" className="text-red-400 hover:bg-red-500/10 hover:text-red-400" />
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-black/50 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black">{activeTab}</h1>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Welcome back, Creative Director</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type="text" placeholder="Search art, bidders..." className="bg-white/5 border border-white/10 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:border-indigo-500 w-64" />
            </div>
            <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-black"></div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto">
          
          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-zinc-900 border border-white/5 rounded-3xl group hover:border-indigo-500/50 transition-all cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-black rounded-xl border border-white/10">{s.icon}</div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">{s.trend}</span>
                </div>
                <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">{s.label}</h3>
                <p className="text-2xl font-black tracking-tight">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Auction Monitor */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black">Live Monitor</h2>
                <div className="flex gap-2">
                   <button className="p-2 bg-white/5 border border-white/10 rounded-lg"><Filter size={16}/></button>
                   <button className="px-4 py-2 bg-white text-black text-xs font-black rounded-lg flex items-center gap-2">
                     <Plus size={16} /> NEW LISTING
                   </button>
                </div>
              </div>
              
              <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden">
                <table className="w-full text-left">
                  <thead className="border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <tr>
                      <th className="px-6 py-4">Artwork</th>
                      <th className="px-6 py-4">Current Bid</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Time Left</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentAuctions.map((auc) => (
                      <tr key={auc.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                              <ImageIcon size={20} className="text-indigo-400" />
                            </div>
                            <span className="font-bold text-sm">{auc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 font-black text-sm">{auc.currentBid}</td>
                        <td className="px-6 py-5">
                          <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                            auc.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400' :
                            auc.status === 'Closing' ? 'bg-amber-500/10 text-amber-400' :
                            'bg-gray-500/10 text-gray-500'
                          }`}>
                            {auc.status}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                            <Clock size={14} /> {auc.time}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/5 rounded-lg">
                            <MoreHorizontal size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Lab Widget */}
            <div className="space-y-4">
              <h2 className="text-xl font-black">AI Insights Lab</h2>
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-[2.5rem] p-8 relative overflow-hidden group">
                <Sparkles size={120} className="absolute -bottom-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase mb-6 border border-indigo-500/30">
                    Gemini Multimodal Active
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight">Predict the <br /> Next Masterpiece.</h3>
                  <p className="text-indigo-200/60 text-sm mb-8 leading-relaxed font-medium">
                    Upload your latest sketch. Gemini will analyze the color story and suggest an optimized starting price.
                  </p>
                  <button 
                    onClick={() => {
                      setIsAiLoading(true);
                      setTimeout(() => setIsAiLoading(false), 3000);
                    }}
                    disabled={isAiLoading}
                    className="w-full py-4 bg-white text-black rounded-2xl font-black text-sm hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isAiLoading ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>RUN AI APPRAISAL <Plus size={18} /></>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Wallet Summary */}
              <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-500">Linked Wallet</h3>
                  <ShieldCheck size={18} className="text-emerald-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Available for Withdrawal</p>
                      <p className="text-3xl font-black">$4,250.80</p>
                    </div>
                    <button className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex gap-2">
                    <div className="w-full bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                       <p className="text-[10px] font-bold text-gray-600 uppercase">Resales</p>
                       <p className="text-sm font-black">12</p>
                    </div>
                    <div className="w-full bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                       <p className="text-[10px] font-bold text-gray-600 uppercase">Loyalty</p>
                       <p className="text-sm font-black">10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

// Sub-component for Sidebar Items
const NavItem = ({ icon, label, active, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
      active 
      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
      : "text-gray-500 hover:bg-white/5 hover:text-white"
    } ${className}`}
  >
    {icon}
    <span>{label}</span>
    {active && <div className="ml-auto w-1 h-4 bg-white rounded-full"></div>}
  </button>
);

export default Dashboard;