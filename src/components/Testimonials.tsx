import Slider from "react-slick";
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Lead Architect, ModernSpaces",
      quote: "LuminaWorks delivered exceptional quality for our 40-story residential project. Their engineering team was instrumental in solving the wind load challenges.",
      image: "https://images.unsplash.com/photo-1597124926410-071909e0db1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaGVyJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzY1NDE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Michael Chen",
      role: "Director, Chen Construction",
      quote: "The precision of their custom frames made installation 30% faster than our previous suppliers. A true partner in construction.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Homeowner",
      quote: "We wanted floor-to-ceiling windows that wouldn't compromise our home's insulation. The result is stunning and our heating bills actually went down.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "David Park",
      role: "Developer, Urban Living",
      quote: "Consistent quality across all 50 units. The soundproofing is incredible—you can't hear the city traffic at all.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-[#0066FF] font-bold tracking-wider text-sm uppercase mb-2 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A]">Trusted by Professionals</h2>
        </div>

        <div className="px-4 md:px-12">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-4 pb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full border border-gray-50 flex flex-col">
                  <Quote className="w-10 h-10 text-[#0066FF]/20 mb-6" />
                  <p className="text-[#1A2B4A] italic text-lg mb-8 flex-grow font-medium leading-relaxed">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-[#1A2B4A]">{t.name}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
