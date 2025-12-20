# 🎨 Guía de Personalización del Chatbot AIA

## 🖼️ Reemplazar el Avatar Femenino

### Opción 1: Usar una imagen local

1. Guarda tu imagen en `public/avatar-aia.png` (puede ser .png, .jpg, .svg, etc.)

2. En `src/components/Chatbot.tsx`, busca las líneas con el emoji `👩‍💼` (hay 2 lugares):

**Lugar 1 - Avatar en el header (línea ~244):**
```tsx
{/* Antes */}
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
  <span className="text-2xl">👩‍💼</span>
</div>

{/* Después */}
<div className="w-10 h-10 rounded-full bg-white overflow-hidden">
  <img src="/avatar-aia.png" alt="AIA" className="w-full h-full object-cover" />
</div>
```

**Lugar 2 - Avatar en los mensajes (línea ~267):**
```tsx
{/* Antes */}
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
  <span className="text-sm">👩‍💼</span>
</div>

{/* Después */}
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden flex-shrink-0">
  <img src="/avatar-aia.png" alt="AIA" className="w-full h-full object-cover" />
</div>
```

### Opción 2: Usar un avatar desde una URL

```tsx
<img src="https://tu-dominio.com/avatar.png" alt="AIA" className="w-full h-full object-cover" />
```

### Opción 3: Usar un avatar generado por IA

