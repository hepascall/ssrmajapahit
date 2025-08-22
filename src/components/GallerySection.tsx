import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Palette, Shield, Grid3X3, Eye, Calendar } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Karya', icon: Grid3X3 },
    { id: 'gapura', label: 'Gapura', icon: Crown },
    { id: 'ornamen', label: 'Ornamen', icon: Palette },
    { id: 'pagar', label: 'Pagar', icon: Shield },
  ];

  const portfolioItems = [
    {
      id: 7,
      title: 'Ornamen Gunungan Majapahit',
      category: 'ornamen',
      year: '2024',
      location: 'Mojokerto',
      description: 'Ornamen tradisional gunungan dengan ukiran motif klasik Majapahit',
      before: true,
      image: '/lovable-uploads/64ce9437-08ca-4cc6-a6f4-3b7eb4e80d4d.png',
      tags: ['Gunungan', 'Ukiran Klasik', 'Tradisional']
    },
    {
      id: 8,
      title: 'Ornamen Mandala Surya Majapahit',
      category: 'ornamen',
      year: '2024',
      location: 'Mojokerto',
      description: 'Ornamen mandala dengan lambang Surya Majapahit dan motif simetris',
      before: true,
      image: '/lovable-uploads/75498cf9-dc78-4656-919f-70928199de53.png',
      tags: ['Mandala', 'Surya Majapahit', 'Simetris']
    },
    {
      id: 9,
      title: 'Pagar Gapura Bata Merah Kompleks',
      category: 'pagar',
      year: '2024',
      location: 'Mojokerto',
      description: 'Pagar gapura tradisional dengan bata merah dan ornamen geometris',
      before: true,
      image: '/lovable-uploads/c7dd5ac3-9d02-443d-b8de-cf40cf34b52b.png',
      tags: ['Bata Merah', 'Gapura', 'Ornamen Geometris']
    },
    {
      id: 10,
      title: 'Pagar Gapura Minimalis Modern',
      category: 'pagar',
      year: '2024',
      location: 'Mojokerto',
      description: 'Pagar gapura modern dengan desain minimalis bergaya Majapahit',
      before: true,
      image: '/lovable-uploads/67721c93-6901-45ae-a1d0-ff6f65f19300.png',
      tags: ['Modern', 'Minimalis', 'Gapura']
    },
    {
      id: 11,
      title: 'Gapura Desa Kalangan Prao',
      category: 'gapura',
      year: '2024',
      location: 'Madura',
      description: 'Gapura entrance desa dengan arsitektur tradisional Majapahit bata merah',
      before: true,
      image: '/lovable-uploads/59d6f460-bb23-4cd3-8c64-07e570dca0d6.png',
      tags: ['Entrance Desa', 'Bata Merah', 'Tradisional']
    },
    {
      id: 12,
      title: 'Gapura Desa Kalangan Prao Detail',
      category: 'gapura',
      year: '2024',
      location: 'Madura',
      description: 'Detail konstruksi gapura dengan ornamen bertingkat dan papan nama desa',
      before: true,
      image: '/lovable-uploads/fe51b027-bb0d-46ce-baf5-534692926663.png',
      tags: ['Detail Konstruksi', 'Ornamen Bertingkat', 'Papan Nama']
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Galeri Portofolio
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Koleksi karya terbaik kami dalam pembuatan ornamen, gapura, dan pagar bergaya Majapahit
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`smooth-transition ${
                selectedCategory === category.id 
                  ? 'gold-gradient text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-2xl smooth-transition transform hover:-translate-y-2 majapahit-shadow overflow-hidden">
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                {/* Before/After Badge */}
                {item.before && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Selesai
                    </span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    {categories.find(c => c.id === item.category)?.label}
                  </div>
                </div>

                {/* Image or Placeholder */}
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white/80">
                        {item.category === 'gapura' && <Crown className="w-12 h-12 mx-auto mb-2" />}
                        {item.category === 'ornamen' && <Palette className="w-12 h-12 mx-auto mb-2" />}
                        {item.category === 'pagar' && <Shield className="w-12 h-12 mx-auto mb-2" />}
                        <p className="text-sm font-medium">{item.title}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                  <Button 
                    size="sm" 
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-2 border border-white/20 rounded pointer-events-none opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-primary text-lg leading-tight">{item.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                  <span>{item.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Tertarik dengan Karya Kami?</h3>
            <p className="text-muted-foreground mb-6">
              Setiap proyek adalah unik. Mari diskusikan kebutuhan spesifik Anda dan 
              wujudkan ornamen Majapahit impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gold-gradient hover:opacity-90 smooth-transition"
                onClick={() => window.open('https://wa.me/6285714548773?text=Halo,%20saya%20tertarik%20dengan%20portofolio%20SSR%20Majapahit%20dan%20ingin%20konsultasi', '_blank')}
              >
                Konsultasi Proyek
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;