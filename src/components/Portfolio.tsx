import { useState, useEffect, useRef } from "react";
import { ExternalLink, Code2, Smartphone, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  logo?: string; // Ruta a la imagen del logo (ej: "/logos/futmatch-logo.png")
  screenshot?: string; // Ruta a una única captura de pantalla
  screenshots?: string[]; // Array de múltiples capturas de pantalla (para carrusel)
  link?: string; // URL del proyecto (ej: "https://futmatch.app")
}

// Componente de Carrusel para múltiples screenshots
const ScreenshotCarousel = ({ screenshots, title, className = "h-[400px]" }: { screenshots: string[]; title: string; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay cada 4 segundos
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [screenshots.length]);

  // Mínima distancia para considerar un swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    // Pausar autoplay mientras el usuario interactúa
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }

    // Reanudar autoplay después del swipe
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reiniciar autoplay al hacer clic en un indicador
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
  };

  return (
    <div className={`relative ${className} overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10`}>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {screenshots.map((screenshot, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <img
              src={screenshot}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Indicadores de paginación */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white/90'
                : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Flechas de navegación (opcionales, solo en hover) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "FutMatch App",
      category: "Aplicación Móvil",
      description: "Aplicación móvil para encontrar partidos de fútbol en tiempo real.",
      detailedDescription: "FutMatch es una aplicación móvil innovadora diseñada para conectar a jugadores de fútbol y facilitar la organización de partidos. Con una interfaz intuitiva y funcionalidades en tiempo real, los usuarios pueden encontrar y unirse a partidos cercanos, gestionar equipos y coordinar encuentros deportivos de manera sencilla.",
      icon: Smartphone,
      tags: ["React Native", "Node.js", "PostgreSQL", "Expo Go"],
      logo: "/logoFutmatch.svg",
      screenshot: "/logoFutmatch.svg", // Usando el logo SVG como imagen principal
      link: "https://www.futmatch.cl",
    },
    {
      title: "CanchaApp",
      category: "Software as a Service",
      description: "Software as a Service para gestión de canchas de fútbol.",
      detailedDescription: "CanchaApp es una plataforma SaaS completa para la gestión integral de canchas de fútbol. Permite administrar reservas, horarios, pagos y clientes desde un solo lugar. Incluye sistema de facturación, notificaciones automáticas y reportes detallados para optimizar la operación del negocio.",
      icon: Globe,
      tags: ["React", "Node.js", "PostgreSQL", "Supabase", "OpenAI", "Next.js"],
      logo: "/logos/canchaapp-logo.png",
      screenshot: "/canchapp1.svg", // Captura de pantalla SVG de CanchaApp
      link: "https://canchaapp.com",
    },
    {
      title: "AnamnesisPRO+",
      category: "Aplicacion web de registro de pacientes",
      description: "Aplicacion web de registro de pacientes con sistema de login y registro de pacientes.",
      detailedDescription: "AnamnesisPRO+ es una aplicación web profesional diseñada para el registro y gestión de pacientes en el sector salud. Cuenta con un sistema seguro de autenticación, historial clínico digitalizado y herramientas para la administración eficiente de información médica.",
      icon: Globe,
      tags: ["Django", "MySQL", "Python", "Tailwind", "HTML", "CSS", "JavaScript"],
      logo: "/logos/anamnesis-logo.png",
      screenshots: ["/Anamnesis1.svg", "/Anamnesis2.svg"], // Carrusel de capturas
      link: "https://anamnesispro.com",
    },
    {
      title: "Somos Medicina Viva",
      category: "Sistema de Gestión Web",
      description: "Sistema completo para gestionar una pastelería saludable, con sitio público, panel administrativo, control de inventario, producción, análisis financiero y métricas.",
      detailedDescription: "Sistema completo para gestionar una pastelería saludable, con sitio público, panel administrativo, control de inventario, producción, análisis financiero y métricas. Arquitectura escalable, documentación amplia y listo para producción.",
      icon: Globe,
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Next.js"],
      logo: "/Somosmedicinaviva.svg",
      screenshot: "/Somosmedicinaviva.svg", // Usando el logo SVG como imagen principal
      link: "https://www.somosmedicinaviva.cl",
    },
  ];

  return (
    <section id="portafolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Portafolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Una muestra de nuestro trabajo. Cada proyecto representa nuestra dedicación 
            a la excelencia y la innovación.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Recuadro contenedor unificado */}
              <div className="relative bg-card rounded-3xl border border-border/50 p-6 lg:p-8 shadow-lg group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300 max-w-md mx-auto">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-accent/5 rounded-3xl transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Información del proyecto (arriba) */}
                  <div className="mb-6">
                    {/* Categoría */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-semibold border border-primary/20">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Título */}
                    <h3 className="font-display font-bold text-foreground text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags de tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-xs font-medium border border-border/50 backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground text-xs font-medium">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Celular dentro del recuadro */}
                  <div className="relative flex justify-center mb-6">
                    <div className="relative" style={{ width: '240px', maxWidth: '100%' }}>
                      {/* Sombra del celular */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 rounded-[3rem] blur-xl transform translate-y-4 opacity-60 group-hover:opacity-80 group-hover:blur-2xl transition-all duration-500" />
                      
                      {/* Marco del celular (borde metálico) */}
                      <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-[3rem] p-2 shadow-2xl border border-slate-600/50 group-hover:border-primary/50 transition-all duration-500">
                        {/* Borde interior brillante */}
                        <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        
                        {/* Pantalla del celular */}
                        <div className="relative bg-black rounded-[2.5rem] overflow-hidden shadow-inner">
                          {/* Notch superior (muesca del iPhone) */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl z-20" />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-b-2xl z-20" />
                          
                          {/* Barra de estado (speaker) */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-white/20 rounded-full z-20" />
                          
                          {/* Contenido de la pantalla */}
                          <div className="relative pt-7 pb-5">
                            {/* Screenshot o contenido */}
                            {project.screenshots && project.screenshots.length > 0 ? (
                              <ScreenshotCarousel screenshots={project.screenshots} title={project.title} />
                            ) : project.screenshot ? (
                              <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                                <img 
                                  src={project.screenshot} 
                                  alt={`${project.title} screenshot`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    const container = target.parentElement;
                                    if (container) {
                                      container.innerHTML = `
                                        <div class="flex flex-col items-center justify-center h-full text-muted-foreground">
                                          ${project.logo ? `<img src="${project.logo}" alt="${project.title}" class="w-16 h-16 mb-4 object-contain" />` : ''}
                                          <p class="text-sm">Captura no disponible</p>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                              </div>
                            ) : (
                              /* Si no hay screenshot, mostrar contenido alternativo */
                              <div className="relative h-[400px] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex flex-col items-center justify-center p-6">
                                {project.logo ? (
                                  <div className="mb-6">
                                    <img 
                                      src={project.logo} 
                                      alt={`${project.title} logo`}
                                      className="w-28 h-28 object-contain drop-shadow-2xl"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div className="mb-6">
                                    <project.icon className="w-20 h-20 text-primary/30 mx-auto" />
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {/* Barra inferior del iPhone (indicador home) */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Dialog Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0 gap-0 border-0 shadow-2xl">
            {selectedProject && (
              <div className="relative">
                {/* Header with gradient background */}
                <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 pb-8">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
                  </div>
                  
                  <div className="relative z-10">
                    <DialogHeader className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-semibold border border-primary/30 backdrop-blur-sm">
                          {selectedProject.category}
                        </span>
                      </div>
                      <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                        {selectedProject.title}
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                </div>

                {/* Content area */}
                <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-8 bg-card">
                  <DialogDescription className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </DialogDescription>
                  
                  {/* Technologies section */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground text-sm font-medium border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with CTA */}
                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="border-t border-border bg-secondary/30 p-6 backdrop-blur-sm">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full group/btn shadow-lg hover:shadow-xl"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Visitar Proyecto</span>
                        <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <div className="text-center mt-20 relative">
          <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/20 backdrop-blur-sm">
            <p className="text-muted-foreground mb-6 text-lg font-medium">¿Tienes un proyecto en mente?</p>
            <Button variant="hero" size="lg" className="shadow-xl hover:shadow-2xl" asChild>
              <a href="#contacto">Conversemos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
