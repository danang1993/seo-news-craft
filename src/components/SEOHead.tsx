import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEOHead = ({
  title = "NewsPortal Indonesia - Berita Terkini, Terpercaya & Akurat",
  description = "Portal berita terpercaya Indonesia dengan update terkini seputar politik, ekonomi, teknologi, olahraga, dan dunia. Dapatkan informasi akurat dan terpercaya setiap hari.",
  image = "https://newsportal-indonesia.com/og-image.jpg",
  url = "https://newsportal-indonesia.com",
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOHeadProps) => {
  const structuredData = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": [image],
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": "NewsPortal Indonesia"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NewsPortal Indonesia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://newsportal-indonesia.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": section,
    "keywords": tags.join(", ")
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {type === "article" && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime || publishedTime} />
          <meta property="article:section" content={section} />
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};