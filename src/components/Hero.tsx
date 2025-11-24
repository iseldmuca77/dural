import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1737823934403-c43c450f25de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwd2luZG93cyUyMGx1eHVyeSUyMGhvbWUlMjBkdXNrfGVufDF8fHx8MTc2MzY1NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Premium Windows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2B4A]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/90 via-transparent to-[#1A2B4A]/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Premium Windows.<br />
            Engineered for Performance.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            High-quality window systems for residential and commercial projects.
            <br className="hidden md:block" />
            Over 25 years of manufacturing excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#quote"
              className="w-full sm:w-auto px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-md transition-all shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1 text-lg"
            >
              Request Quote
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2B4A] font-bold rounded-md transition-all text-lg"
            >
              View Products
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-90">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-6 h-6 text-[#0066FF]" />
              <span className="font-semibold tracking-wide text-sm md:text-base">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold tracking-wide text-sm md:text-base">Energy Star Partner</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#stats" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};
