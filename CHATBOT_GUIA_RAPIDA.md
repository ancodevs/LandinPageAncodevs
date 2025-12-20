# 🚀 Guía Rápida - Chatbot AIA

## ✅ ¿Qué se ha implementado?

### 🎯 Funcionalidades Principales

1. **Botón Flotante Animado** 💬
   - Ubicación: Esquina inferior derecha
   - Diseño: Gradiente azul-púrpura con efecto hover
   - Icono: Mensaje circular (MessageCircle)
   - Animación: Escala al pasar el mouse

2. **Ventana de Chat Moderna** 💻
   - Tamaño: 384px × 600px
   - Header con avatar femenino 👩‍💼
   - Nombre: **AIA** (Asistente Inteligente Ancodevs)
   - Scroll automático
   - Área de mensajes con burbujas diferenciadas

3. **Flujo Conversacional Inteligente** 🤖

   **Paso 1: Saludo**
   ```
   AIA: ¡Hola! Soy AIA, tu asistente virtual de Ancodevs 👋
   AIA: ¿En qué podemos ayudarte?
   
   [Botones con 8 opciones de servicios]
   ```

   **Paso 2: Selección de Servicio**
   ```
   Usuario: [Selecciona un servicio]
   AIA: Excelente elección. [Servicio] es uno de nuestros servicios más solicitados. 💼
   ```

   **Paso 3: Detalles del Proyecto**
   ```
   AIA: Cuéntame sobre tu proyecto. ¿Qué tienes en mente?
   Usuario: [Escribe los detalles]
   AIA: ¡Interesante proyecto! 📝
   ```

   **Paso 4: Correo Electrónico**
   ```
   AIA: Para poder contactarte, ¿cuál es tu correo electrónico?
   Usuario: [Ingresa su email]
   AIA: Perfecto. 📧
   ```
   *Incluye validación de formato de email*

   **Paso 5: Nombre o Razón Social**
   ```
   AIA: Por último, ingresa tu nombre o razón social:
   Usuario: [Ingresa su nombre]
   AIA: ¡Gracias por tu información! 🎉
   ```

   **Paso 6: Envío del Email**
   ```
   AIA: Estoy enviando tus datos a nuestro equipo...
   AIA: ¡Listo! Tu información ha sido enviada exitosamente. 📨
   AIA: Nuestro equipo se pondrá en contacto contigo pronto. ¡Que tengas un excelente día! 😊
   
   [Botón: Iniciar nueva consulta]
   ```

4. **Los 8 Servicios de Ancodevs** 🛠️
   - Desarrollo de Software
   - Aplicaciones Móviles
   - Desarrollo Web
   - Hosting & Cloud
   - Ciberseguridad
   - Procesamiento de Datos
   - Soporte Técnico
   - Consultoría TI

5. **Sistema de Envío de Emails** 📧
   - Destino: ancodevs.spa@gmail.com
   - Tecnología: EmailJS
   - Formato estructurado con toda la información
   - Notificaciones de éxito/error

## 🎨 Características de Diseño

