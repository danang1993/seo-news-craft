import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  "Kategori": [
    { name: "Politik", href: "/politik" },
    { name: "Ekonomi", href: "/ekonomi" },
    { name: "Teknologi", href: "/teknologi" },
    { name: "Olahraga", href: "/olahraga" },
    { name: "Dunia", href: "/dunia" }
  ],
  "Tentang Kami": [
    { name: "Redaksi", href: "/redaksi" },
    { name: "Karir", href: "/karir" },
    { name: "Kontak", href: "/kontak" },
    { name: "Iklan", href: "/iklan" }
  ],
  "Layanan": [
    { name: "RSS Feed", href: "/rss" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Mobile App", href: "/app" },
    { name: "Widget", href: "/widget" }
  ],
  "Kebijakan": [
    { name: "Privasi", href: "/privasi" },
    { name: "Syarat & Ketentuan", href: "/syarat" },
    { name: "Kode Etik", href: "/kode-etik" },
    { name: "Koreksi", href: "/koreksi" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/newsportal.indonesia" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/newsportal_id" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/newsportal_indonesia" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/newsportalindonesia" }
];

export const NewsFooter = () => {
  return (
    <footer className="bg-card border-t border-[hsl(var(--section-divider))]">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Berlangganan Newsletter</h3>
            <p className="text-primary-foreground/80 mb-6">
              Dapatkan berita terbaru langsung di inbox Anda setiap hari
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold headline-primary">NewsPortal</h3>
                  <p className="text-sm text-muted-foreground">Indonesia</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Portal berita terpercaya Indonesia yang memberikan informasi akurat, 
                terkini, dan berimbang untuk masyarakat Indonesia.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Jl. Sudirman No. 123, Jakarta 10220</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>redaksi@newsportal-indonesia.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold headline-secondary mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[hsl(var(--section-divider))] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 NewsPortal Indonesia. Hak cipta dilindungi undang-undang.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privasi" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </a>
              <a href="/syarat" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="/kode-etik" className="hover:text-primary transition-colors">
                Kode Etik Jurnalistik
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};