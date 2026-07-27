# 🤖 Chatbot AIA - Asistente Inteligente Ancodevs

## ✨ Características implementadas

✅ **Botón flotante**: Aparece en la esquina inferior derecha con animaciones suaves
✅ **Avatar femenino**: Emoji de profesional (👩‍💼) que puedes reemplazar fácilmente
✅ **Nombre relacionado con IA**: "AIA" - Asistente Inteligente Ancodevs
✅ **Flujo conversacional completo**:
   1. Saludo inicial
   2. Opciones de servicios (8 servicios de Ancodevs)
   3. Detalles del proyecto
   4. Correo electrónico (con validación)
   5. Nombre o Razón Social
   6. Envío automático a `contacto@ancodevs.cl`

✅ **Diseño moderno**: Gradientes azul-púrpura, animaciones, sombras y efectos hover
✅ **Validaciones**: Email validado, campos obligatorios
✅ **Notificaciones**: Mensajes de éxito/error con toast
✅ **Responsive**: Funciona en móviles y escritorio

## 🚀 Cómo usar

### Paso 1: Configurar EmailJS (IMPORTANTE)

Para que el chatbot envíe correos, necesitas configurar EmailJS:

1. Lee las instrucciones completas en `EMAILJS_SETUP.md`
2. Obtén tus credenciales de EmailJS (gratuito)
3. Reemplaza en `src/components/Chatbot.tsx`:
   - `YOUR_PUBLIC_KEY` (línea ~171)
   - `YOUR_SERVICE_ID` (línea ~188)
   - `YOUR_TEMPLATE_ID` (línea ~189)

### Paso 2: Reemplazar el avatar (opcional)

Para cambiar el avatar femenino:

1. Guarda tu imagen en `public/` (ej: `public/avatar-aia.png`)
2. En `src/components/Chatbot.tsx`, busca los emojis `👩‍💼` (hay 2 lugares)
3. Reemplaza con:
```tsx
<img src="/avatar-aia.png" alt="AIA" className="w-full h-full object-cover rounded-full" />
```

### Paso 3: Personalizar (opcional)

**Cambiar el nombre del bot:**
- Busca "AIA" en `Chatbot.tsx` y cámbialo por el nombre que prefieras

**Cambiar colores:**
- Los gradientes están en: `from-blue-600 to-purple-600`
- Puedes cambiarlos a cualquier color de Tailwind

**Modificar servicios:**
- Edita el array `services` en la línea ~25 de `Chatbot.tsx`

## 🎨 Diseño

- **Colores**: Gradiente azul (#2563eb) a púrpura (#9333ea)
- **Tamaño**: 96px × 96px el botón, 384px × 600px la ventana del chat
- **Animaciones**: Suaves transiciones de 300ms
- **Tipografía**: Sistema de fuentes de Tailwind

## 📱 Funcionalidades técnicas

- **React Hooks**: useState, useEffect, useRef
- **TypeScript**: Tipado completo
- **Validaciones**: Email con regex
- **Scroll automático**: Los mensajes nuevos se muestran automáticamente
- **Entrada con Enter**: Enviar mensajes con la tecla Enter
- **Reiniciar conversación**: Botón para iniciar una nueva consulta
- **EmailJS**: Integración para envío de correos

## 🧪 Probar el chatbot

1. Ejecuta `npm run dev`
2. Haz clic en el botón flotante (abajo a la derecha)
3. Sigue el flujo conversacional
4. Verifica que el email llegue a `contacto@ancodevs.cl`

## 📝 Estructura de mensajes

Los datos se envían en este formato:

```
Servicio solicitado: [Servicio elegido]
Detalles del proyecto: [Descripción del usuario]
Correo: [email del usuario]
Nombre/Razón Social: [Nombre del usuario]
```

## 🐛 Solución de problemas

**El chatbot no aparece:**
- Verifica que `<Chatbot />` esté en `src/pages/Index.tsx`
- Revisa la consola del navegador por errores

**Los emails no se envían:**
- Configura EmailJS correctamente (ver `EMAILJS_SETUP.md`)
- Verifica las credenciales en el código
- Revisa la consola del navegador

**El avatar no se ve:**
- Asegúrate de que la imagen esté en `public/`
- Verifica la ruta de la imagen

## 🎁 Extras implementados

- ✨ Mensajes con delay para simular escritura
- 🎯 Botones de servicios con hover effects
- 📧 Validación de email en tiempo real
- 🔄 Opción de reiniciar conversación
- 🎨 Diseño profesional y moderno
- 📱 Totalmente responsive

## 📦 Dependencias añadidas

```json
"@emailjs/browser": "^4.x.x"
```

Ya instalada y lista para usar.

---

¡Disfruta de tu nuevo chatbot! 🚀

