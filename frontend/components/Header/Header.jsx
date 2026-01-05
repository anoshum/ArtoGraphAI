import React from 'react'
import { useState } from 'react';
import { 
  Palette, Search, Upload, Gavel, Calendar, User, Menu, X, 
  ArrowRight, Sparkles, Heart, MessageCircle, Share2, ShieldCheck, 
  Clock, TrendingUp, Mail, MapPin, Phone, Github, Twitter, Instagram,
  Layers, Zap, Coins, History, BarChart3, Globe
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Palette size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                ArtoGraph<span className="text-purple-500 underline decoration-2 underline-offset-4">AI</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <NavLink className="hover:text-white transition-colors" to= "/about">About</NavLink>
              <a href="#royalties" className="hover:text-white transition-colors">Royalties</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 px-6 py-2 rounded-full font-semibold transition-all"
              >
                {isLoggedIn ? "Dashboard" : "Login / Signup"}
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default header

