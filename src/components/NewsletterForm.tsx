import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Gracias por unirte a nuestra tribu luminosa!");
      setEmail("");
    }
  };

  return (
    <section className="py-20 texture-paper bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Únete a nuestra tribu luminosa
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Recibe inspiración, rituales y ofertas especiales en tu correo
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Suscribirme
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
