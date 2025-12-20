import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  TestTube, 
  Rocket, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Planificación",
      description: "Analizamos tus necesidades, definimos objetivos y diseñamos la estrategia óptima para tu proyecto.",
    },
    {
      icon: PenTool,
      number: "02",
      title: "Diseño",
      description: "Creamos prototipos y diseños UX/UI que garantizan una experiencia de usuario excepcional.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Desarrollo",
      description: "Implementamos tu solución utilizando las mejores prácticas y tecnologías más actuales.",
    },
    {
      icon: TestTube,
      number: "04",
      title: "Pruebas",
      description: "Realizamos pruebas exhaustivas para garantizar calidad, seguridad y rendimiento óptimo.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Despliegue",
      description: "Lanzamos tu proyecto con una implementación controlada y migración de datos segura.",
    },
    {
      icon: Headphones,
      number: "06",
      title: "Soporte",
      description: "Brindamos soporte continuo, mantenimiento y mejoras para el éxito a largo plazo.",
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-tech-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nuestro Proceso</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Cómo Trabajamos
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Un proceso estructurado y transparente que garantiza el éxito de cada proyecto. 
            Te acompañamos en cada paso del camino.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 font-display text-5xl font-bold text-primary-foreground/10 group-hover:text-accent/30 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-accent/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
