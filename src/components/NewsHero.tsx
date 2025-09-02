import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import newsHero from "@/assets/news-hero.jpg";

export const NewsHero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${newsHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8 md:pb-16">
        <div className="max-w-4xl">
          <Badge 
            variant="destructive" 
            className="mb-4 bg-accent text-accent-foreground font-semibold"
          >
            BERITA UTAMA
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Pemerintah Luncurkan Program Digitalisasi UMKM Nasional
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
            Program ambisius senilai Rp 50 triliun ini bertujuan untuk mengakselerasi transformasi digital usaha mikro, kecil, dan menengah di seluruh Indonesia dalam 3 tahun ke depan.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="byline">Redaksi NewsPortal</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="timestamp">2 jam yang lalu</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-primary-foreground font-semibold px-8"
            asChild
          >
            <Link to="/artikel/1">Baca Selengkapnya</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};