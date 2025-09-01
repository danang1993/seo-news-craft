import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  timestamp: string;
  variant?: "featured" | "default" | "compact";
  className?: string;
  style?: React.CSSProperties;
}

const categoryColors: Record<string, string> = {
  "Teknologi": "bg-[hsl(var(--news-category-tech))]",
  "Ekonomi": "bg-[hsl(var(--news-category-business))]", 
  "Olahraga": "bg-[hsl(var(--news-category-sports))]",
  "Politik": "bg-[hsl(var(--news-category-politics))]",
  "Dunia": "bg-[hsl(var(--news-category-world))]"
};

export const NewsCard = ({
  title,
  excerpt,
  image,
  category,
  author,
  timestamp,
  variant = "default",
  className,
  style
}: NewsCardProps) => {
  if (variant === "compact") {
    return (
      <article className={cn("group cursor-pointer", className)} style={style}>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Badge 
              className={cn(
                "text-white text-xs mb-2",
                categoryColors[category] || "bg-muted"
              )}
            >
              {category}
            </Badge>
            <h3 className="headline-secondary text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="timestamp">{timestamp}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article 
      className={cn(
        "group cursor-pointer bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-featured)] transition-all duration-300",
        variant === "featured" && "md:flex md:gap-6",
        className
      )}
      style={style}
    >
      <div className={cn(
        "relative overflow-hidden",
        variant === "featured" ? "md:flex-1" : "aspect-[16/9]"
      )}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <Badge 
          className={cn(
            "absolute top-3 left-3 text-white font-medium",
            categoryColors[category] || "bg-muted"
          )}
        >
          {category}
        </Badge>
      </div>
      
      <div className={cn(
        "p-4 md:p-6",
        variant === "featured" && "md:flex-1 md:flex md:flex-col md:justify-center"
      )}>
        <h2 className={cn(
          "headline-primary mb-3 group-hover:text-primary transition-colors line-clamp-2",
          variant === "featured" ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl"
        )}>
          {title}
        </h2>
        
        <p className={cn(
          "excerpt text-muted-foreground mb-4 line-clamp-3",
          variant === "featured" ? "text-base md:text-lg" : "text-sm md:text-base"
        )}>
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="byline">{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="timestamp">{timestamp}</span>
          </div>
        </div>
      </div>
    </article>
  );
};