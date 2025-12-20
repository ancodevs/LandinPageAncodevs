import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO",
      company: "TechStart Chile",
      content: "ANCODEVS transformó nuestra visión en una plataforma funcional y elegante. Su profesionalismo y dedicación superaron todas nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Carlos Muñoz",
      role: "Director de Operaciones",
      company: "Logística Sur",
      content: "El sistema ERP que desarrollaron optimizó nuestros procesos al 100%. Excelente comunicación y soporte durante todo el proyecto.",
      rating: 5,
    },
    {
      name: "Ana Soto",
      role: "Fundadora",
      company: "EcoMarket App",
      content: "La app móvil que crearon para nosotros ha sido clave en nuestro crecimiento. Recomiendo totalmente a ANCODEVS.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            La satisfacción de nuestros clientes es nuestro mayor logro. 
            Conoce las experiencias de quienes han confiado en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 border border-border hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
