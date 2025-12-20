# 📧 Plantilla de EmailJS - Lista para Copiar

## 🎯 Instrucciones Rápidas

Cuando crees tu plantilla en EmailJS, copia y pega este contenido:

---

## 📝 Plantilla para EmailJS

### Subject (Asunto):
```
Nuevo contacto desde el Chatbot - {{service}}
```

### Content (Contenido HTML):

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .field {
            background: white;
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        .field-label {
            font-weight: bold;
            color: #2563eb;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .badge {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🤖 Nuevo Contacto desde el Chatbot</h1>
        <div class="badge">AIA - Asistente Inteligente Ancodevs</div>
    </div>
    
    <div class="content">
        <p>Has recibido una nueva consulta desde el chatbot de tu sitio web:</p>
        
        <div class="field">
            <div class="field-label">👤 Nombre / Razón Social</div>
            <div class="field-value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📧 Correo Electrónico</div>
            <div class="field-value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">🛠️ Servicio Solicitado</div>
            <div class="field-value">{{service}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📝 Detalles del Proyecto</div>
            <div class="field-value">{{project_details}}</div>
        </div>
        
        <div class="footer">
            <p><strong>¿Qué hacer ahora?</strong></p>
            <p>Responde a <strong>{{from_email}}</strong> lo antes posible para no perder esta oportunidad.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p>Este mensaje fue enviado automáticamente desde el chatbot de <strong>Ancodevs Digital Hub</strong></p>
            <p style="font-size: 12px; color: #9ca3af;">
                Si recibes este correo por error, por favor ignóralo.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 📋 Variables que usa la plantilla

Asegúrate de que tu plantilla incluya estas variables:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `{{from_name}}` | Nombre o Razón Social del usuario | "Juan Pérez" |
| `{{from_email}}` | Email del usuario | "juan@example.com" |
| `{{service}}` | Servicio seleccionado | "Desarrollo Web" |
| `{{project_details}}` | Descripción del proyecto | "Necesito un sitio web..." |

---

## 🎨 Plantilla Simple (Alternativa sin HTML)

Si prefieres una versión más simple sin estilos:

### Subject:
```
Nuevo contacto - Chatbot Ancodevs
```

### Content (Texto plano):
```
🤖 NUEVO CONTACTO DESDE EL CHATBOT
=====================================

INFORMACIÓN DEL CLIENTE:
------------------------
Nombre/Razón Social: {{from_name}}
Email: {{from_email}}

SERVICIO SOLICITADO:
--------------------
{{service}}

DETALLES DEL PROYECTO:
----------------------
{{project_details}}

=====================================

Por favor, responde a {{from_email}} lo antes posible.

---
Este mensaje fue enviado automáticamente desde el chatbot de Ancodevs Digital Hub.
Fecha: {{reply_to}}
```

---

## ⚙️ Configuración en EmailJS

### Paso 1: Crear la plantilla

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click en **Email Templates** en el menú lateral
3. Click en **Create New Template**

### Paso 2: Configurar el remitente

```
From Name: Chatbot Ancodevs
From Email: ancodevs.spa@gmail.com
Reply To: {{from_email}}
```

**Importante:** Configura el **Reply To** como `{{from_email}}` para que cuando respondas el email, vaya directamente al cliente.

### Paso 3: Pegar la plantilla

1. En **Subject**, pega: `Nuevo contacto desde el Chatbot - {{service}}`
2. En **Content**, selecciona la pestaña **HTML**
3. Pega todo el código HTML de arriba
4. Click en **Save**

### Paso 4: Probar la plantilla

1. Click en **Test it**
2. Rellena los campos de ejemplo:
   ```
   from_name: Juan Pérez
   from_email: juan@example.com
   service: Desarrollo Web
   project_details: Necesito un sitio web corporativo...
   ```
3. Envía el test a tu email para ver cómo se ve

### Paso 5: Copiar el Template ID

1. Una vez guardada, verás el **Template ID** (ej: `template_abc123xyz`)
2. Copia este ID
3. Pégalo en `src/components/Chatbot.tsx` línea ~189

---

## 🔍 Vista Previa

Así se verá el email que recibirás:

```
┌─────────────────────────────────────────┐
│                                         │
│   🤖 Nuevo Contacto desde el Chatbot   │
│   AIA - Asistente Inteligente Ancodevs │
│                                         │
└─────────────────────────────────────────┘

Has recibido una nueva consulta desde el chatbot:

┌─────────────────────────────────────────┐
│ 👤 NOMBRE / RAZÓN SOCIAL                │
│ Juan Pérez                              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 📧 CORREO ELECTRÓNICO                   │
│ juan@example.com                        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🛠️ SERVICIO SOLICITADO                  │
│ Desarrollo Web                          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 📝 DETALLES DEL PROYECTO                │
│ Necesito un sitio web corporativo       │
│ moderno con sistema de citas online...  │
└─────────────────────────────────────────┘

────────────────────────────────────────────

¿Qué hacer ahora?
Responde a juan@example.com lo antes posible

────────────────────────────────────────────
Este mensaje fue enviado automáticamente
desde Ancodevs Digital Hub
```

---

## 🎯 Tips para EmailJS

### 1. Límite gratuito
- **200 emails/mes** en plan gratuito
- Si necesitas más, el plan pago cuesta $15/mes (1000 emails)

### 2. Evitar el spam
- Verifica tu dominio en EmailJS
- Usa Reply-To correctamente
- No envíes emails masivos desde el chatbot

### 3. Respaldo
- Configura una copia a otro email (CC o BCC)
- En EmailJS: **Settings** > **BCC** > agrega otro email

### 4. Seguridad
- **NUNCA** expongas tu Private Key
- Solo usa la Public Key en el frontend
- Las credenciales van en el código (es seguro)

### 5. Testing
- Usa el **Test it** de EmailJS antes de ir a producción
- Verifica que todos los campos se vean bien
- Prueba desde diferentes navegadores

---

## 🆘 Solución de Problemas

### Los emails no llegan
1. ✅ Verifica que el Service esté activo en EmailJS
2. ✅ Revisa la carpeta de spam
3. ✅ Confirma que el email en EmailJS sea correcto
4. ✅ Espera 1-2 minutos (a veces hay delay)

### Los campos aparecen vacíos
1. ✅ Verifica que los nombres de variables coincidan
2. ✅ Revisa que `templateParams` en el código tenga los mismos nombres
3. ✅ En el código, línea ~173-180, verifica los nombres

### Error al enviar
1. ✅ Public Key correcta (línea ~171)
2. ✅ Service ID correcto (línea ~188)
3. ✅ Template ID correcto (línea ~189)
4. ✅ Revisa la consola del navegador

---

## 📱 Notificación en el móvil

Para recibir notificaciones inmediatas:

1. Instala la app de Gmail en tu móvil
2. Activa notificaciones para ancodevs.spa@gmail.com
3. Opcional: Crea un filtro para que los emails del chatbot tengan una etiqueta especial

---

## ✅ Checklist Final

Antes de lanzar a producción:

- [ ] Cuenta de EmailJS creada
- [ ] Gmail conectado (ancodevs.spa@gmail.com)
- [ ] Service creado y activo
- [ ] Template creada con el HTML de arriba
- [ ] Template probada con "Test it"
- [ ] Public Key copiada en el código
- [ ] Service ID copiado en el código
- [ ] Template ID copiado en el código
- [ ] Test desde el chatbot completado
- [ ] Email recibido correctamente
- [ ] Reply-To funciona correctamente

---

¡Listo! Tu chatbot ya puede enviar emails profesionales. 📧✨

