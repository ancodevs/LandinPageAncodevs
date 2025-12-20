import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Shield, Cloud } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "4s" }} />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Empresa Chilena de Tecnología</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">ANCODEVS</span>
            <span className="text-gradient"> SpA</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Innovación, Desarrollo y Tecnología a tu Medida
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Transformamos ideas en soluciones digitales innovadoras. Especialistas en <strong>desarrollo de software en Chile</strong>, 
            <strong> aplicaciones móviles iOS y Android</strong>, <strong>desarrollo web responsive</strong>, 
            <strong> ciberseguridad</strong> y <strong>soluciones cloud computing</strong>. Empresa de tecnología con sede en Santiago, Chile.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col items-center">
              <Code2 className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-display font-bold text-foreground">Software</span>
              <span className="text-sm text-muted-foreground">A Medida</span>
            </div>
            <div className="flex flex-col items-center">
              <Cloud className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-display font-bold text-foreground">Cloud</span>
              <span className="text-sm text-muted-foreground">& Hosting</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-display font-bold text-foreground">Seguridad</span>
              <span className="text-sm text-muted-foreground">Garantizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
