import { motion } from 'motion/react';

export const StatsBar = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "10k+", label: "Projects Completed" },
    { value: "ISO", label: "9001 Certified Quality" },
    { value: "50+", label: "Countries Served" },
  ];

  return (
    <section id="stats" className="py-16 bg-white relative z-20 -mt-4 rounded-t-3xl shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-2 group-hover:scale-110 transition-transform duration-300 ease-out">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
