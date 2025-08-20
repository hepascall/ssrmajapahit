import React, { useState, useEffect } from 'react';
import { Crown, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

// Custom TikTok Icon Component
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Tentang Kami', id: 'about' },
    { label: 'Layanan', id: 'services' },
    { label: 'Galeri', id: 'gallery' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Kontak', id: 'contact' },
  ];

  const services = [
    'Gapura Majapahit',
    'Relief & Ornamen',
    'Pagar Artistik',
    'Konsultasi Desain'
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/ahlinya_gapura_majapahit?igsh=aGh1bXh6ejAzaGN4',
      color: 'hover:text-pink-400'
    },
    {
      icon: Facebook,
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1GW2z7JeMv/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@bangkiteko154?si=EYeyl_HZsSU10GGl',
      color: 'hover:text-red-400'
    },
    {
      icon: TikTok,
      name: 'TikTok',
      url: 'https://vt.tiktok.com/ZSSTwKJrB',
      color: 'hover:text-purple-400'
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">SSR</span>
                <br />
                <span className="text-lg text-yellow-200">Majapahit</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Perusahaan kontraktor spesialis ornamen, gapura, dan pagar bergaya Kerajaan Majapahit. 
              Menghadirkan seni arsitektur klasik dengan sentuhan modern.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>+6285714548773</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-300" />
                <span>info@ssrmajapahit.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-yellow-300 mt-0.5" />
                <span>Jl. Sekarputih, RT.04/RW.02, Mergelo, Kedundung, Kec. Magersari, Kota Mojokerto, Jawa Timur 61316</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-200">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-yellow-200 smooth-transition text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-200">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 hover:text-yellow-200 smooth-transition cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-200">Hubungi Kami</h4>
            
            {/* Real-time Clock */}
            <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-sm text-white/70 mb-1">Waktu Real-time:</p>
              <p className="font-mono text-lg font-bold text-yellow-200">
                {formatTime(currentTime)}
              </p>
              <p className="text-sm text-white/70">WIB</p>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-3">Ikuti Media Sosial:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ${social.color} smooth-transition hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={() => window.open('https://wa.me/6285714548773?text=Halo,%20saya%20ingin%20konsultasi%20dengan%20SSR%20Majapahit', '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg smooth-transition flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Chat WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/70">
                &copy; {currentYear} SSR Majapahit. Semua hak cipta dilindungi.
              </p>
              <p className="text-sm text-white/60">
                Dibuat dengan ❤️ untuk melestarikan warisan budaya Majapahit
              </p>
            </div>

            {/* Additional Info */}
            <div className="text-center lg:text-right text-sm text-white/60">
              <p>Jam Operasional: Senin-Sabtu 08:00-17:00 WIB</p>
              <p>Konsultasi 24 jam via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-yellow-200/50">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-200/30" />
              <Crown className="w-6 h-6" />
              <span className="text-xs font-medium">WARISAN BUDAYA INDONESIA</span>
              <Crown className="w-6 h-6" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-200/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;