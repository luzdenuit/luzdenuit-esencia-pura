import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      toast.success("Sesión iniciada correctamente");
    } else {
      toast.success("Cuenta creada exitosamente");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <Card className="texture-paper shadow-xl">
              <CardHeader className="text-center pb-8">
                <Link to="/" className="inline-block mb-4">
                  <h1 className="font-display text-3xl text-primary">Luz de Nuit</h1>
                </Link>
                <CardTitle className="font-display text-2xl text-foreground">
                  {isLogin ? "Iniciar sesión" : "Crear cuenta"}
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  {isLogin
                    ? "Bienvenido de vuelta a tu espacio de luz"
                    : "Únete a nuestra comunidad luminosa"}
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        className="mt-2"
                        placeholder="Tu nombre"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="••••••••"
                    />
                  </div>

                  {isLogin && (
                    <div className="text-right">
                      <button
                        type="button"
                        className="text-sm text-primary hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isLogin ? "Iniciar sesión" : "Crear cuenta"}
                  </Button>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                      <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-primary hover:underline font-medium"
                      >
                        {isLogin ? "Crear una" : "Inicia sesión"}
                      </button>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                ← Volver al inicio
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
