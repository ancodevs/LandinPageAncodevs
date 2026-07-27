import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-32"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left column */}
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-6 animate-fade-up">
              <span className="text-primary">$</span> ancodevs@santiago:~
            </p>

            <h1 className="font-display font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">
                Software a la medida, hecho en Chile
              </span>
              <span aria-hidden="true" className="text-primary animate-blink motion-reduce:animate-none">_</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Diseñamos y construimos aplicaciones web, móviles y sistemas a medida
              para pymes, negocios locales, profesionales y empresas de todo tamaño
              en Chile — con la ciberseguridad y el soporte que tu operación necesita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Iniciar proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>

            <div className="flex flex-wrap font-mono text-sm text-muted-foreground divide-x divide-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span className="pr-4">8 servicios</span>
              <span className="px-4">4 proyectos en producción</span>
              <span className="pl-4">Santiago, Chile</span>
            </div>
          </div>

          {/* Right column — static terminal card */}
          <div className="hidden lg:block">
            <div className="bg-ink rounded-lg border border-white/10 shadow-elevated p-5 font-mono text-sm">
              <div className="flex gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <div className="space-y-2 text-paper/80">
                <p><span className="text-paper/40">$</span> ancodevs init --proyecto "tu-idea"</p>
                <p><span className="text-primary">✓</span> diseño de solución</p>
                <p><span className="text-primary">✓</span> desarrollo + pruebas</p>
                <p><span className="text-primary">→</span> despliegue en producción</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        scroll ↓
      </a>
    </section>
  );
};

export default Hero;
