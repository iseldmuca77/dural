import { motion } from 'motion/react';
import { PenTool, Factory, ClipboardCheck, Truck } from 'lucide-react';

export const Manufacturing = () => {
  const steps = [
    {
      icon: <PenTool size={24} />,
      title: "Design & Engineering",
      desc: "CAD/CAM integration for precise structural calculations."
    },
    {
      icon: <Factory size={24} />,
      title: "Precision Manufacturing",
      desc: "Automated CNC cutting and assembly in our ISO certified plant."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Quality Control",
      desc: "Rigorous 50-point inspection for every unit before shipping."
    },
    {
      icon: <Truck size={24} />,
      title: "Installation Support",
      desc: "Logistics coordination and technical guidance for installers."
    }
  ];

  return (
    <section className="py-20 bg-[#1A2B4A] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built in Our State-of-the-Art Facility</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
             Combining traditional craftsmanship with cutting-edge automation to deliver perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[600px] shadow-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1713894055910-1a8bdffc41ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGhpZ2glMjB0ZWNofGVufDF8fHx8MTc2MzY1NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Factory Floor"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8">
               <div className="text-4xl font-bold text-[#0066FF] mb-1">50,000 sq ft</div>
               <div className="text-white font-medium tracking-wide">Manufacturing Capacity</div>
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-blue-900/50"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6 group"
              >
                {/* Number Badge */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#1A2B4A] border-2 border-[#0066FF] flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                  <span className="font-bold">{index + 1}</span>
                </div>

                <div className="pt-1">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-300">
                         {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                   </div>
                   <p className="text-gray-400 leading-relaxed">
                      {step.desc}
                   </p>
                </div>
              </motion.div>
            ))}
            
            <div className="pt-8 flex gap-6 opacity-60">
               {/* Simple placeholder shapes for certifications */}
               <div className="h-10 w-24 bg-white/10 rounded animate-pulse"></div>
               <div className="h-10 w-24 bg-white/10 rounded animate-pulse delay-75"></div>
               <div className="h-10 w-24 bg-white/10 rounded animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
