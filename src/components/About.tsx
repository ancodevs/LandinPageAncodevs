import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import SectionTag from "@/components/SectionTag";
import { Reveal } from "@/hooks/use-reveal";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Buscamos constantemente nuevas soluciones y tecnologías para ofrecer lo mejor.",
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "Nos dedicamos al 100% a cada proyecto, asegurando resultados de calidad.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y eso se refleja en cada línea de código.",
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Comunicación clara y honesta en cada etapa del proyecto.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionTag label="nosotros" className="mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-4 mb-6">
              En ANCODEVS
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Somos una empresa de desarrollo de software en Santiago, Chile,
              enfocada en crear soluciones tecnológicas que impulsan el crecimiento
              de nuestros clientes: pymes, negocios locales, profesionales
              independientes, startups y grandes empresas.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <span className="font-mono text-xs text-muted-foreground">misión</span>
                <Target className="w-5 h-5 text-foreground mt-3 mb-3" />
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">Misión</h3>
                <p className="text-muted-foreground text-sm">
                  Desarrollar soluciones tecnológicas de alta calidad que transformen la manera
                  en que los negocios —de cualquier tamaño— operan y conectan con sus clientes.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <span className="font-mono text-xs text-muted-foreground">visión</span>
                <Eye className="w-5 h-5 text-foreground mt-3 mb-3" />
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">Visión</h3>
                <p className="text-muted-foreground text-sm">
                  Ser reconocidos como líderes en innovación tecnológica en Chile y Latinoamérica,
                  impulsando la transformación digital de la región.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <div className="bg-ink border border-white/10 rounded-lg p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold text-paper mb-8">
                Nuestros Valores
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Reveal key={value.title} delay={index * 100}>
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm text-primary shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-paper mb-1">
                          {value.title}
                        </h4>
                        <p className="text-paper/60 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
