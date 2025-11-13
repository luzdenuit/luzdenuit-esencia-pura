import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import candleRitual from "@/assets/candle-ritual.jpg";
import candleSpice from "@/assets/candle-spice.jpg";
import candleFresh from "@/assets/candle-fresh.jpg";
import blogRitual from "@/assets/blog-ritual.jpg";
import { Sparkles, Leaf, Heart } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      image: candleRitual,
      name: "Ritual Nocturno",
      fragrance: "Lavanda & Salvia",
      price: 28.00,
    },
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

  const blogPosts = [
    {
      image: blogRitual,
      title: "Crea tu ritual nocturno con velas",
      category: "Ritual",
      date: "15 Marzo 2024",
      excerpt: "Descubre cómo transformar tus noches en momentos de conexión profunda con la luz de una vela.",
      slug: "ritual-nocturno",
    },
    {
      image: candleRitual,
      title: "Guía de fragancias naturales",
      category: "Fragancias",
      date: "8 Marzo 2024",
      excerpt: "Cada aroma cuenta una historia. Aprende a elegir la fragancia perfecta para cada momento.",
      slug: "guia-fragancias",
    },
    {
      image: candleSpice,
      title: "Beneficios del ritual con velas",
      category: "Bienestar",
      date: "1 Marzo 2024",
      excerpt: "La práctica ancestral de encender velas puede transformar tu bienestar emocional y espiritual.",
      slug: "beneficios-ritual",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Products */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Productos destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada vela es una invitación al ritual
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ritual & Purpose Section */}
      <section className="py-20 bg-muted/20 texture-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Tu ritual comienza con una llama
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Cada aroma cuenta una historia. Cada llama enciende un momento de conexión contigo mismo. 
                Nuestras velas están hechas a mano con ingredientes naturales y la intención de crear 
                espacios sagrados en tu día a día.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Sparkles, title: "Hecho a mano", text: "Con calma y propósito" },
                { icon: Leaf, title: "Natural y vegano", text: "Ingredientes puros" },
                { icon: Heart, title: "Energía con intención", text: "Creadas con amor" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Historias y rituales
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubre el arte de vivir con intención
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />

      <Footer />
    </div>
  );
};

export default Index;
