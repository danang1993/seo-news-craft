import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SEOHead } from "@/components/SEOHead";
import { NewsHeader } from "@/components/NewsHeader";
import { NewsFooter } from "@/components/NewsFooter";
import { NewsCard } from "@/components/NewsCard";
import { 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowLeft,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react";
import techNews from "@/assets/tech-news.jpg";
import businessNews from "@/assets/business-news.jpg";
import sportsNews from "@/assets/sports-news.jpg";

// Sample article data - in a real app, this would come from an API
const articles = {
  "1": {
    id: "1",
    title: "Pemerintah Luncurkan Program Digitalisasi UMKM Nasional",
    excerpt: "Program ambisius senilai Rp 50 triliun ini bertujuan untuk mengakselerasi transformasi digital usaha mikro, kecil, dan menengah di seluruh Indonesia dalam 3 tahun ke depan.",
    content: `
      <p>Jakarta - Pemerintah Indonesia secara resmi meluncurkan program digitalisasi UMKM (Usaha Mikro, Kecil, dan Menengah) nasional dengan alokasi anggaran mencapai Rp 50 triliun. Program ini merupakan bagian dari upaya percepatan transformasi digital ekonomi Indonesia yang ditargetkan selesai dalam 3 tahun ke depan.</p>

      <h2>Latar Belakang Program</h2>
      <p>Menteri Koperasi dan UKM, Teten Masduki, menjelaskan bahwa program ini lahir dari kebutuhan mendesak untuk meningkatkan daya saing UMKM Indonesia di era digital. "Pandemi COVID-19 telah membuktikan betapa pentingnya digitalisasi bagi keberlangsungan usaha," ujar Teten dalam konferensi pers di Jakarta, Selasa (15/10/2024).</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "Pandemi COVID-19 telah membuktikan betapa pentingnya digitalisasi bagi keberlangsungan usaha. UMKM yang sudah go digital terbukti lebih resilient menghadapi krisis."
        <cite class="block mt-2 text-sm font-semibold">- Teten Masduki, Menteri Koperasi dan UKM</cite>
      </blockquote>

      <h2>Komponen Program</h2>
      <p>Program digitalisasi UMKM ini terdiri dari beberapa komponen utama:</p>
      
      <h3>1. Infrastruktur Digital</h3>
      <p>Pemerintah akan membangun ekosistem digital yang mendukung UMKM, termasuk platform e-commerce terintegrasi, sistem pembayaran digital, dan infrastruktur logistik yang memadai.</p>

      <h3>2. Pelatihan dan Pendampingan</h3>
      <p>Setiap UMKM yang terdaftar akan mendapatkan pelatihan intensif selama 6 bulan tentang digital marketing, manajemen keuangan digital, dan optimisasi operasional berbasis teknologi.</p>

      <h3>3. Akses Permodalan</h3>
      <p>Program ini juga menyediakan skema kredit lunak dengan bunga 3% per tahun untuk pembelian perangkat digital dan pengembangan platform online UMKM.</p>

      <h2>Target dan Dampak</h2>
      <p>Direktur Jenderal IKM Kemenperin, Gati Wibawaningsih, menyampaikan target ambisius program ini. "Kami menargetkan 10 juta UMKM ter-digitalisasi dalam 3 tahun, dengan kontribusi terhadap PDB mencapai 65%," jelasnya.</p>

      <p>Program ini diharapkan dapat:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Meningkatkan omzet UMKM rata-rata 300%</li>
        <li>Menciptakan 5 juta lapangan kerja baru</li>
        <li>Meningkatkan kontribusi ekspor UMKM menjadi 25%</li>
        <li>Mengurangi gap digital antar daerah</li>
      </ul>

      <h2>Implementasi dan Timeline</h2>
      <p>Pelaksanaan program akan dimulai Januari 2025 dengan fase pilot di 10 provinsi. Setiap daerah akan memiliki Digital Hub UMKM yang berfungsi sebagai pusat koordinasi dan layanan.</p>

      <p>Menko Perekonomian Airlangga Hartarto menegaskan komitmen pemerintah untuk memastikan program berjalan efektif. "Ini bukan sekedar program bantuan, tetapi investasi jangka panjang untuk masa depan ekonomi digital Indonesia," pungkasnya.</p>

      <p><em>Program digitalisasi UMKM ini diharapkan menjadi game changer dalam transformasi ekonomi Indonesia, memposisikan UMKM sebagai backbone ekonomi digital yang kuat dan kompetitif di tingkat regional maupun global.</em></p>
    `,
    image: techNews,
    category: "Teknologi",
    author: "Redaksi NewsPortal",
    authorBio: "Tim redaksi NewsPortal yang berpengalaman dalam liputan ekonomi dan teknologi Indonesia.",
    publishedAt: "2024-10-15T10:00:00Z",
    readingTime: "8 menit",
    views: "12,543",
    likes: "256",
    comments: "45"
  },
  "2": {
    id: "2", 
    title: "Bank Indonesia Naikkan Suku Bunga Acuan Menjadi 6.25%",
    excerpt: "Keputusan ini diambil untuk menjaga stabilitas nilai tukar rupiah dan mengendalikan inflasi yang mulai menunjukkan tren kenaikan.",
    content: `
      <p>Jakarta - Bank Indonesia (BI) memutuskan menaikkan suku bunga acuan (BI Rate) sebesar 25 basis poin menjadi 6.25% dalam Rapat Dewan Gubernur (RDG) bulan ini. Keputusan ini merupakan yang keempat kalinya BI menaikkan suku bunga sejak awal tahun 2024.</p>

      <h2>Alasan Kenaikan Suku Bunga</h2>
      <p>Gubernur BI Perry Warjiyo menjelaskan bahwa keputusan ini diambil sebagai langkah antisipatif untuk menjaga stabilitas makroekonomi Indonesia. "Kenaikan ini diperlukan untuk mempertahankan daya tarik investasi di Indonesia dan menjaga stabilitas rupiah," ujar Perry dalam konferensi pers, Kamis (17/10/2024).</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "Kenaikan suku bunga ini merupakan langkah preventif untuk menjaga momentum pertumbuhan ekonomi yang berkelanjutan dan terkendali."
        <cite class="block mt-2 text-sm font-semibold">- Perry Warjiyo, Gubernur Bank Indonesia</cite>
      </blockquote>

      <p>Beberapa faktor yang mempengaruhi keputusan ini antara lain:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Tekanan inflasi yang mulai meningkat di beberapa sektor</li>
        <li>Penguatan dolar AS di pasar global</li>
        <li>Antisipasi kebijakan bank sentral negara maju</li>
        <li>Menjaga competitiveness return investasi dalam negeri</li>
      </ul>

      <h2>Dampak Terhadap Ekonomi</h2>
      <p>Ekonom senior Institute for Development of Economics and Finance (INDEF), Tauhid Ahmad, berpendapat bahwa kenaikan suku bunga ini akan memberikan dampak mixed terhadap perekonomian. "Di satu sisi akan memperkuat rupiah, namun di sisi lain dapat memperlambat kredit dan investasi," jelasnya.</p>

      <h3>Dampak Positif</h3>
      <ul class="list-disc pl-6 my-4">
        <li>Stabilitas nilai tukar rupiah terjaga</li>
        <li>Meningkatkan daya tarik investasi portofolio</li>
        <li>Mengendalikan ekspektasi inflasi</li>
        <li>Memperkuat kredibilitas kebijakan moneter</li>
      </ul>

      <h3>Tantangan yang Mungkin Timbul</h3>
      <ul class="list-disc pl-6 my-4">
        <li>Biaya pinjaman yang lebih tinggi untuk dunia usaha</li>
        <li>Potensi perlambatan kredit konsumsi</li>
        <li>Tekanan pada sektor properti dan otomotif</li>
        <li>Meningkatnya beban bunga pemerintah</li>
      </ul>

      <p><em>BI memperkirakan keputusan ini akan membantu menjaga momentum pertumbuhan ekonomi Indonesia di kisaran 5.0-5.5% pada tahun 2024, dengan inflasi tetap terkendali di target 2.5±1%.</em></p>
    `,
    image: businessNews,
    category: "Ekonomi",
    author: "Ahmad Rizky",
    authorBio: "Jurnalis ekonomi dengan pengalaman 10 tahun meliput kebijakan moneter dan perbankan.",
    publishedAt: "2024-10-17T14:30:00Z", 
    readingTime: "6 menit",
    views: "8,721",
    likes: "189",
    comments: "32"
  }
};

const relatedArticles = [
  {
    title: "Startup Indonesia Raih Pendanaan Seri A Terbesar",
    excerpt: "Platform fintech lokal berhasil mengumpulkan dana $150 juta dari investor internasional.",
    image: techNews,
    category: "Teknologi",
    author: "Tech Reporter",
    timestamp: "1 hari yang lalu"
  },
  {
    title: "Inflasi Indonesia Turun Menjadi 2.8% di Bulan September",
    excerpt: "Bank Indonesia optimis target inflasi 2.5% dapat tercapai akhir tahun.",
    image: businessNews,
    category: "Ekonomi", 
    author: "Economic Desk",
    timestamp: "2 hari yang lalu"
  },
  {
    title: "Ekspor Teknologi Indonesia Meningkat 25%",
    excerpt: "Produk teknologi dalam negeri semakin diminati pasar Asia Tenggara.",
    image: sportsNews,
    category: "Teknologi",
    author: "Industry Watch",
    timestamp: "3 hari yang lalu"
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <NewsHeader />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-6">Artikel yang Anda cari tidak tersedia.</p>
            <Button asChild>
              <Link to="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </main>
        <NewsFooter />
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <SEOHead 
        title={article.title}
        description={article.excerpt}
        type="article"
        image={article.image}
        publishedTime={article.publishedAt}
      />
      <div className="min-h-screen bg-background">
        <NewsHeader />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Article Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                <Badge className="mb-4 bg-[hsl(var(--news-category-tech))] text-white">
                  {article.category}
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold headline-primary mb-4 leading-tight">
                  {article.title}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-[hsl(var(--section-divider))]">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span className="byline">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="timestamp">
                      {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{article.views} views</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {article.readingTime} baca
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      {article.likes}
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Bagikan:</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="p-2"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="p-2"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="p-2"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="p-2"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-[var(--shadow-featured)]"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <Separator className="my-8" />

              {/* Author Info */}
              <Card className="p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold headline-primary mb-2">{article.author}</h3>
                    <p className="text-muted-foreground">{article.authorBio}</p>
                  </div>
                </div>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Articles */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold headline-primary mb-6 pb-2 border-b border-[hsl(var(--section-divider))]">
                    Artikel Terkait
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((relatedArticle, index) => (
                      <NewsCard
                        key={index}
                        {...relatedArticle}
                        variant="compact"
                      />
                    ))}
                  </div>
                </Card>

                {/* Newsletter Subscription */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="text-lg font-bold headline-primary mb-3">
                    Berlangganan Newsletter
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dapatkan update berita terbaru langsung di email Anda.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email Anda"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button className="w-full">
                      Berlangganan
                    </Button>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </main>

        <NewsFooter />
      </div>
    </>
  );
};

export default ArticleDetail;