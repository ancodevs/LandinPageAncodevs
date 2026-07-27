import { useState, useRef, useEffect } from 'react';
import { X, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface Message {
  text: string;
  isBot: boolean;
  options?: string[];
}

type ChatStep = 'welcome' | 'service-selected' | 'project-details' | 'email' | 'name' | 'completed';

// Insignia de "terminal" que reemplaza el avatar fotográfico: reutiliza el
// mismo lenguaje visual de la tarjeta de terminal del Hero (ink + señal azul)
// en vez de un rostro genérico de IA.
const BotBadge = ({ className = '', iconClassName = '' }: { className?: string; iconClassName?: string }) => (
  <div className={`bg-ink rounded-md flex items-center justify-center shrink-0 ${className}`}>
    <Terminal className={`text-primary ${iconClassName}`} />
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
  const [userInput, setUserInput] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    projectDetails: '',
    email: '',
    name: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const services = [
    'Desarrollo de Software',
    'Aplicaciones Móviles',
    'Desarrollo Web',
    'Hosting & Cloud',
    'Ciberseguridad',
    'Procesamiento de Datos',
    'Soporte Técnico',
    'Consultoría TI'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && currentStep === 'welcome' && messages.length === 0) {
      setTimeout(() => {
        addBotMessage('¡Hola! Soy el asistente virtual de Ancodevs 👋', true);
      }, 500);
      setTimeout(() => {
        addBotMessage('¿En qué podemos ayudarte?', false, services);
      }, 1500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, typing: boolean = false, options?: string[]) => {
    if (typing) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text, isBot: true, options }]);
      }, 300);
    } else {
      setMessages(prev => [...prev, { text, isBot: true, options }]);
    }
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { text, isBot: false }]);
  };

  const handleServiceSelection = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    addUserMessage(service);
    setCurrentStep('service-selected');
    
    setTimeout(() => {
      addBotMessage(`Excelente elección. ${service} es uno de nuestros servicios más solicitados. 💼`);
    }, 500);
    
    setTimeout(() => {
      addBotMessage('Cuéntame sobre tu proyecto. ¿Qué tienes en mente?');
      setCurrentStep('project-details');
    }, 1500);
  };

  const handleProjectDetails = () => {
    if (!userInput.trim()) {
      toast.error('Por favor, cuéntanos sobre tu proyecto');
      return;
    }

    setFormData(prev => ({ ...prev, projectDetails: userInput }));
    addUserMessage(userInput);
    setUserInput('');
    setCurrentStep('email');

    setTimeout(() => {
      addBotMessage('¡Interesante proyecto! 📝');
    }, 500);

    setTimeout(() => {
      addBotMessage('Para poder contactarte, ¿cuál es tu correo electrónico?');
    }, 1500);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmail = () => {
    if (!userInput.trim()) {
      toast.error('Por favor, ingresa tu correo electrónico');
      return;
    }

    if (!validateEmail(userInput)) {
      toast.error('Por favor, ingresa un correo electrónico válido');
      return;
    }

    setFormData(prev => ({ ...prev, email: userInput }));
    addUserMessage(userInput);
    setUserInput('');
    setCurrentStep('name');

    setTimeout(() => {
      addBotMessage('Perfecto. 📧');
    }, 500);

    setTimeout(() => {
      addBotMessage('Por último, ingresa tu nombre o razón social:');
    }, 1500);
  };

  const handleName = async () => {
    if (!userInput.trim()) {
      toast.error('Por favor, ingresa tu nombre o razón social');
      return;
    }

    const finalName = userInput;
    setFormData(prev => ({ ...prev, name: finalName }));
    addUserMessage(finalName);
    setUserInput('');
    setCurrentStep('completed');

    setTimeout(() => {
      addBotMessage('¡Gracias por tu información! 🎉');
    }, 500);

    setTimeout(() => {
      addBotMessage('Estoy enviando tus datos a nuestro equipo...');
      sendEmail({ ...formData, name: finalName });
    }, 1500);
  };

  const sendEmail = async (data: typeof formData) => {
    try {
      // Inicializa EmailJS con tu Public Key
      emailjs.init('xZ-YJhbw4o5z2k1Kq'); // Reemplazar con tu clave pública de EmailJS

      const templateParams = {
        to_email: 'contacto@ancodevs.cl',
        from_name: data.name,
        from_email: data.email,
        service: data.service,
        project_details: data.projectDetails,
        message: `
Nuevo contacto desde el chatbot:

Servicio solicitado: ${data.service}
Detalles del proyecto: ${data.projectDetails}
Correo: ${data.email}
Nombre/Razón Social: ${data.name}
        `
      };

      // Reemplaza con tu Service ID y Template ID de EmailJS
      await emailjs.send(
        'service_vgpay8g',
        'template_yem6jom',
        templateParams
      );

      setTimeout(() => {
        addBotMessage('¡Listo! Tu información ha sido enviada exitosamente. 📨');
      }, 1000);

      setTimeout(() => {
        addBotMessage('Nuestro equipo se pondrá en contacto contigo pronto. ¡Que tengas un excelente día! 😊');
      }, 2000);

      toast.success('Mensaje enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el email:', error);
      
      setTimeout(() => {
        addBotMessage('Lo siento, hubo un error al enviar tu información. Por favor, intenta contactarnos directamente a contacto@ancodevs.cl 😔');
      }, 1000);
      
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (currentStep === 'project-details') {
      handleProjectDetails();
    } else if (currentStep === 'email') {
      handleEmail();
    } else if (currentStep === 'name') {
      handleName();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('welcome');
    setFormData({
      service: '',
      projectDetails: '',
      email: '',
      name: ''
    });
    setUserInput('');
    
    setTimeout(() => {
      addBotMessage('¡Hola! Soy el asistente virtual de Ancodevs 👋', true);
    }, 500);
    setTimeout(() => {
      addBotMessage('¿En qué podemos ayudarte?', false, services);
    }, 1500);
  };

  return (
    <>
      {/* Botón flotante con mensaje */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Mensaje flotante */}
          <div className="hidden md:flex bg-card rounded-lg shadow-soft px-5 py-3 items-center gap-2 border border-border">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-foreground">Asistente Virtual</p>
              <p className="text-xs text-primary">¿En qué puedo ayudarte hoy? 💬</p>
            </div>
          </div>

          {/* Botón */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir chat con el asistente virtual"
            className="relative h-14 w-14 transition-transform duration-300 hover:scale-110"
          >
            <BotBadge className="w-full h-full rounded-lg border border-white/10 shadow-elevated" iconClassName="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background" />
          </button>
        </div>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card rounded-lg shadow-elevated flex flex-col z-50 overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-ink p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <BotBadge className="w-10 h-10 border border-white/20" iconClassName="w-5 h-5" />
                <div>
                  <h3 className="text-paper font-mono font-semibold">Asistente Virtual</h3>
                  <p className="text-paper/70 text-xs">Ancodevs · en línea</p>
                </div>
             </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-paper hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className="flex items-start gap-2 max-w-[80%]">
                   {message.isBot && (
                     <BotBadge className="w-8 h-8 border border-white/10" iconClassName="w-4 h-4" />
                   )}
                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.isBot
                          ? 'bg-card text-foreground border border-border'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>

                    {/* Opciones de servicios */}
                    {message.options && message.options.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, optIndex) => (
                          <Button
                            key={optIndex}
                            onClick={() => handleServiceSelection(option)}
                            variant="outline"
                            className="w-full text-left justify-start hover:border-primary hover:text-primary transition-all"
                            size="sm"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          {currentStep !== 'welcome' && currentStep !== 'service-selected' && currentStep !== 'completed' && (
            <div className="p-4 bg-card border-t border-border">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu respuesta..."
                  className="flex-1"
                  type={currentStep === 'email' ? 'email' : 'text'}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Botón para reiniciar */}
          {currentStep === 'completed' && (
            <div className="p-4 bg-card border-t border-border">
              <Button
                onClick={resetChat}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Iniciar nueva consulta
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;

