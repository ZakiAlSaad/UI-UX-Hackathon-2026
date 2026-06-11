import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#030308] text-cyan-50 font-mono flex items-center justify-center overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="cyber-grid fixed inset-0 z-0 pointer-events-none opacity-40"></div>
      
      {/* Dynamic light following cursor */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,255,0.07), transparent 40%)`
        }}
      />

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
        {/* Animated 404 Glitch Text */}
        <motion.div 
          className="relative inline-block mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#030308] opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500 animate-pulse mix-blend-screen">
              404
            </h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center translate-x-1 translate-y-1 opacity-50 mix-blend-screen">
            <h1 className="text-6xl md:text-9xl font-bold text-cyan-400">
              404
            </h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-center -translate-x-1 -translate-y-1 opacity-50 mix-blend-screen">
            <h1 className="text-6xl md:text-9xl font-bold text-pink-500">
              404
            </h1>
          </div>
        </motion.div>

        {/* Terminal Window Box */}
        <motion.div 
          className="w-full max-w-2xl neon-box p-6 md:p-8 rounded-xl bg-[#080816]/90 backdrop-blur-md text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-2 mb-6 border-b border-cyan-500/20 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          <div className="space-y-4 font-mono text-sm md:text-base">
            <div className="flex gap-4">
              <span className="text-red-400">ERR!</span>
              <span className="text-zinc-300">File execution failed.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-red-400">ERR!</span>
              <span className="text-zinc-300">Module <span className="text-pink-400 border border-pink-500/30 px-1 rounded">path_not_resolved</span> missing.</span>
            </div>
            
            <div className="border-l-2 border-zinc-700 pl-4 py-2 my-4 text-zinc-500">
              <p>The requested URL was not found on this server.</p>
              <p>That's all we know.</p>
            </div>

            <div className="flex items-center gap-2 mt-8 text-cyan-400">
              <span>&gt;</span>
              <span className="typing-animation border-r-2 border-cyan-400 pr-1 animate-pulse">
                Init route recovery sequence...
              </span>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center md:justify-start">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 rounded text-cyan-300 hover:text-cyan-50 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 bg-[#030308]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              root_dir/cd
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-6 left-6 text-zinc-600 text-xs tracking-widest font-mono uppercase">
        System_Failure // Code: 404
      </div>
    </div>
  );
}
