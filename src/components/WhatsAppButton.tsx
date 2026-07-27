const WHATSAPP_NUMBER = "56951491978";
const WHATSAPP_MESSAGE = "Hola, quiero saber más sobre los servicios de ANCODEVS.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      title="Chatear por WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated transition-transform duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M12.014 2C6.486 2 2 6.486 2 12.014c0 1.803.472 3.549 1.365 5.088L2 22l4.994-1.312a9.945 9.945 0 0 0 5.02 1.34h.005c5.528 0 10.014-4.486 10.014-10.014C22.033 6.486 17.547 2 12.014 2zm.005 18.276a8.243 8.243 0 0 1-4.196-1.147l-.301-.179-3.117.818.833-3.041-.196-.313a8.222 8.222 0 0 1-1.269-4.4c0-4.557 3.706-8.263 8.267-8.263 4.557 0 8.263 3.706 8.263 8.267 0 4.556-3.706 8.258-8.284 8.258z" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
