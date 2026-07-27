import { useState, useEffect, useRef } from "react";
import { ExternalLink, Smartphone, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SectionTag from "@/components/SectionTag";
import { Reveal } from "@/hooks/use-reveal";

interface Project {
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  screenshot?: string; // Ruta a una única captura de pantalla
  screenshots?: string[]; // Array de múltiples capturas de pantalla (para carrusel)
  link?: string; // URL del proyecto
}

// Componente de Carrusel para múltiples screenshots
const ScreenshotCarousel = ({ screenshots, title, className = "aspect-[567/1200]" }: { screenshots: string[]; title: string; className?: string }) => {
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
    <div className={`relative ${className} overflow-hidden bg-ink`}>
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
              alt={`${title} - Captura de pantalla ${index + 1} del proyecto desarrollado por ANCODEVS SpA`}
              className="w-full h-full object-cover"
              loading="lazy"
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
                ? 'w-6 bg-paper/90'
                : 'w-1.5 bg-paper/40 hover:bg-paper/60'
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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-paper p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-paper p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
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
      screenshot: "/logoFutmatch.svg",
      link: "https://www.futmatch.cl",
    },
    {
      title: "CanchaApp",
      category: "Software as a Service",
      description: "Software as a Service para gestión de canchas de fútbol.",
      detailedDescription: "CanchaApp es una plataforma SaaS completa para la gestión integral de canchas de fútbol. Permite administrar reservas, horarios, pagos y clientes desde un solo lugar. Incluye sistema de facturación, notificaciones automáticas y reportes detallados para optimizar la operación del negocio.",
      icon: Globe,
      tags: ["React", "Node.js", "PostgreSQL", "Supabase", "OpenAI", "Next.js"],
      screenshot: "/canchapp1.svg",
      link: "https://canchapp.cl",
    },
    {
      title: "AnamnesisPRO+",
      category: "Aplicación de Registro de Pacientes",
      description: "Aplicación web de registro de pacientes con sistema de login y gestión clínica.",
      detailedDescription: "AnamnesisPRO+ es una aplicación web profesional diseñada para el registro y gestión de pacientes en el sector salud. Cuenta con un sistema seguro de autenticación, historial clínico digitalizado y herramientas para la administración eficiente de información médica.",
      icon: Globe,
      tags: ["Django", "MySQL", "Python", "Tailwind", "HTML", "CSS", "JavaScript"],
      screenshots: ["/Anamnesis1.svg", "/Anamnesis2.svg"],
      link: "https://anamnesispro.com",
    },
    {
      title: "Somos Medicina Viva",
      category: "Sistema de Gestión Web",
      description: "Sistema de gestión integral para una pastelería saludable: sitio público, panel administrativo e inventario.",
      detailedDescription: "Sistema completo para gestionar una pastelería saludable, con sitio público, panel administrativo, control de inventario, producción, análisis financiero y métricas. Arquitectura escalable, documentación amplia y listo para producción.",
      icon: Globe,
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Next.js"],
      screenshot: "/Somosmedicinaviva.svg",
      link: "https://www.somosmedicinaviva.cl",
    },
  ];

  return (
    <section id="portafolio" className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <SectionTag label="portafolio" className="mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-4 mb-6">
            Proyectos destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Una muestra de nuestro trabajo. Cada proyecto representa nuestra dedicación
            a la excelencia y la innovación.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="relative bg-card rounded-lg border border-border p-6 lg:p-8 hover:border-primary transition-colors duration-300 max-w-md mx-auto text-left">
                  {/* Información del proyecto (arriba) */}
                  <div className="mb-6">
                    <span className="font-mono text-xs text-primary">
                      {project.category}
                    </span>

                    <h3 className="font-display font-bold text-foreground text-2xl mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags de tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-secondary/50 text-secondary-foreground">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Celular dentro del recuadro */}
                  <div className="relative flex justify-center mb-2">
                    <div style={{ width: '230px', maxWidth: '100%' }}>
                      {/* Marco del celular */}
                      <div className="bg-ink rounded-[2rem] p-1.5 border border-border shadow-elevated group-hover:border-primary transition-colors duration-300">
                        <div className="relative aspect-[567/1200] overflow-hidden rounded-[1.6rem] bg-ink">
                          {/* Notch superior */}
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-20" />

                          {project.screenshots && project.screenshots.length > 0 ? (
                            <ScreenshotCarousel screenshots={project.screenshots} title={project.title} />
                          ) : project.screenshot ? (
                            <img
                              src={project.screenshot}
                              alt={`Captura de pantalla de ${project.title} - ${project.category} desarrollado por ANCODEVS SpA`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-6">
                              <project.icon className="w-16 h-16 text-paper/30" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dialog Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0 gap-0 shadow-elevated">
            {selectedProject && (
              <div className="relative">
                {/* Header */}
                <div className="bg-secondary p-8">
                  <DialogHeader className="text-left">
                    <span className="font-mono text-xs text-primary mb-3">
                      {selectedProject.category}
                    </span>
                    <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>

                {/* Content area */}
                <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-8 bg-card">
                  <DialogDescription className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </DialogDescription>

                  {/* Technologies section */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-muted-foreground mb-4">
                      tecnologías utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1.5 rounded-sm bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with CTA */}
                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="border-t border-border bg-secondary/30 p-6">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full group/btn"
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
        <div className="mt-20 relative">
          <div className="border border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-6 text-lg font-medium">¿Tienes un proyecto en mente?</p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contacto">Conversemos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
