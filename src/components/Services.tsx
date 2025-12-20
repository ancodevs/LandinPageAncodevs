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

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo de Software",
      description: "Software personalizado diseñado específicamente para las necesidades de tu negocio. Soluciones escalables y mantenibles.",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android. Experiencias móviles fluidas y optimizadas para tus usuarios.",
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.",
    },
    {
      icon: Cloud,
      title: "Hosting & Cloud",
      description: "Soluciones de alojamiento y servicios en la nube. Administración de servidores y arquitecturas escalables.",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protección integral de tus sistemas y datos. Auditorías de seguridad, pentesting y consultoría especializada.",
    },
    {
      icon: Database,
      title: "Procesamiento de Datos",
      description: "Análisis y gestión de datos. Business Intelligence, ETL y soluciones de Big Data para decisiones informadas.",
    },
    {
      icon: Wrench,
      title: "Soporte Técnico",
      description: "Asistencia técnica especializada 24/7. Mantenimiento preventivo y correctivo de sistemas informáticos.",
    },
    {
      icon: MessageSquare,
      title: "Consultoría TI",
      description: "Asesoramiento estratégico en tecnología. Optimización de procesos y transformación digital de tu empresa.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluciones Tecnológicas <span className="text-gradient">Integrales</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un amplio portafolio de servicios informáticos diseñados para 
            impulsar tu negocio hacia el éxito digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
