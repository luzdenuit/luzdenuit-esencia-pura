import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import candleRitual from "@/assets/candle-ritual.jpg";
import candleSpice from "@/assets/candle-spice.jpg";
import candleFresh from "@/assets/candle-fresh.jpg";
import { Filter } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50]);
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = [
    {
      id: "1",
      image: candleRitual,
      name: "Ritual Nocturno",
      fragrance: "Lavanda & Salvia",
      price: 28.00,
      category: "ritual",
    },
    {
      id: "2",
      image: candleSpice,
      name: "Tierra Cálida",
      fragrance: "Canela & Naranja",
      price: 28.00,
      category: "especias",
    },
    {
      id: "3",
      image: candleFresh,
      name: "Bosque Sereno",
      fragrance: "Eucalipto & Menta",
      price: 28.00,
      category: "frescos",
    },
    {
      id: "4",
      image: candleRitual,
      name: "Luna Nueva",
      fragrance: "Jazmín & Vainilla",
      price: 32.00,
      category: "ritual",
    },
    {
      id: "5",
      image: candleSpice,
      name: "Atardecer Dorado",
      fragrance: "Ámbar & Cedro",
      price: 30.00,
      category: "especias",
    },
    {
      id: "6",
      image: candleFresh,
      name: "Despertar Verde",
      fragrance: "Hierba Fresca & Limón",
      price: 26.00,
      category: "frescos",
    },
    {
      id: "7",
      image: candleRitual,
      name: "Meditación Sagrada",
      fragrance: "Incienso & Pachulí",
      price: 34.00,
      category: "ritual",
    },
    {
      id: "8",
      image: candleSpice,
      name: "Hogar Cálido",
      fragrance: "Clavo & Naranja",
      price: 28.00,
      category: "especias",
    },
    {
      id: "9",
      image: candleFresh,
      name: "Brisa Marina",
      fragrance: "Algas & Sal",
      price: 30.00,
      category: "frescos",
    },
  ];

  const categories = [
    { id: "todas", name: "Todas las velas" },
    { id: "ritual", name: "Ritual" },
    { id: "especias", name: "Especias" },
    { id: "frescos", name: "Frescos" },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "todas" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/20 to-background texture-paper">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Nuestra Colección
            </h1>
            <p className="text-muted-foreground text-lg">
              Cada aroma cuenta una historia. Encuentra la luz que habita en ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <Button
                variant="outline"
                className="lg:hidden w-full mb-4"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              <div className={`space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Categorías
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Precio
                  </h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 50]}
                      max={50}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("todas");
                    setPriceRange([0, 50]);
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                Mostrando {filteredProducts.length} productos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No se encontraron productos con estos filtros.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("todas");
                    setPriceRange([0, 50]);
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
