import React, { useState } from 'react';
import { 
  Palette, Github, Mail, Lock, User, 
  ArrowRight, Sparkles, Chrome, ChevronLeft,
  ShieldCheck, Eye, EyeOff
} from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Logic for Firebase Auth would go here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-6 overflow-hidden relative">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>


      {/* --- AUTH CARD --- */}
      <div className="w-full max-w-md relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
           <div className="p-2 bg-indigo-600 rounded-xl">
              <Palette size={24} className="text-white" />
           </div>
           <span className="text-2xl font-black tracking-tighter">ArtoGraph AI</span>
        </div>

        <div className="bg-zinc-950/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black mb-2 italic">
              {isLogin ? "WELCOME BACK." : "JOIN THE REVOLUTION."}
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              {isLogin 
                ? "Your masterpieces are waiting for you." 
                : "Start protecting your creative legacy today."}
            </p>
          </div>

          {/* Google Auth Button (Mandatory Tech Highlight) */}
          <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all group mb-8">
            <div className="p-1 bg-white rounded-md group-hover:bg-transparent transition-colors">
              <Chrome size={18} className="text-black group-hover:text-white" />
            </div>
            CONTINUE WITH GOOGLE
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="bg-zinc-950 px-4 text-gray-600">Or use email</span>
            </div>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-bold text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-bold text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Password</label>
                {isLogin && (
                  <button type="button" className="text-[10px] font-black uppercase text-indigo-400 hover:underline">Forgot?</button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 pl-12 pr-12 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-bold text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={toggleMode}
              className="text-xs font-bold text-gray-500 hover:text-indigo-400 transition-colors"
            >
              {isLogin 
                ? "Don't have an account? Create one." 
                : "Already a member? Sign in instead."}
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14} /> Encrypted
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={14} /> AI Protected
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;