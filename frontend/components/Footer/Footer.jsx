import React from 'react'
import { 
  Palette, Search, Upload, Gavel, Calendar, User, Menu, X, 
  ArrowRight, Sparkles, Heart, MessageCircle, Share2, ShieldCheck, 
  Clock, TrendingUp, Mail, MapPin, Phone, Github, Twitter, Instagram,
  Layers, Zap, Coins, History, BarChart3, Globe
} from 'lucide-react';

function Footer() {
  return (
    <footer className="py-20 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:text-purple-400 transition-all"><Twitter /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:text-purple-400 transition-all"><Instagram /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:text-purple-400 transition-all"><Github /></a>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-[4px] text-gray-600 mb-10">
            <a href="#" className="hover:text-white transition-all">Privacy</a>
            <a href="#" className="hover:text-white transition-all">Provenance Rules</a>
            <a href="#" className="hover:text-white transition-all">Artist Terms</a>
            <a href="#" className="hover:text-white transition-all">GPay Security</a>
          </div>
          <p className="text-gray-700 text-[10px] font-mono">ARTO_GRAPH_AI_SYSTEM_V2.0_2025</p>
        </div>
      </footer>
  )
}

export default Footer
