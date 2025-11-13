import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import blogRitual from "@/assets/blog-ritual.jpg";

const BlogPost = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-primary text-primary-foreground">Ritual</Badge>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Crea tu ritual nocturno con velas
            </h1>
            <p className="text-muted-foreground">15 Marzo 2024</p>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden mb-12"
          >
            <img
              src={blogRitual}
              alt="Ritual nocturno con velas"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              En un mundo que nunca deja de moverse, crear momentos de pausa intencional se vuelve 
              un acto revolucionario. Un ritual nocturno con velas es más que una rutina: es un 
              compromiso contigo mismo, una forma de honrar el final del día y preparar el espacio 
              interior para el descanso.
            </p>

            <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
              Por qué necesitas un ritual nocturno
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los rituales nos anclan en el presente. Cuando enciendes una vela al caer la noche, 
              estás creando un marcador físico y sensorial que le indica a tu mente y cuerpo: 
              "Es momento de soltar el día y entrar en modo de calma".
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Este simple gesto activa el sistema nervioso parasimpático, responsable del estado 
              de descanso y digestión. La luz suave de la llama, el aroma envolvente, el silencio... 
              todo conspira para crear un espacio sagrado, solo para ti.
            </p>

            <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
              Cómo diseñar tu ritual
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              No existe una fórmula única. Tu ritual debe ser tan único como tú. Sin embargo, 
              aquí te compartimos elementos clave que puedes adaptar:
            </p>

            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li>
                <strong className="text-foreground">Elige tu momento:</strong> Puede ser al terminar 
                de trabajar, después de cenar, o justo antes de dormir. Lo importante es la consistencia.
              </li>
              <li>
                <strong className="text-foreground">Prepara el espacio:</strong> Apaga luces brillantes, 
                aleja dispositivos electrónicos, ordena tu entorno.
              </li>
              <li>
                <strong className="text-foreground">Enciende tu vela:</strong> Hazlo con intención. 
                Respira profundo mientras lo haces.
              </li>
              <li>
                <strong className="text-foreground">Elige una práctica:</strong> Puede ser meditación, 
                journaling, lectura, o simplemente sentarte en silencio observando la llama.
              </li>
              <li>
                <strong className="text-foreground">Cierra con gratitud:</strong> Antes de apagar la vela, 
                agradece por algo del día que pasó.
              </li>
            </ul>

            <h2 className="font-display text-3xl text-foreground mt-12 mb-6">
              La magia está en la repetición
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Un ritual se vuelve poderoso con la práctica constante. No se trata de perfección, 
              sino de presencia. Algunos días será profundo, otros será simplemente estar ahí. 
              Ambos son válidos.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Con el tiempo, tu cuerpo y mente aprenderán: cuando se enciende la vela, es momento 
              de volver a casa, a ti mismo. Y ese es el verdadero regalo de un ritual nocturno.
            </p>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h3 className="font-display text-2xl text-foreground mb-6">Sigue leyendo</h3>
            <div className="space-y-4">
              <Link to="/blog/guia-fragancias" className="block group">
                <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                  Guía completa de fragancias naturales →
                </p>
              </Link>
              <Link to="/blog/beneficios-ritual" className="block group">
                <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                  Los beneficios del ritual con velas →
                </p>
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
