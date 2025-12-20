import { Target, Eye, Heart, Lightbulb } from "lucide-react";

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
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              La Historia detrás de <span className="text-gradient">ANCODEVS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              <strong className="text-foreground">ANCODEVS</strong> nace de la unión de dos apellidos: 
              <strong className="text-primary"> Anacona</strong> y <strong className="text-primary">Correa</strong> ("Anco"), 
              combinados con <strong className="text-primary">Devs</strong> (developers). 
              Somos una empresa chilena comprometida con la transformación digital.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Nos especializamos en crear <strong>soluciones tecnológicas innovadoras</strong> que impulsan 
              el crecimiento de nuestros clientes, desde startups hasta grandes empresas. Somos una 
              <strong> empresa de desarrollo de software en Santiago, Chile</strong>, comprometida con la 
              <strong> transformación digital</strong> y la excelencia en cada proyecto.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">Misión</h3>
                <p className="text-muted-foreground text-sm">
                  Desarrollar soluciones tecnológicas de alta calidad que transformen la manera 
                  en que las empresas operan y conectan con sus clientes.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover-lift">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
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
            <div className="bg-tech-gradient rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-8">
                Nuestros Valores
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                        <value.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-primary-foreground mb-1">
                          {value.title}
                        </h4>
                        <p className="text-primary-foreground/70 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
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
