import React, { useEffect, useState } from 'react';
import { 
  Github, Award, Users, Sparkles, Calendar, Coins, History 
} from 'lucide-react';

const AboutPage = () => {
  const teamName = "Team Innovators";
  const [users, setUsers] = useState({
    user1: null,
    user2: null
  });

  useEffect(() => {
    const fetchGithubUsers = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch('https://api.github.com/users/anoshum'),
          fetch('https://api.github.com/users/thewarbringer')
        ]);

        const user1 = await res1.json();
        const user2 = await res2.json();

        setUsers({ user1, user2 });
      } catch (error) {
        console.error('GitHub API Error:', error);
      }
    };

    fetchGithubUsers();
  }, []);

  const teamMembers = [
    users.user1 && {
      name: "Frontend Lead",
      role: "AI & Integration",
      githubId: users.user1.login,
      profilePic: users.user1.avatar_url
    },
    users.user2 && {
      name: "Backend Lead",
      role: "Firebase & Security",
      githubId: users.user2.login,
      profilePic: users.user2.avatar_url
    }
  ].filter(Boolean);

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
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold mb-6">
          <Users size={14} />
          GDG TECHSPRINT 2025
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase">
          ABOUT {teamName}
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Bridging the gap between art and technology for a fairer creative economy.
        </p>
      </header>

      {/* CORE FEATURES */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {coreFeatures.map((feature, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-3xl text-center">
            {feature.icon}
            <h3 className="mt-4 text-sm font-black uppercase">{feature.title}</h3>
            <p className="text-xs text-gray-500 mt-2">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* TEAM */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black italic mb-10">The Developers.</h2>

        <div className="grid sm:grid-cols-4 lg:grid-cols-2">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl text-center">
              <img
                src={member.profilePic}
                alt={member.githubId}
                className="w-full aspect-square rounded-2xl mb-6"
              />
              <h4 className="text-xl font-black">{member.name}</h4>
              <p className="text-purple-400 text-xs uppercase mt-1 mb-4">
                {member.role}
              </p>

              <a
                href={`https://github.com/${member.githubId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs"
              >
                <Github size={14} />
                {member.githubId}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Award size={32} className="mx-auto mb-6 text-purple-500" />
        <h2 className="text-2xl font-black italic uppercase">Visionary Tech.</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4">
          Gemini-powered multimodal understanding with Firebase-backed real-time bidding.
        </p>
      </section>

    </div>
  );
};

export default AboutPage;
