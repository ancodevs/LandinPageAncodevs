import {
  Lightbulb,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";
import SectionTag from "@/components/SectionTag";
import { Reveal } from "@/hooks/use-reveal";

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
    <section id="proceso" className="py-24 bg-ink border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <SectionTag label="proceso" dark className="mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-paper tracking-tight mt-4 mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-paper/60 text-lg">
            Un proceso estructurado y transparente que garantiza el éxito de cada proyecto.
            Te acompañamos en cada paso del camino.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="group relative bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors duration-300 h-full">
                <span className="font-mono text-sm text-primary">
                  {step.number}
                </span>

                <step.icon className="w-5 h-5 text-paper/70 mt-4 mb-4" />

                <h3 className="font-display font-semibold text-paper text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-paper/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
