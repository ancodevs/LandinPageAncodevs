# 🎯 Flujo Visual del Chatbot AIA

## 📱 Estado Inicial

```
┌──────────────────────────────────────────┐
│                                          │
│      Tu Sitio Web de Ancodevs           │
│                                          │
│  [Hero]  [Servicios]  [Portfolio]       │
│                                          │
│                                          │
│                           ┌────────────┐ │
│                           │    💬      │ │ ← Botón flotante
│                           │            │ │   (pulsa aquí)
│                           └────────────┘ │
└──────────────────────────────────────────┘
```

---

## 💬 PASO 1: Chat Abierto - Bienvenida

Usuario hace clic en el botón flotante ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │ ← Header
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│                                        │
│  👩‍💼  ¡Hola! Soy AIA, tu asistente   │ ← Mensaje bot
│      virtual de Ancodevs 👋           │
│                                        │
│  👩‍💼  ¿En qué podemos ayudarte?      │ ← Mensaje bot
│                                        │
│      ┌──────────────────────────────┐ │
│      │ Desarrollo de Software       │ │ ← Opciones
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Aplicaciones Móviles         │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Desarrollo Web               │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Hosting & Cloud              │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Ciberseguridad               │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Procesamiento de Datos       │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Soporte Técnico              │ │
│      └──────────────────────────────┘ │
│      ┌──────────────────────────────┐ │
│      │ Consultoría TI               │ │
│      └──────────────────────────────┘ │
│                                        │
└────────────────────────────────────────┘
```

---

## 🎯 PASO 2: Usuario Selecciona un Servicio

Usuario hace clic en "Desarrollo Web" ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│                                        │
│  👩‍💼  ¡Hola! Soy AIA, tu asistente   │
│      virtual de Ancodevs 👋           │
│                                        │
│  👩‍💼  ¿En qué podemos ayudarte?      │
│                                        │
│                  Desarrollo Web  🔵    │ ← Respuesta usuario
│                                        │
│  👩‍💼  Excelente elección. Desarrollo │
│      Web es uno de nuestros servicios │
│      más solicitados. 💼              │
│                                        │
│  👩‍💼  Cuéntame sobre tu proyecto.    │ ← Nueva pregunta
│      ¿Qué tienes en mente?            │
│                                        │
├────────────────────────────────────────┤
│ [Escribe tu respuesta...]        [→]  │ ← Input aparece
└────────────────────────────────────────┘
```

---

## 📝 PASO 3: Usuario Describe su Proyecto

Usuario escribe: "Necesito un e-commerce para vender ropa" ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│  👩‍💼  Cuéntame sobre tu proyecto.    │
│      ¿Qué tienes en mente?            │
│                                        │
│           Necesito un e-commerce  🔵   │ ← Usuario responde
│           para vender ropa             │
│                                        │
│  👩‍💼  ¡Interesante proyecto! 📝      │
│                                        │
│  👩‍💼  Para poder contactarte,        │ ← Nueva pregunta
│      ¿cuál es tu correo electrónico?  │
│                                        │
├────────────────────────────────────────┤
│ [tucorreo@ejemplo.com]           [→]  │ ← Input email
└────────────────────────────────────────┘
```

---

## 📧 PASO 4: Usuario Ingresa su Email

Usuario escribe: "maria@tienda.com" ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│  👩‍💼  Para poder contactarte,        │
│      ¿cuál es tu correo electrónico?  │
│                                        │
│               maria@tienda.com  🔵     │ ← Email validado ✓
│                                        │
│  👩‍💼  Perfecto. 📧                   │
│                                        │
│  👩‍💼  Por último, ingresa tu nombre  │ ← Última pregunta
│      o razón social:                  │
│                                        │
├────────────────────────────────────────┤
│ [Tu nombre o empresa]            [→]  │ ← Input nombre
└────────────────────────────────────────┘
```

---

## 👤 PASO 5: Usuario Ingresa su Nombre

Usuario escribe: "María González" ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│  👩‍💼  Por último, ingresa tu nombre  │
│      o razón social:                  │
│                                        │
│                  María González  🔵    │ ← Usuario responde
│                                        │
│  👩‍💼  ¡Gracias por tu información! 🎉│
│                                        │
│  👩‍💼  Estoy enviando tus datos       │ ← Enviando...
│      a nuestro equipo...              │
│                                        │
│         [⏳ Enviando...]               │
│                                        │
└────────────────────────────────────────┘
```

---

## ✅ PASO 6: Confirmación de Envío

Email enviado exitosamente ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│  👩‍💼  ¡Gracias por tu información! 🎉│
│                                        │
│  👩‍💼  Estoy enviando tus datos       │
│      a nuestro equipo...              │
│                                        │
│  👩‍💼  ¡Listo! Tu información ha      │ ← Éxito ✓
│      sido enviada exitosamente. 📨    │
│                                        │
│  👩‍💼  Nuestro equipo se pondrá en    │
│      contacto contigo pronto.         │
│      ¡Que tengas un excelente día! 😊│
│                                        │
├────────────────────────────────────────┤
│  [Iniciar nueva consulta]              │ ← Botón reiniciar
└────────────────────────────────────────┘
```

