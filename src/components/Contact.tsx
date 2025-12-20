import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Instagram,
  Github
} from "lucide-react";

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
      label: "Email",
      value: "ancodevs.spa@gmail.com",
      href: "mailto:ancodevs.spa@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 37583096",
      href: "tel:+56937583096",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santiago, Chile",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            ¿Listo para <span className="text-gradient">Comenzar</span>?
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
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary group transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
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
