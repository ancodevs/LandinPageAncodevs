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
  };

  return (
    <footer className="bg-ink text-paper border-t border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-paper rounded-md px-3 py-2 mb-6">
              <img
                src="/logo.png"
                alt="ANCODEVS SpA - Empresa de Desarrollo de Software Chile"
                className="h-8 md:h-10 w-auto"
                width="117"
                height="48"
              />
            </div>
            <p className="text-paper/70 text-sm leading-relaxed mb-6">
              Empresa chilena especializada en soluciones tecnológicas innovadoras.
              Transformamos ideas en realidad digital.
            </p>
            <p className="text-paper/50 text-xs">
              Santiago, Chile
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-sm text-paper/50 mb-6">servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-paper/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-sm text-paper/50 mb-6">empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-paper/70 hover:text-primary text-sm transition-colors"
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
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-paper/50">
              © {currentYear} ANCODEVS SpA. Todos los derechos reservados.
            </p>
            <p className="font-mono text-xs text-paper/50">
              Hecho en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