---

## 📧 Email Recibido en contacto@ancodevs.cl

```
┌──────────────────────────────────────────────┐
│ 📧 Gmail                                     │
├──────────────────────────────────────────────┤
│                                              │
│  De: Chatbot Ancodevs                        │
│      <contacto@ancodevs.cl>                  │
│                                              │
│  Asunto: Nuevo contacto desde el Chatbot -  │
│          Desarrollo Web                      │
│                                              │
│  ╔════════════════════════════════════════╗  │
│  ║ 🤖 Nuevo Contacto desde el Chatbot    ║  │
│  ║ AIA - Asistente Inteligente Ancodevs  ║  │
│  ╚════════════════════════════════════════╝  │
│                                              │
│  Has recibido una nueva consulta:           │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ 👤 NOMBRE / RAZÓN SOCIAL             │   │
│  │ María González                       │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ 📧 CORREO ELECTRÓNICO                │   │
│  │ maria@tienda.com                     │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ 🛠️ SERVICIO SOLICITADO               │   │
│  │ Desarrollo Web                       │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ 📝 DETALLES DEL PROYECTO             │   │
│  │ Necesito un e-commerce para          │   │
│  │ vender ropa                          │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ¿Qué hacer ahora?                          │
│  Responde a maria@tienda.com lo antes       │
│  posible para no perder esta oportunidad.   │
│                                              │
│  [Responder] [Archivar]                     │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 🔄 PASO 7: Reiniciar Conversación

Si el usuario hace clic en "Iniciar nueva consulta" ↓

```
┌────────────────────────────────────────┐
│ 👩‍💼 AIA                          ✕     │
│ Asistente Inteligente Ancodevs         │
├────────────────────────────────────────┤
│                                        │
│  👩‍💼  ¡Hola! Soy AIA, tu asistente   │ ← Vuelve al inicio
│      virtual de Ancodevs 👋           │
│                                        │
│  👩‍💼  ¿En qué podemos ayudarte?      │
│                                        │
│      [Opciones de servicios...]       │
│                                        │
└────────────────────────────────────────┘
```

---

## 📊 Resumen del Flujo Completo

```
   INICIO
     ↓
┌─────────────────────┐
│ Usuario ve el botón │
│ flotante 💬         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Usuario hace clic   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Saludo de AIA       │
│ "¡Hola! Soy AIA"    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Muestra 8 servicios │
│ (botones)           │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Usuario selecciona  │
│ un servicio         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ AIA pregunta sobre  │
│ el proyecto         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Usuario describe    │
│ su proyecto         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ AIA pide email      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Usuario ingresa     │
│ email (validado)    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ AIA pide nombre     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Usuario ingresa     │
│ nombre              │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Envío de email      │
│ a ancodevs.spa@     │
│ gmail.com           │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Confirmación y      │
│ mensaje de éxito    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Opción de reiniciar │
│ o cerrar chat       │
└─────────────────────┘
     ↓
   FIN
```

---

## 🎯 Puntos Clave del Flujo

### ✅ Validaciones
1. **Email**: Formato válido (contiene @ y dominio)
2. **Campos vacíos**: No se puede avanzar sin llenar
3. **Flujo lineal**: No se pueden saltar pasos

### ⏱️ Tiempos (delays)
- **Saludo inicial**: 500ms
- **Pregunta de servicios**: 1500ms (1.5s)
- **Confirmación de servicio**: 500ms
- **Nueva pregunta**: 1500ms
- **Envío de email**: Inmediato al enviar

### 🎨 Elementos Visuales
- **Avatar**: 👩‍💼 (reemplazable)
- **Colores**: Gradiente azul-púrpura
- **Animaciones**: Suaves y profesionales
- **Scroll**: Automático al nuevo mensaje

### 📱 Interacciones
- **Botones de servicio**: 1 clic → avanza
- **Input de texto**: Enter o botón → avanza
- **Cerrar chat**: Botón X → cierra ventana
- **Reiniciar**: Botón → vuelve al inicio

---

## 🎬 Duración Total Estimada

```
Usuario experimentado: ~30-45 segundos
Usuario promedio:      ~60-90 segundos
Usuario detallado:     ~2-3 minutos
```

---

## 💡 Tips para el Usuario Final

1. **Lee los mensajes**: AIA te guía paso a paso
2. **Sé específico**: Cuanto más detalles, mejor servicio
3. **Email correcto**: Verifica que esté bien escrito
4. **Paciencia**: Los mensajes aparecen con delays naturales
5. **Reiniciar**: Puedes empezar de nuevo en cualquier momento

---

¡Así funciona tu nuevo chatbot AIA! 🚀✨

