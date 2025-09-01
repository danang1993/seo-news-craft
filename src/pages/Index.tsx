import { SEOHead } from "@/components/SEOHead";
import { NewsHeader } from "@/components/NewsHeader";
import { NewsHero } from "@/components/NewsHero";
import { NewsGrid } from "@/components/NewsGrid";
import { NewsFooter } from "@/components/NewsFooter";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <NewsHeader />
        <main>
          <NewsHero />
          <NewsGrid />
        </main>
        <NewsFooter />
      </div>
    </>
  );
};

export default Index;
