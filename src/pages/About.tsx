import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/about-workshop.jpg";
import { Sparkles, Leaf, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative h-[60vh] mb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${workshopImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl"
            >
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
                Hechas con alma y propósito
              </h1>
              <p className="text-xl text-muted-foreground">
                Cada vela es una invitación a la calma
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Historia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
              Nuestra historia
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Luz de Nuit nació de la búsqueda de momentos de conexión en medio del caos del día a día. 
                Inspiradas por la calma de la noche y la belleza de lo hecho a mano, comenzamos a crear 
                velas que fueran más que objetos decorativos: rituales en sí mismas.
              </p>
              <p className="leading-relaxed mb-6">
                Cada vela es elaborada artesanalmente en nuestro pequeño taller, usando solo ingredientes 
                naturales y veganos. Trabajamos con cera de soja, aceites esenciales puros y mechas de 
                algodón, honrando la tierra y creando productos que son tan hermosos como conscientes.
              </p>
              <p className="leading-relaxed">
                Creemos que encender una vela es un acto de cuidado personal, una pausa intencional en 
                el fluir del tiempo. Por eso, cada fragancia está pensada para acompañarte en diferentes 
                momentos: desde el despertar hasta el ritual nocturno.
              </p>
            </div>
          </motion.section>

          {/* Filosofía */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
              Nuestra filosofía
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Hecho a mano",
                  description: "Cada vela es creada con calma y atención, honrando el tiempo y el proceso artesanal.",
                },
                {
                  icon: Leaf,
                  title: "Natural y vegano",
                  description: "Usamos solo ingredientes de origen vegetal, sin parabenos ni químicos sintéticos.",
                },
                {
                  icon: Heart,
                  title: "Energía con intención",
                  description: "Creamos cada vela con la intención de que acompañe tus momentos más sagrados.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-muted/20 texture-paper rounded-lg p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16 bg-muted/20 texture-paper rounded-lg"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Encuentra la luz que habita en ti
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Explora nuestra colección de velas artesanales y comienza tu propio ritual
            </p>
            <Link to="/producto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Descubre nuestras velas
              </Button>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
