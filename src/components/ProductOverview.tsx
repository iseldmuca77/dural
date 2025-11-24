import { motion } from 'motion/react';
import { ArrowRight, Check, Home, Building2, PencilRuler } from 'lucide-react';

export const ProductOverview = () => {
  const products = [
    {
      title: "Residential Windows",
      description: "Enhance your home's comfort and curb appeal with our energy-efficient residential series.",
      icon: <Home className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1761135125354-d024f37d04ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGhvbWUlMjBleHRlcmlvciUyMGxhcmdlJTIwd2luZG93c3xlbnwxfHx8fDE3NjM2NTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Triple-pane glass options", "Noise reduction technology", "Custom frame colors", "Lifetime warranty"],
    },
    {
      title: "Commercial Solutions",
      description: "High-performance glazing systems designed for modern office buildings and retail spaces.",
      icon: <Building2 className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1555238920-7a6bea18473b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3NjM2NTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Curtain wall integration", "Structural glazing", "Fire-rated options", "LEED certification ready"],
    },
    {
      title: "Custom Systems",
      description: "Bespoke window manufacturing for unique architectural requirements and historic renovations.",
      icon: <PencilRuler className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1561072034-99ce035e1137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZWQlMjB3aW5kb3clMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzNjU0MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Arched & geometric shapes", "Historic replication", "Smart glass technology", "Motorized operation"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">Window Systems for Every Need</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center shadow-lg z-10">
                  {product.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="inline-flex items-center text-[#0066FF] font-semibold hover:gap-2 transition-all group-hover:text-[#0052cc]">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
