import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import candleRitual from "@/assets/candle-ritual.jpg";
import candleSpice from "@/assets/candle-spice.jpg";
import candleFresh from "@/assets/candle-fresh.jpg";
import { Filter, Star, Package, CreditCard, Headphones } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedPromotions, setSelectedPromotions] = useState<string[]>([]);
  const [inStock, setInStock] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allProducts = [
    {
      id: "1",
      image: candleRitual,
      name: "Ritual Nocturno",
      fragrance: "Lavanda & Salvia",
      price: 28.00,
      originalPrice: 35.00,
      category: "ritual",
      discount: 20,
      rating: 5,
      stock: 15,
      isNew: true,
      isBestSeller: true,
    },
    {
      id: "2",
      image: candleSpice,
      name: "Tierra Cálida",
      fragrance: "Canela & Naranja",
      price: 28.00,
      originalPrice: 32.00,
      category: "especias",
      discount: 13,
      rating: 5,
      stock: 8,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: "3",
      image: candleFresh,
      name: "Bosque Sereno",
      fragrance: "Eucalipto & Menta",
      price: 26.00,
      originalPrice: 30.00,
      category: "frescos",
      discount: 13,
      rating: 5,
      stock: 12,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: "4",
      image: candleRitual,
      name: "Luna Nueva",
      fragrance: "Jazmín & Vainilla",
      price: 32.00,
      category: "ritual",
      rating: 4,
      stock: 5,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "5",
      image: candleSpice,
      name: "Atardecer Dorado",
      fragrance: "Ámbar & Cedro",
      price: 30.00,
      category: "especias",
      rating: 5,
      stock: 0,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "6",
      image: candleFresh,
      name: "Despertar Verde",
      fragrance: "Hierba Fresca & Limón",
      price: 26.00,
      originalPrice: 32.00,
      category: "frescos",
      discount: 19,
      rating: 5,
      stock: 20,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: "7",
      image: candleRitual,
      name: "Meditación Sagrada",
      fragrance: "Incienso & Pachulí",
      price: 34.00,
      category: "ritual",
      rating: 5,
      stock: 3,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: "8",
      image: candleSpice,
      name: "Hogar Cálido",
      fragrance: "Clavo & Naranja",
      price: 28.00,
      originalPrice: 35.00,
      category: "especias",
      discount: 20,
      rating: 4,
      stock: 10,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "9",
      image: candleFresh,
      name: "Brisa Marina",
      fragrance: "Algas & Sal",
      price: 30.00,
      category: "frescos",
      rating: 5,
      stock: 7,
      isNew: false,
      isBestSeller: false,
    },
  ];

  const categories = [
    { id: "todas", name: "Todas las velas" },
    { id: "ritual", name: "Ritual" },
    { id: "especias", name: "Especias" },
    { id: "frescos", name: "Frescos" },
  ];

  // Filtros
  let filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "todas" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = selectedRating === 0 || product.rating >= selectedRating;
    const matchesStock = !inStock || product.stock > 0;
    const matchesPromotions = selectedPromotions.length === 0 || 
      selectedPromotions.some(promo => {
        if (promo === "new") return product.isNew;
        if (promo === "bestseller") return product.isBestSeller;
        if (promo === "sale") return product.discount;
        return true;
      });
    
    return matchesCategory && matchesPrice && matchesRating && matchesStock && matchesPromotions;
  });

  // Sorting
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const togglePromotion = (promo: string) => {
    setSelectedPromotions(prev =>
      prev.includes(promo) ? prev.filter(p => p !== promo) : [...prev, promo]
    );
  };

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

                {/* Rating Filter */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Valoración
                  </h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating === selectedRating ? 0 : rating)}
                        className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors ${
                          selectedRating === rating
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating ? 'fill-current' : 'fill-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm">& más</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Promotions */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Promociones
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="new"
                        checked={selectedPromotions.includes("new")}
                        onCheckedChange={() => togglePromotion("new")}
                      />
                      <label htmlFor="new" className="text-sm text-foreground cursor-pointer">
                        Novedades
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="bestseller"
                        checked={selectedPromotions.includes("bestseller")}
                        onCheckedChange={() => togglePromotion("bestseller")}
                      />
                      <label htmlFor="bestseller" className="text-sm text-foreground cursor-pointer">
                        Más vendidos
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="sale"
                        checked={selectedPromotions.includes("sale")}
                        onCheckedChange={() => togglePromotion("sale")}
                      />
                      <label htmlFor="sale" className="text-sm text-foreground cursor-pointer">
                        En oferta
                      </label>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Disponibilidad
                  </h3>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="instock"
                      checked={inStock}
                      onCheckedChange={(checked) => setInStock(checked as boolean)}
                    />
                    <label htmlFor="instock" className="text-sm text-foreground cursor-pointer">
                      Solo en stock
                    </label>
                  </div>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("todas");
                    setPriceRange([0, 50]);
                    setSelectedRating(0);
                    setSelectedPromotions([]);
                    setInStock(false);
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-muted-foreground">
                Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} de {filteredProducts.length} productos
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Predeterminado</SelectItem>
                    <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="rating">Mejor Valorados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product, index) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                          className="cursor-pointer"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}

            {paginatedProducts.length === 0 && (
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
                    setSelectedRating(0);
                    setSelectedPromotions([]);
                    setInStock(false);
                    setCurrentPage(1);
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  Envío Gratuito
                </h3>
                <p className="text-sm text-muted-foreground">
                  En pedidos superiores a $50
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  Pago Flexible
                </h3>
                <p className="text-sm text-muted-foreground">
                  Múltiples opciones de pago seguro
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  Soporte 24/7
                </h3>
                <p className="text-sm text-muted-foreground">
                  Estamos aquí para ayudarte siempre
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
