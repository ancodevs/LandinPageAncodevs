# Configuración de EmailJS para el Chatbot

Para que el chatbot pueda enviar correos electrónicos a `ancodevs.spa@gmail.com`, sigue estos pasos:

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate o inicia sesión
3. Es GRATIS para hasta 200 emails por mes

## Paso 2: Conectar tu cuenta de correo

1. En el panel de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona **Gmail** (o el servicio que uses)
4. Conecta tu cuenta `ancodevs.spa@gmail.com`
5. Copia el **Service ID** que te proporcionen

## Paso 3: Crear una plantilla de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa esta plantilla:

```
Asunto: Nuevo contacto desde el chatbot de Ancodevs

Contenido:
Has recibido un nuevo contacto desde el chatbot:

Nombre/Razón Social: {{from_name}}
Correo electrónico: {{from_email}}
Servicio solicitado: {{service}}

Detalles del proyecto:
{{project_details}}

---
Este mensaje fue enviado automáticamente desde el chatbot de Ancodevs Digital Hub.
```

4. Guarda la plantilla y copia el **Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a **Account** > **General**
2. Copia tu **Public Key**

## Paso 5: Configurar las credenciales en el código

Abre el archivo `src/components/Chatbot.tsx` y reemplaza las siguientes líneas:

```typescript
// Línea ~171
emailjs.init('YOUR_PUBLIC_KEY'); // Reemplazar con tu Public Key

// Líneas ~187-189
await emailjs.send(
  'YOUR_SERVICE_ID',    // Reemplazar con tu Service ID
  'YOUR_TEMPLATE_ID',   // Reemplazar con tu Template ID
  templateParams
);
```

### Ejemplo:
```typescript
emailjs.init('xYz123AbC456DeF789');

await emailjs.send(
  'service_abc1234',
  'template_xyz5678',
  templateParams
);
```

## Paso 6: Probar el chatbot

1. Inicia tu aplicación con `npm run dev`
2. Haz clic en el botón del chatbot
3. Completa el flujo conversacional
4. Verifica que el email llegue a `ancodevs.spa@gmail.com`

## Notas adicionales

- Los correos pueden tardar 1-2 minutos en llegar
- Revisa la carpeta de spam si no ves el email
- EmailJS tiene un límite de 200 emails gratis por mes
- Para producción, considera verificar tu dominio en EmailJS

## Solución de problemas

Si los emails no se envían:
1. Verifica que las credenciales sean correctas
2. Revisa la consola del navegador por errores
3. Asegúrate de que la cuenta de Gmail esté conectada en EmailJS
4. Verifica que no hayas excedido el límite de emails gratuitos

## Alternativa sin EmailJS

Si prefieres no usar EmailJS, puedes:
1. Crear un backend simple con Node.js y Nodemailer
2. Usar servicios como SendGrid, Mailgun o Amazon SES
3. Implementar una función serverless (Vercel Functions, Netlify Functions)

