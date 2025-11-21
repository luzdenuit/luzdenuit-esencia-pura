import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  fragrance: string;
  price: number;
  id?: string;
  discount?: number;
  rating?: number;
  originalPrice?: number;
  stock?: number;
}

const ProductCard = ({ 
  image, 
  name, 
  fragrance, 
  price, 
  id,
  discount,
  rating = 5,
  originalPrice,
  stock = 10
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300">
        <Link to={`/producto/${id}`}>
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Discount Badge */}
            {discount && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold z-10">
                {discount}% OFF
              </div>
            )}

            {/* Stock Badge */}
            {stock === 0 && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                <span className="text-muted-foreground font-semibold">Agotado</span>
              </div>
            )}

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
            >
              <Heart 
                className={`h-5 w-5 transition-colors ${
                  isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`} 
              />
            </Button>

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        <CardContent className="p-6">
          <Link to={`/producto/${id}`}>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">{rating}.0</span>
            </div>

            <p className="text-xs text-muted-foreground mb-1">{fragrance}</p>
            
            <h3 className="font-display text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>

            <div className="flex items-center gap-2">
              <p className="text-primary font-bold text-xl">${price.toFixed(2)}</p>
              {originalPrice && (
                <p className="text-muted-foreground text-sm line-through">${originalPrice.toFixed(2)}</p>
              )}
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
