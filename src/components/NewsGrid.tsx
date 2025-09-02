import { NewsCard } from "./NewsCard";
import techNews from "@/assets/tech-news.jpg";
import businessNews from "@/assets/business-news.jpg";
import sportsNews from "@/assets/sports-news.jpg";

const featuredNews = {
  title: "Implementasi AI dalam Sistem Pendidikan Indonesia Mencapai Milestone Penting",
  excerpt: "Kementerian Pendidikan melaporkan bahwa lebih dari 10,000 sekolah telah mengadopsi teknologi kecerdasan buatan dalam proses pembelajaran, meningkatkan efektivitas pendidikan hingga 40%.",
  image: techNews,
  category: "Teknologi",
  author: "Dr. Sarah Wijaya",
  timestamp: "3 jam yang lalu"
};

const mainNews = [
  {
    title: "Bank Indonesia Naikkan Suku Bunga Acuan Menjadi 6.25%",
    excerpt: "Keputusan ini diambil untuk menjaga stabilitas nilai tukar rupiah dan mengendalikan inflasi yang mulai menunjukkan tren kenaikan.",
    image: businessNews,
    category: "Ekonomi",
    author: "Ahmad Rizky",
    timestamp: "5 jam yang lalu"
  },
  {
    title: "Timnas Indonesia Lolos ke Semifinal Piala AFF 2024",
    excerpt: "Kemenangan dramatis 2-1 atas Thailand memastikan Garuda Muda melangkah ke babak semifinal untuk pertama kalinya dalam 5 tahun terakhir.",
    image: sportsNews,
    category: "Olahraga", 
    author: "Budi Santoso",
    timestamp: "6 jam yang lalu"
  },
  {
    title: "Kebijakan Carbon Tax Mulai Berlaku untuk Industri Besar",
    excerpt: "Pemerintah resmi menerapkan pajak karbon sebesar Rp 30 per kg CO2 untuk mendorong transisi energi berkelanjutan di sektor industri.",
    image: businessNews,
    category: "Ekonomi",
    author: "Linda Permata",
    timestamp: "8 jam yang lalu"
  },
  {
    title: "Startup Indonesia Raih Pendanaan Seri A Terbesar di Asia Tenggara",
    excerpt: "Platform fintech lokal berhasil mengumpulkan dana $150 juta, menjadi valuasi unicorn termuda dalam ekosistem startup Indonesia.",
    image: techNews,
    category: "Teknologi",
    author: "Robert Chen",
    timestamp: "10 jam yang lalu"
  }
];

const sidebarNews = [
  {
    title: "Harga BBM Turun Rp 200 per Liter Mulai Minggu Depan",
    excerpt: "Penurunan harga crude oil dunia berdampak positif pada stabilitas harga bahan bakar di dalam negeri.",
    image: businessNews,
    category: "Ekonomi",
    author: "NewsPortal",
    timestamp: "1 jam yang lalu"
  },
  {
    title: "Gempa 5.2 SR Guncang Jawa Barat, Tidak Ada Korban Jiwa",
    excerpt: "BMKG melaporkan tidak ada potensi tsunami, masyarakat diminta tetap tenang dan waspada.",
    image: techNews,
    category: "Dunia",
    author: "NewsPortal",
    timestamp: "4 jam yang lalu"
  },
  {
    title: "Prestasi Membanggakan Atlet Indonesia di Olimpiade Paris",
    excerpt: "Total 5 medali berhasil diraih, menjadi pencapaian terbaik dalam sejarah kontingen Indonesia.",
    image: sportsNews,
    category: "Olahraga",
    author: "NewsPortal", 
    timestamp: "7 jam yang lalu"
  }
];

export const NewsGrid = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold headline-primary mb-2">
            Berita Terbaru
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <NewsCard
              {...featuredNews}
              variant="featured"
              className="mb-8"
              articleId="1"
            />

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainNews.map((article, index) => (
                <NewsCard
                  key={index}
                  {...article}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  articleId={index === 0 ? "2" : "1"}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold headline-primary mb-6 pb-2 border-b border-[hsl(var(--section-divider))]">
                Berita Populer
              </h3>
              <div className="space-y-6">
                {sidebarNews.map((article, index) => (
                  <NewsCard
                    key={index}
                    {...article}
                    variant="compact"
                    className="slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};