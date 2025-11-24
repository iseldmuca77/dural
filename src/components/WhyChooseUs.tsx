import { motion } from 'motion/react';
import { Cog, PenTool, Award, Headset, Leaf, ShieldCheck } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    { icon: <Cog />, title: "Technical Expertise", desc: "In-house engineering team dedicated to solving complex glazing challenges." },
    { icon: <PenTool />, title: "Custom Solutions", desc: "We build what others can't. Fully bespoke shapes, sizes, and opening mechanisms." },
    { icon: <Award />, title: "Proven Reliability", desc: "25+ years of track record with zero major structural failures in over 10,000 projects." },
    { icon: <Headset />, title: "Full Support", desc: "From initial design consultation to post-installation maintenance guides." },
    { icon: <Leaf />, title: "Sustainable Choice", desc: "Commitment to eco-friendly manufacturing and high thermal performance products." },
    { icon: <ShieldCheck />, title: "Warranty Protection", desc: "Industry-leading 20-year comprehensive warranty on all frames and glass." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-4">Why Architects & Builders Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             We don't just manufacture windows; we partner with you to realize your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#F5F7FA] rounded-xl flex items-center justify-center text-[#0066FF] mb-6 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
