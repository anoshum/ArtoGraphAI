import React from 'react';
import { 
  Palette, Github, ArrowLeft, Award, Users, 
  Sparkles, ShieldCheck, Calendar, Coins, Zap, History 
} from 'lucide-react';

const AboutPage = () => {
  const teamName = "Team Innovators"; 
  const teamMembers = [
    { 
      name: "Lead Developer", 
      role: "AI & Integration", 
      githubId: "lead_dev_handle", 
      profilePic: "https://github.com/identicons/user1.png" 
    },
    { 
      name: "Backend Architect", 
      role: "Firebase & Security", 
      githubId: "backend_arch_handle", 
      profilePic: "https://github.com/identicons/user2.png" 
    },
    { 
      name: "UI/UX Designer", 
      role: "Frontend Lead", 
      githubId: "uiux_designer_handle", 
      profilePic: "https://github.com/identicons/user3.png" 
    },
    { 
      name: "Utility Lead", 
      role: "API & Docs", 
      githubId: "utility_lead_handle", 
      profilePic: "https://github.com/identicons/user4.png" 
    }
  ];

  const coreFeatures = [
    {
      icon: <Sparkles size={24} className="text-purple-400" />,
      title: "AI Appraisal",
      desc: "Powered by Gemini for instant value estimation."
    },
    {
      icon: <Coins size={24} className="text-yellow-400" />,
      title: "Resale Royalties",
      desc: "10% automated artist kickback via GPay."
    },
    {
      icon: <Calendar size={24} className="text-blue-400" />,
      title: "Smart Invites",
      desc: "Google Calendar sync for live auctions."
    },
    {
      icon: <History size={24} className="text-emerald-400" />,
      title: "Digital Provenance",
      desc: "Immutable ownership tracking in Firebase."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">

      <header className="relative pt-40 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold mb-6">
            <Users size={14} />
            <span>GDG TECHSPRINT 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase leading-none">
            ABOUT {teamName}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Bridging the gap between art and technology for a fairer creative economy.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        </div>
      </header>

      {/* --- CORE FEATURES MINI-SECTION --- */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFeatures.map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center text-center hover:bg-white/[0.08] transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-1">{feature.title}</h3>
              <p className="text-[10px] text-gray-500 font-medium leading-relaxed uppercase">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-black italic">The Developers.</h2>
          <div className="h-1 w-12 bg-purple-600 mt-2"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative bg-zinc-900/50 border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={member.profilePic} 
                  alt={member.name} 
                  className="relative w-full aspect-square object-cover rounded-2xl border border-white/10"
                />
              </div>

              <div className="text-center">
                <h4 className="text-xl font-black mb-1">{member.name}</h4>
                <p className="text-xs font-bold text-purple-400 uppercase mb-6 tracking-widest">{member.role}</p>
                
                <a 
                  href={`https://github.com/${member.githubId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white text-gray-400 hover:text-black rounded-full text-xs font-bold transition-all border border-white/10"
                >
                  <Github size={14} />
                  {member.githubId}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto border-t border-white/10 pt-16">
           <Award size={32} className="mx-auto mb-6 text-purple-500" />
           <h2 className="text-2xl font-black mb-4 italic uppercase">Visionary Tech.</h2>
           <p className="text-gray-500 text-sm mb-8 leading-relaxed">
             Our architecture utilizes Gemini for multimodal understanding and Firebase for high-concurrency bidding. We believe tech should serve the creator, not the other way around.
           </p>
           <div className="flex justify-center gap-4">
             <button className="px-8 py-3 bg-white text-black rounded-full font-black text-xs tracking-widest hover:bg-purple-600 hover:text-white transition-all">
                VIEW REPO
             </button>
             <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs tracking-widest hover:bg-white/10 transition-all">
                TECH STACK
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;