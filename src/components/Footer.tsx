import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A2B4A] text-white pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#1A2B4A] relative">
                     <div className="absolute inset-0 border-t-2 border-l-2 border-[#1A2B4A] transform translate-x-0.5 translate-y-0.5"></div>
                  </div>
               </div>
               <span className="text-white font-bold text-xl tracking-tight">LUMINA<span className="font-light">WORKS</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Premier manufacturer of high-performance window systems. Engineering excellence meets architectural beauty.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                  <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                  <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                  <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                  <Linkedin size={18} />
               </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-[#0066FF] transition-colors">Products</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-[#0066FF] transition-colors">Solutions</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#0066FF] transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#0066FF] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#0066FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
             <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors">Installation Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors">Warranty Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0066FF] transition-colors">Downloads</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 text-[#0066FF] mt-1" size={18} />
                <span>123 Innovation Drive,<br />Tech Park, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0 text-[#0066FF]" size={18} />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="shrink-0 text-[#0066FF]" size={18} />
                <span>hello@luminaworks.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="shrink-0 text-[#0066FF] mt-1" size={18} />
                <span>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LuminaWorks. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
               <span>English (US)</span>
               <div className="w-2 h-2 border-r border-b border-current transform rotate-45 mb-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