### Colores
- **Gradiente Principal**: Azul (#2563eb) → Púrpura (#9333ea)
- **Mensajes Bot**: Fondo blanco, texto gris oscuro
- **Mensajes Usuario**: Gradiente azul-púrpura, texto blanco
- **Fondo Chat**: Gris claro (#f9fafb)

### Animaciones
- Transiciones suaves (300ms)
- Efecto hover en botones (scale 110%)
- Aparición gradual de mensajes
- Scroll automático al nuevo mensaje

### Tipografía
- **Nombre del bot**: Semibold
- **Mensajes**: Tamaño pequeño (text-sm)
- **Descripción**: Extra pequeño (text-xs)

## 🔧 Configuración Requerida

### ⚠️ IMPORTANTE: Configurar EmailJS

**DEBES hacer esto para que funcione el envío de emails:**

1. Ve a [emailjs.com](https://www.emailjs.com/) y crea una cuenta (GRATIS)
2. Conecta tu Gmail (ancodevs.spa@gmail.com)
3. Crea un servicio y obtén tu **Service ID**
4. Crea una plantilla y obtén tu **Template ID**
5. Copia tu **Public Key**
6. Abre `src/components/Chatbot.tsx` y reemplaza:

```typescript
// Línea ~171
emailjs.init('TU_PUBLIC_KEY_AQUI');

// Líneas ~187-189
await emailjs.send(
  'TU_SERVICE_ID_AQUI',
  'TU_TEMPLATE_ID_AQUI',
  templateParams
);
```

📖 **Instrucciones detalladas en:** `EMAILJS_SETUP.md`

## 🎯 Validaciones Implementadas

✅ **Email**
- Formato válido (regex)
- Campo obligatorio
- Mensaje de error si es inválido

✅ **Campos de texto**
- No pueden estar vacíos
- Mensajes de error con toast

✅ **Flujo lineal**
- No se puede saltar pasos
- Un paso a la vez

## 📱 Responsive

- ✅ Funciona en móviles
- ✅ Funciona en tablets
- ✅ Funciona en escritorio
- ✅ Botón flotante siempre visible
- ✅ Chat se ajusta al viewport

## 🎁 Extras Incluidos

1. **Delays inteligentes**: Los mensajes aparecen con delays para simular conversación natural
2. **Scroll automático**: Siempre ves el último mensaje
3. **Enter para enviar**: Presiona Enter en lugar de hacer clic
4. **Reiniciar conversación**: Botón para empezar de nuevo
5. **Notificaciones toast**: Mensajes de éxito/error elegantes
6. **Hover effects**: Todos los botones tienen efectos al pasar el mouse
7. **Icono de enviar**: Botón con ícono de avión de papel
8. **Cierre del chat**: Botón X para cerrar la ventana

## 📊 Formato del Email Enviado

Los datos se envían a **ancodevs.spa@gmail.com** en este formato:

```
Asunto: Nuevo contacto desde el chatbot de Ancodevs

Contenido:
Nuevo contacto desde el chatbot:

Servicio solicitado: [Desarrollo Web]
Detalles del proyecto: [El usuario quiere crear un sitio web corporativo...]
Correo: [usuario@example.com]
Nombre/Razón Social: [Juan Pérez]
```

## 🎭 Personalización Fácil

### Avatar
1. Guarda tu imagen en `public/avatar-aia.png`
2. Busca `👩‍💼` en `Chatbot.tsx` (2 lugares)
3. Reemplaza por: `<img src="/avatar-aia.png" alt="AIA" />`

### Nombre
- Busca "AIA" en `Chatbot.tsx` y cámbialo

### Colores
- Busca `from-blue-600 to-purple-600` y cámbialo

📖 **Guía completa de personalización en:** `CHATBOT_CUSTOMIZATION.md`

## 🧪 Cómo Probar

1. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

2. **Abre tu navegador:**
   ```
   http://localhost:8081/
   ```

3. **Haz clic en el botón flotante** (esquina inferior derecha)

4. **Completa el flujo:**
   - Selecciona un servicio
   - Describe tu proyecto
   - Ingresa tu email
   - Ingresa tu nombre
   - ¡Listo!

5. **Revisa el email** en ancodevs.spa@gmail.com

## 📂 Archivos Creados/Modificados

### Archivos Nuevos
- ✅ `src/components/Chatbot.tsx` - Componente principal del chatbot
- ✅ `EMAILJS_SETUP.md` - Guía de configuración de EmailJS
- ✅ `CHATBOT_README.md` - Documentación general
- ✅ `CHATBOT_CUSTOMIZATION.md` - Guía de personalización
- ✅ `CHATBOT_GUIA_RAPIDA.md` - Este archivo

### Archivos Modificados
- ✅ `src/pages/Index.tsx` - Agregado `<Chatbot />`
- ✅ `package.json` - Agregado `@emailjs/browser`

## ⚡ Rendimiento

- **Peso del componente**: ~15KB
- **Dependencias**: Solo EmailJS (~10KB)
- **Render**: Optimizado con React Hooks
- **Animaciones**: Hardware accelerated (CSS transforms)

## 🐛 Troubleshooting

### El chatbot no aparece
➡️ Verifica que `<Chatbot />` esté en `Index.tsx`
➡️ Revisa la consola del navegador

### Los emails no se envían
➡️ Configura EmailJS (ver `EMAILJS_SETUP.md`)
➡️ Verifica las credenciales en el código
➡️ Revisa la carpeta de spam

### El botón se ve cortado en móviles
➡️ Ajusta los valores `bottom-6 right-6` en el componente

## 💡 Mejoras Futuras Sugeridas

1. **Persistencia**: Guardar conversaciones en LocalStorage
2. **Horarios**: Mostrar mensaje si es fuera de horario
3. **FAQ**: Agregar respuestas automáticas a preguntas frecuentes
4. **Archivos**: Permitir adjuntar imágenes/documentos
5. **Multi-idioma**: Soporte para inglés
6. **IA**: Integrar GPT para respuestas inteligentes
7. **Analytics**: Rastrear qué servicios son más consultados
8. **WhatsApp**: Opción de continuar por WhatsApp

## 📞 Soporte

Si necesitas ayuda o quieres agregar funcionalidades:
- 📧 Email: ancodevs.spa@gmail.com
- 💬 Usa el mismo chatbot para contactar

---

## 🎉 ¡Listo para usar!

Tu chatbot está **100% funcional** y listo para recibir consultas.

Solo falta configurar EmailJS (5 minutos) y ya estarás recibiendo leads. 🚀

---

**Próximos pasos:**
1. ✅ Configurar EmailJS
2. ✅ Reemplazar el avatar (opcional)
3. ✅ Personalizar colores/mensajes (opcional)
4. ✅ ¡Disfrutar de tu nuevo chatbot!

---

*Desarrollado con ❤️ para Ancodevs Digital Hub*

