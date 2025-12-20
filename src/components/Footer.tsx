import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { label: "Desarrollo de Software", href: "#servicios" },
      { label: "Aplicaciones Móviles", href: "#servicios" },
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Ciberseguridad", href: "#servicios" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#nosotros" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Servicio", href: "#" },
    ],
  };

  return (
    <footer className="bg-tech-gradient text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="ANCODEVS SpA - Empresa de Desarrollo de Software Chile" 
                className="h-10 w-auto brightness-0 invert"
                width="120"
                height="40"
              />
              <span className="font-display font-bold text-xl">ANCODEVS SpA</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Empresa chilena especializada en soluciones tecnológicas innovadoras. 
              Transformamos ideas en realidad digital.
            </p>
            <p className="text-primary-foreground/50 text-xs"><br />
              Santiago, Chile
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} ANCODEVS SpA. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Hecho en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
