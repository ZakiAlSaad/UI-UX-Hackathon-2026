import { motion } from "motion/react";
import { useEffect, useState } from "react";

const codeSnippets = [
  "justify-content: space-between;",
  "align-items: center;",
  "transition: cubic-bezier(0.4, 0, 0.2, 1);",
  "box-shadow: 0 0 10px #0ff;",
  "@keyframes glitch { 0% { transform: translate(0) } }",
  "font-family: 'Fira Code', monospace;",
  ":root { --neon-glow: #ff00ff; }",
  "backdrop-filter: blur(12px);",
  "display: flex;",
  "position: relative;",
  "z-index: 999;"
];

const FloatingCode = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.15]">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400 font-mono text-sm sm:text-base whitespace-nowrap"
          initial={{ 
            top: `${Math.random() * 100}vh`, 
            left: `${Math.random() * 100}vw`,
            opacity: 0
          }}
          animate={{
            top: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            left: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: Math.random() * 40 + 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#030308] text-cyan-50 font-mono selection:bg-pink-500/30 selection:text-pink-200">
      <div className="cyber-grid fixed inset-0 z-0 pointer-events-none opacity-60"></div>
      <FloatingCode />

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 w-full">
        
        {/* Header Comment Block */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-zinc-500 mb-6 text-sm md:text-base leading-relaxed">
            /* <br />
            &nbsp;* @designer S. M. Zaki Al Saad Marjan <br />
            &nbsp;* @role UI/UX Designer <br />
            &nbsp;* @description Certificate & Design Showcase <br />
            &nbsp;*/
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            .showcase-portfolio &#123;
          </h1>
        </motion.div>

        {/* Certificate Section */}
        <motion.section 
          className="ml-0 md:ml-12 mb-20 relative group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-pink-500 font-bold mb-4 text-sm md:text-base truncate">
            &nbsp;&nbsp;--certificate-view: <span className="text-cyan-300">url(</span><span className="text-yellow-300">"/assets/certificate.png"</span><span className="text-cyan-300">)</span>;
          </div>
          
          <div className="neon-box p-4 md:p-8 rounded-xl bg-[#080816]/80 backdrop-blur-md">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4 border-b border-cyan-500/20 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <img 
              src="/assets/certificate.png" 
              alt="UI/UX Design Certificate" 
              className="w-full h-auto object-contain rounded border border-cyan-500/10 shadow-[0_0_20px_rgba(0,255,255,0.05)] transition-all duration-500 bg-zinc-950/50"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x800/111111/00ffff?text=Add+certificate.png+to+/public/assets/"
              }}
            />
          </div>
        </motion.section>

        {/* Design Section */}
        <motion.section 
          className="ml-0 md:ml-12 mb-12 relative group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-pink-500 font-bold mb-4 text-sm md:text-base truncate">
            &nbsp;&nbsp;--interface-design: <span className="text-cyan-300">url(</span><span className="text-yellow-300">"/assets/design.png"</span><span className="text-cyan-300">)</span>;
          </div>
          
          <div className="neon-box-pink p-4 md:p-8 rounded-xl bg-[#160816]/80 backdrop-blur-md">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4 border-b border-pink-500/20 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <img 
              src="/assets/design.png" 
              alt="UI Design Details" 
              className="w-full h-auto object-contain rounded border border-pink-500/10 shadow-[0_0_20px_rgba(255,0,255,0.05)] transition-all duration-500 bg-zinc-950/50"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x800/111111/ff00ff?text=Add+design.png+to+/public/assets/"
              }}
            />
          </div>
        </motion.section>

        {/* Footer Closure */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mt-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            &#125;
          </h1>
          <div className="mt-12 text-zinc-500 text-xs md:text-sm flex items-center gap-3">
            <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
            System Online // Assets mapped locally
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
