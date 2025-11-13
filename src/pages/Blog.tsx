import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import blogRitual from "@/assets/blog-ritual.jpg";
import candleRitual from "@/assets/candle-ritual.jpg";
import candleSpice from "@/assets/candle-spice.jpg";
import candleFresh from "@/assets/candle-fresh.jpg";

const Blog = () => {
  const blogPosts = [
    {
      image: blogRitual,
      title: "Crea tu ritual nocturno con velas",
      category: "Ritual",
      date: "15 Marzo 2024",
      excerpt: "Descubre cómo transformar tus noches en momentos de conexión profunda con la luz de una vela. Te compartimos una guía paso a paso para diseñar tu propio ritual sagrado.",
      slug: "ritual-nocturno",
    },
    {
      image: candleRitual,
      title: "Guía completa de fragancias naturales",
      category: "Fragancias",
      date: "8 Marzo 2024",
      excerpt: "Cada aroma cuenta una historia y despierta emociones únicas. Aprende a elegir la fragancia perfecta según tu estado de ánimo y momento del día.",
      slug: "guia-fragancias",
    },
    {
      image: candleSpice,
      title: "Los beneficios del ritual con velas",
      category: "Bienestar",
      date: "1 Marzo 2024",
      excerpt: "La práctica ancestral de encender velas puede transformar tu bienestar emocional y espiritual. Exploramos la ciencia y la magia detrás de este ritual milenario.",
      slug: "beneficios-ritual",
    },
    {
      image: candleFresh,
      title: "Cuidado y limpieza de tus velas",
      category: "Ritual",
      date: "24 Febrero 2024",
      excerpt: "Aprende a cuidar tus velas para que duren más tiempo y mantengan su aroma intacto. Consejos prácticos para maximizar tu experiencia.",
      slug: "cuidado-velas",
    },
    {
      image: blogRitual,
      title: "Aromaterapia: el poder de los aceites esenciales",
      category: "Fragancias",
      date: "17 Febrero 2024",
      excerpt: "Los aceites esenciales naturales tienen propiedades terapéuticas reconocidas. Descubre cómo cada aroma puede beneficiar tu cuerpo y mente.",
      slug: "aromaterapia",
    },
    {
      image: candleRitual,
      title: "Meditación con velas: guía para principiantes",
      category: "Bienestar",
      date: "10 Febrero 2024",
      excerpt: "La meditación con velas es una práctica accesible y poderosa. Te guiamos en tus primeros pasos hacia una práctica constante y transformadora.",
      slug: "meditacion-velas",
    },
  ];

  const categories = ["Todos", "Ritual", "Fragancias", "Bienestar"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Historias y rituales
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre el arte de vivir con intención a través de nuestras historias
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterForm />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
