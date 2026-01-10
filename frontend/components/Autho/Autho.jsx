import React, { useState } from "react";
import DiscoveryFeed from '../Discovery/Discovery';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Palette,
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
  Chrome,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";

import { auth, googleProvider } from "../../src/fbconfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  // 🔐 EMAIL AUTH
const handleAuth = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
    }

    navigate("/dashboard"); // 🌍 REDIRECT HERE

  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
};


  // 🔵 GOOGLE AUTH
const handleGoogleAuth = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate("/discovery"); // 🌍 REDIRECT HERE
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* CARD */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="p-2 bg-indigo-600 rounded-xl">
            <Palette size={24} />
          </div>
          <span className="text-2xl font-black">ArtoGraph AI</span>
        </div>

        <div className="bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
          <h1 className="text-3xl font-black text-center mb-2">
            {isLogin ? "WELCOME BACK." : "JOIN THE REVOLUTION."}
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            {isLogin
              ? "Your masterpieces are waiting."
              : "Start protecting your creative legacy."}
          </p>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleAuth}
            className="w-full py-4 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all mb-8"
          >
            <Chrome size={18} />
            CONTINUE WITH GOOGLE
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 border-t border-white/10"></div>
            <div className="relative text-center text-xs text-gray-500 bg-zinc-950 px-4 w-fit mx-auto">
              Or use email
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleAuth} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="text-xs text-gray-400 ml-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 pl-12 py-4 rounded-2xl outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs text-gray-400 ml-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 pl-12 py-4 rounded-2xl outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 ml-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 pl-12 pr-12 py-4 rounded-2xl outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-indigo-600 rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
                  <ArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={toggleMode}
              className="text-sm text-gray-500 hover:text-indigo-400"
            >
              {isLogin
                ? "Don't have an account? Create one."
                : "Already a member? Sign in."}
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6 opacity-30 text-xs uppercase">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} /> Encrypted
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} /> AI Protected
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
