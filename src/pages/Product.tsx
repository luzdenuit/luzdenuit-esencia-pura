import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import candleRitual from "@/assets/candle-ritual.jpg";
import candleSpice from "@/assets/candle-spice.jpg";
import candleFresh from "@/assets/candle-fresh.jpg";
import { Leaf, Sparkles, Flame } from "lucide-react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Producto agregado al carrito");
  };

  const relatedProducts = [
    {
      id: "2",
      image: candleSpice,
      name: "Tierra Cálida",
      fragrance: "Canela & Naranja",
      price: 28.00,
    },
    {
      id: "3",
      image: candleFresh,
      name: "Bosque Sereno",
      fragrance: "Eucalipto & Menta",
      price: 28.00,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={candleRitual}
                alt="Ritual Nocturno"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Ritual Nocturno
              </h1>
              <p className="text-xl text-primary mb-6">Lavanda & Salvia</p>
              
              <div className="prose prose-lg mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Una experiencia sensorial que te transporta a campos de lavanda bajo la luna llena. 
                  Notas herbales de salvia se entrelazan con el dulce aroma de lavanda silvestre, 
                  creando el ambiente perfecto para tu ritual nocturno de conexión y descanso.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold text-foreground">$28.00</p>
                <p className="text-sm text-muted-foreground">Tamaño: 8 oz (227g) · Duración: 50-60 horas</p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Agregar al carrito
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">100% Natural y Vegano</h3>
                    <p className="text-sm text-muted-foreground">
                      Cera de soja y aceites esenciales puros
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hecho a Mano</h3>
                    <p className="text-sm text-muted-foreground">
                      Cada vela es única y creada con intención
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Mecha de Algodón</h3>
                    <p className="text-sm text-muted-foreground">
                      Sin plomo, para una combustión limpia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ritual Recomendado */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/20 texture-paper rounded-lg p-8 md:p-12 mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ritual recomendado
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Enciende esta vela al atardecer, mientras el día se transforma en noche. 
                Encuentra un espacio tranquilo, respira profundo y permite que el aroma te guíe 
                hacia un estado de calma. Perfecto para la meditación, el journaling o simplemente 
                para honrar el momento presente.
              </p>
            </div>
          </motion.section>

          {/* Related Products */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Puede que también te guste
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
