import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  Send
} from 'lucide-react';

// Custom TikTok Icon Component
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ContactSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+62 857-1454-8773',
      action: () => window.open('https://wa.me/6285714548773', '_blank'),
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '085714548773',
      action: () => window.open('tel:+62085714548773', '_blank'),
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ssrmajapahit.com',
      action: () => window.open('mailto:info@ssrmajapahit.com', '_blank'),
      color: 'text-red-600'
    },
    {
      icon: MapPin,
      title: 'Alamat Workshop',
      value: 'Jl. Sekarputih, Mergelo, Kedundung, Magersari, Mojokerto',
      action: () => window.open('https://maps.app.goo.gl/tiXU8dBoYT946Tbb7', '_blank'),
      color: 'text-primary'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@ahlinya_gapura_majapahit',
      url: 'https://www.instagram.com/ahlinya_gapura_majapahit?igsh=aGh1bXh6ejAzaGN4',
      color: 'text-pink-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'SSR Majapahit Official',
      url: 'https://www.facebook.com/share/1GW2z7JeMv/',
      color: 'text-blue-600'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'Bangkit Eko Channel',
      url: 'https://youtube.com/@bangkiteko154?si=EYeyl_HZsSU10GGl',
      color: 'text-red-600'
    },
    {
      icon: TikTok,
      name: 'TikTok',
      handle: '@ahlinya_gapura',
      url: 'https://vt.tiktok.com/ZSSTwKJrB',
      color: 'text-purple-600'
    }
  ];

  const workingHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 17:00 WIB' },
    { day: 'Sabtu', hours: '08:00 - 15:00 WIB' },
    { day: 'Minggu', hours: 'Tutup' }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Hubungi Kami
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap memulai proyek ornamen Majapahit Anda? Konsultasikan kebutuhan Anda dengan tim ahli kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="majapahit-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Send className="w-6 h-6" />
                  <span>Form Konsultasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Nama Lengkap</label>
                    <Input placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Nomor WhatsApp</label>
                    <Input placeholder="08123456789" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Jenis Layanan</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Pilih Jenis Layanan</option>
                    <option>Gapura Majapahit</option>
                    <option>Ornamen & Relief</option>
                    <option>Pagar Artistik</option>
                    <option>Konsultasi Umum</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Lokasi Proyek</label>
                  <Input placeholder="Kota/Kabupaten" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Deskripsi Proyek</label>
                  <Textarea 
                    placeholder="Ceritakan detail proyek Anda: ukuran, lokasi, timeline, budget, dll."
                    rows={4}
                  />
                </div>
                
                <Button 
                  className="w-full gold-gradient hover:opacity-90 smooth-transition text-lg py-3"
                  onClick={() => {
                    // In real implementation, collect form data and send to WhatsApp
                    window.open('https://wa.me/6285714548773?text=Halo,%20saya%20ingin%20konsultasi%20proyek%20ornamen%20Majapahit', '_blank');
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Kirim via WhatsApp
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Atau langsung hubungi kami melalui kontak di bawah ini
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="majapahit-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Kontak Langsung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-3 hover:bg-accent/50 rounded-lg cursor-pointer smooth-transition"
                    onClick={contact.action}
                  >
                    <div className={`w-10 h-10 rounded-full bg-accent flex items-center justify-center ${contact.color}`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{contact.title}</p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="majapahit-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="w-5 h-5" />
                  <span>Jam Operasional</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Waktu Real-time:</p>
                  <p className="font-mono text-primary">{formatDate(currentTime)}</p>
                  <p className="font-mono text-2xl font-bold text-primary">{formatTime(currentTime)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="majapahit-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Media Sosial</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialMedia.map((social, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-accent/50 rounded-lg cursor-pointer smooth-transition"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                    <div>
                      <p className="font-medium text-primary">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <Card className="majapahit-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-primary">
              <MapPin className="w-6 h-6" />
              <span>Lokasi Workshop</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-accent/20 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.654!2d112.42!3d-7.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78182f5c123456%3A0x7890abcdef123456!2sJl.%20Sekarputih%2C%20Mergelo%2C%20Kedundung%2C%20Kec.%20Magersari%2C%20Kota%20Mojokerto%2C%20Jawa%20Timur%2061316!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSR Majapahit Workshop Location"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;