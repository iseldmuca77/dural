import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-[#0066FF] to-[#004ec2] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Get a personalized quote within 24 hours. Our team is ready to help you specify the perfect window solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#0066FF] font-bold rounded-md text-lg shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Request Free Quote <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-3 bg-white/10 rounded-full">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-blue-200">Or call us</div>
                <div className="text-xl font-bold">+1-234-567-8900</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-blue-100/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} /> No obligation
            </div>
            <div className="flex items-center gap-2">
               <CheckCircle size={18} /> Expert advice
            </div>
            <div className="flex items-center gap-2">
               <Clock size={18} /> Fast response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
