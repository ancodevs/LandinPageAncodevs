import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import SectionTag from "@/components/SectionTag";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "contacto@ancodevs.cl",
      href: "mailto:contacto@ancodevs.cl",
    },
    {
      icon: Phone,
      label: "teléfono",
      value: "+56 9 5149 1978",
      href: "tel:+56951491978",
    },
    {
      icon: MapPin,
      label: "ubicación",
      value: "Santiago, Chile",
      href: "#",
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <SectionTag label="contacto" className="mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-4 mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuéntanos sobre tu proyecto y hagamos realidad tu visión digital.
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            <p className="text-muted-foreground mb-8">
              Escríbenos o llámanos. Estaremos encantados de discutir cómo podemos
              ayudarte a alcanzar tus objetivos tecnológicos.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <info.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="font-mono text-xs text-muted-foreground">{info.label}</span>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <p className="font-mono text-sm text-muted-foreground border-t border-border pt-6">
              respuesta en &lt; 24 hrs
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 border border-border shadow-soft">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
