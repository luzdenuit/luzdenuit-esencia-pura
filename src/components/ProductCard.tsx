import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  fragrance: string;
  price: number;
  id?: string;
}

const ProductCard = ({ image, name, fragrance, price }: ProductCardProps) => {
  return (
    <Link to="/producto">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group"
      >
        <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardContent className="p-6">
            <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">{fragrance}</p>
            <p className="text-primary font-semibold text-lg">${price.toFixed(2)}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