Puedes usar servicios gratuitos como:
- [DiceBear](https://www.dicebear.com/) - Avatares generados proceduralmente
- [UI Avatars](https://ui-avatars.com/) - Avatares basados en iniciales
- [Personas by DraftBit](https://personas.draftbit.com/) - Avatares de IA

Ejemplo con DiceBear:
```tsx
<img 
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=AIA&style=transparent&hair=long&hairColor=brunette" 
  alt="AIA" 
  className="w-full h-full object-cover" 
/>
```

## 🎭 Cambiar el Nombre del Bot

Busca y reemplaza "AIA" en `Chatbot.tsx`:

1. **Línea ~246** - Nombre en el header:
```tsx
<h3 className="text-white font-semibold">AIA</h3>
```

2. **Línea ~247** - Descripción:
```tsx
<p className="text-white/80 text-xs">Asistente Inteligente Ancodevs</p>
```

3. **Línea ~99** - Mensaje de bienvenida:
```tsx
addBotMessage('¡Hola! Soy AIA, tu asistente virtual de Ancodevs 👋', true);
```

Sugerencias de nombres relacionados con IA:
- **AIA** - Asistente Inteligente Ancodevs
- **ARIA** - Asistente Robótica Inteligente Ancodevs
- **SOFIA** - Sistema Organizado de Facilitación IA
- **IRIS** - Interfaz Robotizada Inteligente de Servicios
- **LUNA** - Línea Unificada de Negocios Automatizados

## 🎨 Personalizar Colores

### Cambiar el color principal del chatbot

En `Chatbot.tsx`, reemplaza `from-blue-600 to-purple-600` por:

**Opciones de colores:**
```tsx
// Verde tecnológico
from-green-600 to-teal-600

// Naranja energético
from-orange-600 to-red-600

// Azul corporativo
from-blue-600 to-cyan-600

// Púrpura elegante
from-purple-600 to-pink-600

// Índigo profesional
from-indigo-600 to-blue-600
```

### Lugares donde cambiar colores:

1. **Botón flotante** (línea ~223)
2. **Header del chat** (línea ~238)
3. **Avatar de mensajes** (línea ~267)
4. **Mensajes del usuario** (línea ~275)
5. **Botón de enviar** (línea ~306)
6. **Botón de reiniciar** (línea ~321)

## 📝 Personalizar Mensajes

### Mensaje de bienvenida

**Línea ~99:**
```tsx
addBotMessage('¡Hola! Soy AIA, tu asistente virtual de Ancodevs 👋', true);
```

Ejemplos alternativos:
```tsx
addBotMessage('¡Bienvenido/a! Soy AIA, estoy aquí para ayudarte 🌟', true);
addBotMessage('¡Hola! 👋 Soy tu asistente virtual. ¿En qué te puedo ayudar?', true);
addBotMessage('¡Buenos días! Soy AIA, tu experta en soluciones digitales 💼', true);
```

### Pregunta inicial

**Línea ~101:**
```tsx
addBotMessage('¿En qué podemos ayudarte?', false, services);
```

Ejemplos alternativos:
```tsx
addBotMessage('¿Qué servicio te interesa?', false, services);
addBotMessage('Selecciona el área en la que necesitas ayuda:', false, services);
addBotMessage('¿Cuál de estos servicios te gustaría explorar?', false, services);
```

### Después de seleccionar servicio

**Línea ~114:**
```tsx
addBotMessage(`Excelente elección. ${service} es uno de nuestros servicios más solicitados. 💼`);
```

### Pregunta sobre el proyecto

**Línea ~118:**
```tsx
addBotMessage('Cuéntame sobre tu proyecto. ¿Qué tienes en mente?');
```

Ejemplos alternativos:
```tsx
addBotMessage('Cuéntame más sobre tu proyecto. ¿Qué necesitas exactamente? 🤔');
addBotMessage('Perfecto. Ahora, descríbeme tu proyecto en detalle:');
addBotMessage('¿Qué tipo de proyecto tienes en mente? Cuéntame más 📝');
```

## 🔧 Ajustes Técnicos

### Cambiar la posición del botón

**Botón abajo-derecha (actual):**
```tsx
className="fixed bottom-6 right-6 ..."
```

**Botón abajo-izquierda:**
```tsx
className="fixed bottom-6 left-6 ..."
```

**Botón arriba-derecha:**
```tsx
className="fixed top-20 right-6 ..."
```

### Cambiar el tamaño del chat

**Línea ~234:**
```tsx
{/* Actual: 96px ancho × 600px alto */}
className="... w-96 h-[600px] ..."

{/* Más pequeño */}
className="... w-80 h-[500px] ..."

{/* Más grande */}
className="... w-[450px] h-[700px] ..."
```

### Cambiar el tamaño del botón flotante

**Línea ~219:**
```tsx
{/* Actual: 64px × 64px */}
className="... h-16 w-16 ..."

{/* Más pequeño */}
className="... h-14 w-14 ..."

{/* Más grande */}
className="... h-20 w-20 ..."
```

### Velocidad de las animaciones

**Delays de mensajes (líneas ~99, ~101, ~114, etc.):**
```tsx
{/* Actual */}
setTimeout(() => { ... }, 500);  // 0.5 segundos
setTimeout(() => { ... }, 1500); // 1.5 segundos

{/* Más rápido */}
setTimeout(() => { ... }, 300);  // 0.3 segundos
setTimeout(() => { ... }, 1000); // 1 segundo

{/* Más lento */}
setTimeout(() => { ... }, 800);  // 0.8 segundos
setTimeout(() => { ... }, 2000); // 2 segundos
```

## ➕ Agregar más servicios

**Línea ~25-34:**
```tsx
const services = [
  'Desarrollo de Software',
  'Aplicaciones Móviles',
  'Desarrollo Web',
  'Hosting & Cloud',
  'Ciberseguridad',
  'Procesamiento de Datos',
  'Soporte Técnico',
  'Consultoría TI',
  // Agrega más servicios aquí:
  'Marketing Digital',
  'Diseño UX/UI',
  'Blockchain',
  'Inteligencia Artificial'
];
```

## 🌙 Modo Oscuro (Opcional)

Para adaptar el chatbot al modo oscuro:

```tsx
{/* Ventana del chat */}
className="... bg-white dark:bg-gray-900 ..."

{/* Mensajes del bot */}
className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ..."

{/* Input */}
className="... bg-white dark:bg-gray-800 ..."
```

## 📱 Ajustes Responsive

Para mejorar la experiencia móvil:

**Línea ~234 (ventana del chat):**
```tsx
{/* Antes */}
className="... w-96 h-[600px] ..."

{/* Después - responsive */}
className="... w-full sm:w-96 h-screen sm:h-[600px] bottom-0 sm:bottom-6 right-0 sm:right-6 sm:rounded-2xl ..."
```

Esto hace que en móviles el chat ocupe toda la pantalla, y en escritorio mantenga su tamaño normal.

## 🎯 Tips Adicionales

1. **Emojis personalizados**: Usa emojis relevantes a tu marca en los mensajes
2. **Tono de voz**: Ajusta el lenguaje según tu audiencia (formal/informal)
3. **Tiempo de respuesta**: Los delays simulan una conversación natural
4. **Validaciones**: Puedes agregar más validaciones según tus necesidades
5. **Campos adicionales**: Puedes añadir más preguntas al flujo conversacional

## 🚀 Funcionalidades Avanzadas (Futuras)

Ideas para mejorar el chatbot:

- ✅ Agregar opción de adjuntar archivos
- ✅ Integrar con WhatsApp Business API
- ✅ Agregar opciones de FAQ
- ✅ Implementar respuestas con IA (OpenAI, Claude)
- ✅ Guardar conversaciones en base de datos
- ✅ Panel de administración para ver consultas
- ✅ Notificaciones push cuando llega una consulta
- ✅ Multi-idioma (español/inglés)
- ✅ Horario de atención (respuestas automáticas fuera de horario)

---

¿Necesitas ayuda con alguna personalización específica? ¡Escríbeme! 💬

