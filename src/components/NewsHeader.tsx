import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Politik", href: "/politik" },
  { name: "Ekonomi", href: "/ekonomi" },
  { name: "Teknologi", href: "/teknologi" },
  { name: "Olahraga", href: "/olahraga" },
  { name: "Dunia", href: "/dunia" }
];

export const NewsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(var(--header-bg))] border-b border-[hsl(var(--section-divider))] backdrop-blur-sm">
      {/* Breaking News Ticker */}
      <div className="bg-accent text-accent-foreground py-1 px-4 text-sm font-medium overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          🔴 BREAKING: Update terkini mengenai perkembangan ekonomi digital Indonesia - Pemerintah luncurkan program digitalisasi UMKM
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold headline-primary">NewsPortal</h1>
                <p className="text-xs text-muted-foreground -mt-1">Indonesia</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 p-4 bg-card border border-border rounded-lg shadow-lg">
                  <Input
                    type="search"
                    placeholder="Cari berita..."
                    className="w-full"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--section-divider))]">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};