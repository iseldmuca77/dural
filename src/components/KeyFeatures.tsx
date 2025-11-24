import { motion } from 'motion/react';
import { Thermometer, Shield, Palette, ArrowRight, Lock, Wind, Sun } from 'lucide-react';

export const KeyFeatures = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col gap-24">
        
        {/* Feature 1: Energy Efficiency */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1751486403820-7cf45ebec080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBmcmFtZSUyMGRldGFpbCUyMGNsb3NlJTIwdXAlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzNjU0MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Energy Efficiency Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2B4A]/80 to-transparent p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-block border border-white/20">
                 <span className="text-white font-bold">U-Values as low as 0.15</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">ENERGY EFFICIENCY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-6">Superior Thermal Performance</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our advanced thermal break technology and multi-chamber designs ensure your building stays cool in summer and warm in winter, significantly reducing energy costs.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#0066FF]">
                  <Thermometer size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B4A]">Triple-Glazed Options</h4>
                  <p className="text-sm text-gray-600">Argon or Krypton gas filled for maximum insulation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#0066FF]">
                  <Sun size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B4A]">Low-E Coatings</h4>
                  <p className="text-sm text-gray-600">Microscopically thin layers reflecting heat while letting light in.</p>
                </div>
              </li>
            </ul>
            
            <a href="#" className="text-[#1A2B4A] font-semibold border-b-2 border-[#0066FF] pb-1 hover:text-[#0066FF] transition-colors">
              View Technical Specs
            </a>
          </motion.div>
        </div>

        {/* Feature 2: Durability & Security */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">DURABILITY & SECURITY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-6">Engineered to Protect</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Peace of mind comes standard. Our windows feature reinforced profiles and state-of-the-art locking mechanisms tested to exceed international security standards.
            </p>
            
            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#0066FF]">
                  <Lock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B4A]">Multi-point Locking</h4>
                  <p className="text-sm text-gray-600">Secures the window at multiple points along the frame.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#0066FF]">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B4A]">Impact Resistant</h4>
                  <p className="text-sm text-gray-600">Tempered and laminated glass options for added safety.</p>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-[#0066FF]">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B4A]">Weather Sealed</h4>
                  <p className="text-sm text-gray-600">Double weatherstripping blocks drafts and moisture.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1680727518491-bd54a9e702ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwc2VjdXJpdHklMjB3aW5kb3clMjBsb2NrfGVufDF8fHx8MTc2MzY1NDE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Security Lock System"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Feature 3: Design Flexibility */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1761422599123-a26ce0dd1611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yJTIwd2luZG93JTIwdmlld3xlbnwxfHx8fDE3NjM2NTQxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interior Design Flexibility"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">DESIGN FLEXIBILITY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-6">Limitless Customization</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Don't compromise on your vision. From powder-coated aluminium to warm timber finishes, we offer an extensive palette of colors and materials to match your architectural style.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black mx-auto mb-2 shadow-md"></div>
                  <span className="font-medium text-gray-800">Matte Black</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-white mx-auto mb-2 shadow-md border border-gray-300"></div>
                  <span className="font-medium text-gray-800">Classic White</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B4513] to-[#A0522D] mx-auto mb-2 shadow-md"></div>
                  <span className="font-medium text-gray-800">Wood Grain</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center flex items-center justify-center">
                  <span className="text-[#0066FF] font-bold">+200 RAL Colors</span>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
