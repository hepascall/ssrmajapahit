import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Palette, Shield, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: 'Pembuatan Gapura',
      description: 'Gapura bergaya Kerajaan Majapahit dengan ornamen klasik dan sentuhan modern',
      features: [
        'Desain custom sesuai tema',
        'Ukuran fleksibel 3-15 meter',
        'Material batu bata merah berkualitas',
        'Finishing cat weather shield'
      ],
      estimasi: '2-4 minggu',
      image: 'gapura-majapahit'
    },
    {
      icon: Palette,
      title: 'Ornamen Seni',
      description: 'Ukiran dinding, relief, dan ornamen dekoratif bergaya tradisional Jawa',
      features: [
        'Relief dinding 3D',
        'Ukiran motif klasik',
        'Ornamen interior & eksterior',
        'Custom desain sesuai konsep'
      ],
      estimasi: '1-3 minggu',
      image: 'ornamen-relief'
    },
    {
      icon: Shield,
      title: 'Pagar Artistik',
      description: 'Pagar kombinasi besi tempa, kayu, dan batu bata dengan motif Majapahit',
      features: [
        'Kombinasi besi & batu bata',
        'Motif geometris tradisional',
        'Anti karat & tahan cuaca',
        'Tinggi sesuai kebutuhan'
      ],
      estimasi: '1-2 minggu',
      image: 'pagar-artistik'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan & survey lokasi' },
    { step: '02', title: 'Desain', desc: '3D mockup & estimasi biaya' },
    { step: '03', title: 'Produksi', desc: 'Pembuatan dengan kontrol kualitas' },
    { step: '04', title: 'Instalasi', desc: 'Pemasangan & finishing on-site' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Layanan Kami
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Spesialisasi dalam tiga bidang utama dengan kualitas premium dan desain autentik bergaya Majapahit
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl smooth-transition transform hover:-translate-y-2 majapahit-shadow overflow-hidden">
              {/* Service Image */}
              <div className="h-64 relative overflow-hidden">
                {index === 0 ? (
                  // Gapura image for first service
                  <img 
                    src="/lovable-uploads/ead4c770-b859-43a6-973e-0e414f704b66.png" 
                    alt="Gapura Majapahit bergaya tradisional dengan ornamen batu bata merah"
                    className="w-full h-full object-cover"
                  />
                ) : index === 1 ? (
                  // Ornamen Seni image for second service
                  <img 
                    src="/lovable-uploads/d01e1c78-25c7-4ba1-80b8-5f7298a6ed95.png" 
                    alt="Ornamen tradisional Majapahit dengan motif mandala dan ukiran klasik"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Pagar Artistik image for third service
                  <img 
                    src="/lovable-uploads/a863cce6-1267-4c6b-b448-86127f24c8af.png" 
                    alt="Pagar artistik bergaya Majapahit dengan kombinasi batu bata merah dan motif tradisional"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white">
                    <service.icon className="w-6 h-6" />
                    <span className="font-semibold">{service.title}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-primary">{service.title}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Keunggulan:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimation */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Estimasi: {service.estimasi}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover:bg-primary hover:text-white smooth-transition"
                    onClick={() => window.open(`https://wa.me/6285714548773?text=Halo,%20saya%20tertarik%20dengan%20layanan%20${service.title}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Konsultasi
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Proses Pengerjaan</h3>
            <p className="text-xl text-muted-foreground">Tahapan sistematis untuk hasil yang optimal</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto text-white font-bold text-xl group-hover:scale-110 smooth-transition">
                    {process.step}
                  </div>
                  {/* Connector line (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-secondary/30 transform -translate-x-8" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto majapahit-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Siap Mulai Proyek Anda?</h3>
              <p className="text-muted-foreground mb-6">
                Konsultasikan kebutuhan ornamen Majapahit Anda dengan tim ahli kami. 
                Dapatkan estimasi biaya dan desain 3D secara gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="gold-gradient hover:opacity-90 smooth-transition"
                  onClick={() => window.open('https://wa.me/6285714548773?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20untuk%20proyek%20ornamen%20Majapahit', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Lihat Galeri
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;