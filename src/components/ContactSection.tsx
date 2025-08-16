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
      value: '+62 812-3456-7890',
      action: () => window.open('https://wa.me/6281234567890', '_blank'),
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '(031) 123-4567',
      action: () => window.open('tel:+62311234567', '_blank'),
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
      value: 'Jl. Majapahit No. 123, Surabaya',
      action: () => window.open('https://maps.google.com/?q=SSR+Majapahit+Surabaya', '_blank'),
      color: 'text-primary'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@ssrmajapahit',
      url: 'https://instagram.com/ssrmajapahit',
      color: 'text-pink-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'SSR Majapahit Official',
      url: 'https://facebook.com/ssrmajapahit',
      color: 'text-blue-600'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'SSR Majapahit Channel',
      url: 'https://youtube.com/ssrmajapahit',
      color: 'text-red-600'
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
                    window.open('https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20proyek%20ornamen%20Majapahit', '_blank');
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
            <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-2">SSR Majapahit Workshop</h4>
                <p className="text-muted-foreground mb-4">
                  Jl. Majapahit No. 123, Surabaya<br />
                  Jawa Timur 60123
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://maps.google.com/?q=SSR+Majapahit+Surabaya', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;