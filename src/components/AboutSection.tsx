import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Target, Eye, Users, Award, Hammer } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Crown,
      title: 'Warisan Budaya',
      description: 'Melestarikan seni rupa arsitektur Majapahit dengan interpretasi modern'
    },
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Menggunakan bahan berkualitas tinggi dan pengerjaan detail yang presisi'
    },
    {
      icon: Users,
      title: 'Tim Ahli',
      description: 'Didukung tukang berpengalaman dan desainer profesional'
    },
    {
      icon: Hammer,
      title: 'Pengerjaan Handmade',
      description: 'Setiap ornamen dikerjakan dengan tangan untuk hasil yang autentik'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tentang Kami
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SSR Majapahit adalah perusahaan kontraktor spesialis ornamen yang berdedikasi menghadirkan kembali 
            keindahan arsitektur era Kerajaan Majapahit dengan sentuhan modern minimalis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Vision */}
            <Card className="majapahit-shadow border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Visi</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi perusahaan kontraktor terdepan dalam pelestarian dan modernisasi seni arsitektur 
                  tradisional Indonesia, khususnya ornamen dan struktur bergaya Majapahit.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="majapahit-shadow border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full majapahit-gradient flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Misi</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start space-x-2">
                    <Crown className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Menghadirkan karya seni arsitektur yang menggabungkan nilai historis dan estetika modern</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Crown className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Memberikan layanan berkualitas tinggi dengan harga yang kompetitif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Crown className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Melestarikan warisan budaya melalui inovasi dalam konstruksi ornamen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Team Photo */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden majapahit-shadow">
              <img 
                src="/lovable-uploads/0a3092d0-8599-449a-87d3-0a080e0db3ca.png" 
                alt="Tim Ahli SSR Majapahit - Tukang dan desainer berpengalaman sedang bekerja di lokasi proyek"
                className="w-full h-full object-cover"
              />
              {/* Overlay with team info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-xl font-bold text-white mb-1">Tim Ahli SSR Majapahit</h4>
                <p className="text-white/90">Tukang & Desainer Berpengalaman</p>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-4 border-2 border-white/20 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Philosophy & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Filosofi Desain</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Kami percaya bahwa setiap ornamen bukan hanya elemen dekoratif, tetapi juga cerminan identitas budaya 
              yang kaya akan makna. Dengan menggabungkan teknik tradisional dan teknologi modern, kami menciptakan 
              karya yang timeless namun tetap relevan dengan kebutuhan masa kini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg smooth-transition transform hover:-translate-y-2 majapahit-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;