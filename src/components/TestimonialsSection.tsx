import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, User, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      location: 'Madura',
      role: 'Kepala Desa',
      rating: 5,
      review: 'Hasil Gapura Majapahit di Desa Kalangan Prao sangat menakjubkan! Tim SSR Majapahit sangat profesional, detail pengerjaan sempurna, dan selesai tepat waktu. Warga setempat selalu memuji keindahan gapura ini. Sangat puas dengan pelayanan dan kualitasnya.',
      project: 'Gapura Desa Kalangan Prao',
      initials: 'BS'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      location: 'Malang',
      role: 'Arsitek Interior',
      rating: 5,
      review: 'Sebagai arsitek, saya sangat terkesan dengan kualitas ornamen relief yang dikerjakan SSR Majapahit. Detail ukiran sangat halus dan presisi. Tim mereka memahami konsep desain dengan baik dan memberikan saran konstruktif untuk hasil optimal.',
      project: 'Relief Dinding Interior 15m²',
      initials: 'SN'
    },
    {
      id: 3,
      name: 'Agus Wibowo',
      location: 'Sidoarjo',
      role: 'Developer Perumahan',
      rating: 5,
      review: 'Sudah 3 kali menggunakan jasa SSR Majapahit untuk proyek perumahan. Konsistensi kualitas dan ketepatan waktu selalu terjaga. Harga sangat kompetitif untuk kualitas premium. Tim yang sangat bisa diandalkan untuk proyek skala besar.',
      project: 'Pagar Artistik 15 Unit Rumah',
      initials: 'AW'
    },
    {
      id: 4,
      name: 'Maya Kusuma',
      location: 'Ponorogo',
      role: 'Humas Desa Kalimalang',
      rating: 5,
      review: 'Gapura dan Ornamen yang dibangun oleh tim SSR Majapahit di desa kami menjadi daya tarik tersendiri. Banyak yang memuji keindahannya, khususnya para pegawai desa ataupun warga desa yang melintasi dijalan desa kami. Terima kasih SSR Majapahit!',
      project: 'Gapura dan Ornamen Desa Kalimalang',
      initials: 'MK'
    }
  ];

  const stats = [
    { number: '100+', label: 'Proyek Selesai' },
    { number: '50+', label: 'Klien Puas' },
    { number: '5', label: 'Tahun Pengalaman' },
    { number: '4.9', label: 'Rating Rata-rata' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Testimoni Klien
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Berikut pengalaman mereka dengan SSR Majapahit.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{stat.number}</span>
              </div>
              <p className="font-semibold text-primary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-2xl smooth-transition majapahit-shadow">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-secondary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Project Info */}
                <div className="mb-6 p-3 bg-accent/50 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    Proyek: {testimonial.project}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-secondary">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto majapahit-shadow">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">4.9/5.0</h3>
              <p className="text-lg text-muted-foreground mb-4">Rating Kepuasan Klien</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Berdasarkan 50+ review dari klien yang telah menggunakan jasa SSR Majapahit. 
                Kami berkomitmen memberikan pelayanan dan hasil terbaik untuk setiap proyek.
              </p>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>100% Klien Merekomendasikan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>95% Rating 5 Bintang</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;