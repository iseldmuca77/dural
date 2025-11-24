import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ArrowUpRight } from 'lucide-react';

export const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    { id: 1, title: "Azure Skyline Tower", category: "Commercial", location: "New York, NY", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { id: 2, title: "Lakeside Villa", category: "Residential", location: "Lake Tahoe, CA", img: "https://images.unsplash.com/photo-1600596542815-2255c3056284?w=800&q=80" },
    { id: 3, title: "Historic Library", category: "Historic", location: "Boston, MA", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800&q=80" },
    { id: 4, title: "Modern Loft", category: "Residential", location: "Seattle, WA", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
    { id: 5, title: "Tech HQ Campus", category: "Commercial", location: "Austin, TX", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { id: 6, title: "Alpine Retreat", category: "Residential", location: "Aspen, CO", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const filters = ["All", "Residential", "Commercial", "Historic"];

  return (
    <section id="projects" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">Featured Projects</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? 'bg-[#1A2B4A] text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter="20px">
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={project.id}
                        className="relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                    >
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{ display: "block" }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                            <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-gray-300 text-sm flex items-center justify-between">
                                {project.location}
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </p>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </ResponsiveMasonry>

        <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white font-bold py-3 px-8 rounded-md transition-all uppercase tracking-wide text-sm">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};
