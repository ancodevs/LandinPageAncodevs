import {
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  Database,
  Wrench,
  MessageSquare
} from "lucide-react";
import SectionTag from "@/components/SectionTag";
import { Reveal } from "@/hooks/use-reveal";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo de Software",
      description: "Sistemas escalables diseñados para las necesidades de tu negocio.",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android.",
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios y aplicaciones web modernas, rápidas y optimizadas.",
    },
    {
      icon: Cloud,
      title: "Hosting & Cloud",
      description: "Alojamiento, administración de servidores y arquitecturas en la nube.",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Auditorías, pentesting y protección integral de sistemas y datos.",
    },
    {
      icon: Database,
      title: "Procesamiento de Datos",
      description: "Business Intelligence, ETL y Big Data para decisiones informadas.",
    },
    {
      icon: Wrench,
      title: "Soporte Técnico",
      description: "Asistencia especializada 24/7 y mantenimiento de sistemas.",
    },
    {
      icon: MessageSquare,
      title: "Consultoría TI",
      description: "Asesoría estratégica para la transformación digital de tu empresa.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-secondary/30 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <SectionTag label="servicios" className="mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-4 mb-6">
            Soluciones tecnológicas integrales
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un portafolio completo de servicios de desarrollo de software en Chile,
            diseñado para impulsar la transformación digital de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 50}>
              <div className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors h-full">
                <span className="absolute top-5 right-5 font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <service.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors mb-5" />
                <h3 className="font-display font-semibold text-foreground text-base lg:text-lg mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
