import React, { useState, useRef } from 'react';
import { 
  Palette, Upload, Sparkles, ArrowLeft, X, ImageIcon, 
  Gavel, DollarSign, Type, FileText, CheckCircle2, 
  Loader2, ShieldCheck, Info
} from 'lucide-react';

const App = () => {
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Digital Art',
    suggestedPrice: '',
    description: '',
    royalties: '10%'
  });

  const fileInputRef = useRef(null);

  // Simulated Gemini AI Appraisal Logic
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        triggerAiScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerAiScan = () => {
    setIsScanning(true);
    // Simulating Gemini Multimodal Processing
    setTimeout(() => {
      setFormData({
        title: "Ethereal Echoes #01",
        category: "Digital Art",
        suggestedPrice: "1.45",
        description: "A masterful composition featuring high-contrast neon highlights against a deep void. The brushstrokes suggest a sense of motion and digital entropy, making it a prime candidate for the high-end secondary market.",
        royalties: "10%"
      });
      setIsScanning(false);
    }, 3500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto border border-indigo-500/50">
            <CheckCircle2 size={48} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl font-black">AUCTION LIVE!</h1>
          <p className="text-gray-400 leading-relaxed">
            Your masterpiece has been appraised by Gemini and is now live in the marketplace. 
            Smart Invites have been sent to your watchers.
          </p>
          <button className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-600 hover:text-white transition-all">
            VIEW LISTING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Palette className="text-indigo-500" size={24} />
            <span className="text-xl font-black tracking-tighter">ArtoGraph AI</span>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Cancel Upload
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left: Image Upload & Preview */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-black italic">The Masterpiece.</h2>
            {isScanning && (
              <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
                <Loader2 size={12} className="text-indigo-400 animate-spin" />
                <span className="text-[10px] font-black uppercase text-indigo-400">Gemini Scanning...</span>
              </div>
            )}
          </div>

          <div 
            onClick={() => !image && fileInputRef.current.click()}
            className={`relative aspect-[4/5] rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center group ${
              image ? 'border-indigo-500/50' : 'border-white/10 hover:border-white/30 hover:bg-white/5'
            }`}
          >
            {image ? (
              <>
                <img src={image} alt="Upload" className="w-full h-full object-cover" />
                {isScanning && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent absolute top-0 animate-[scan_2s_infinite_linear]"></div>
                    <div className="text-center">
                      <Sparkles size={48} className="text-indigo-400 mb-4 mx-auto animate-pulse" />
                      <p className="text-xs font-black tracking-widest uppercase">Analyzing Composition</p>
                    </div>
                  </div>
                )}
                <button 
                  onClick={(e) => { e.stopPropagation(); setImage(null); }}
                  className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:text-red-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </>
            ) : (
              <div className="text-center p-8">
                <div className="p-4 bg-white/5 rounded-3xl mb-6 inline-block group-hover:scale-110 transition-transform">
                  <ImageIcon size={40} className="text-gray-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Upload Artwork</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Drag and drop your high-res file here. 
                  Supported: PNG, JPG, WEBP (Max 20MB)
                </p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          <div className="p-6 bg-zinc-950 border border-white/5 rounded-3xl flex items-start gap-4">
             <Info size={20} className="text-indigo-400 shrink-0 mt-1" />
             <p className="text-xs text-gray-500 leading-relaxed font-medium uppercase tracking-tight">
               <span className="text-white font-bold">Pro-tip:</span> High contrast lighting and clear focal points help Gemini give more accurate appraisals.
             </p>
          </div>
        </div>

        {/* Right: AI Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-black italic mb-2">Auction Details.</h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Powered by Gemini Intelligent Forms</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center gap-2">
                <Type size={12} /> Artwork Title
              </label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Name your masterpiece..." 
                className="w-full bg-zinc-950 border border-white/10 p-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-bold" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center gap-2">
                  <Palette size={12} /> Category
                </label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-zinc-950 border border-white/10 p-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-bold appearance-none"
                >
                  <option>Digital Art</option>
                  <option>Oil Painting</option>
                  <option>Sculpture</option>
                  <option>Photography</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-indigo-400 tracking-widest flex items-center gap-2">
                  <Gavel size={12} /> Starting Bid (ETH)
                </label>
                <div className="relative">
                  <DollarSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
                  <input 
                    type="number" 
                    step="0.01"
                    value={formData.suggestedPrice}
                    onChange={(e) => setFormData({...formData, suggestedPrice: e.target.value})}
                    placeholder="0.00" 
                    className="w-full bg-indigo-500/5 border border-indigo-500/30 pl-10 pr-4 py-4 rounded-2xl focus:border-indigo-500 outline-none transition-all font-black text-indigo-400" 
                  />
                  {isScanning && <div className="absolute inset-0 bg-black/20 rounded-2xl animate-pulse"></div>}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center gap-2">
                <FileText size={12} /> AI Storytelling & Description
              </label>
              <textarea 
                rows="4" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Gemini will write this for you..." 
                className="w-full bg-zinc-950 border border-white/10 p-4 rounded-2xl focus:border-indigo-500 outline-none transition-all text-sm leading-relaxed text-gray-400 font-medium"
              ></textarea>
            </div>

            <div className="p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-600 rounded-lg"><ShieldCheck size={18} /></div>
                <div>
                  <h4 className="text-sm font-black italic">Resale Royalty Active</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Automatic GPay Trigger</p>
                </div>
              </div>
              <span className="text-xl font-black text-indigo-400">10%</span>
            </div>

            <button 
              type="submit"
              disabled={!image || isScanning}
              className="w-full py-5 bg-white text-black font-black text-lg rounded-[2rem] hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-indigo-500/10"
            >
              FINALIZE & LIST ARTWORK
            </button>
          </form>
        </div>
      </main>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;