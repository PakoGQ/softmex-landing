# CLAUDE.md — Proyecto: SoftMex Landing Page

## Descripción del Proyecto

Landing page corporativa para **SoftMex** (nombre provisional), empresa mexicana especializada en desarrollo de software, automatización empresarial e integración de inteligencia artificial. La página debe transmitir tecnología de vanguardia, confianza profesional y experiencia sólida.

---

## Identidad de la Empresa

- **Nombre provisional:** SoftMex
- **Sector:** Desarrollo de software, consultoría tecnológica, inteligencia artificial
- **Mercado objetivo:** Empresas medianas y grandes en México y mercado internacional (especialmente USA–México)
- **Propuesta de valor:** Equipo con postgrados, diplomados, certificaciones internacionales y más de 20 años de experiencia en múltiples áreas del rubro tecnológico

---

## Servicios Ofrecidos

1. **Creación de Sistemas** — Desarrollo de sistemas a medida: ERP, CRM, plataformas internas, herramientas de gestión
2. **Desarrollo de Páginas Empresariales** — Sitios web corporativos, landing pages, portales de servicios
3. **Integración de Inteligencia Artificial** — Incorporación de modelos de lenguaje, visión computacional y ML en procesos empresariales existentes
4. **Desarrollo de E-commerce** — Tiendas en línea, pasarelas de pago, gestión de inventario, experiencia de compra optimizada
5. **Outsourcing Empresarial e Internacional** — Equipos de desarrollo bajo demanda para empresas en México y Estados Unidos
6. **Creación y Personalización de Agentes IA** — Agentes conversacionales y de automatización personalizados para verticales específicos (legal, contabilidad, logística, ventas, atención al cliente)
7. **Auditorías de Sistemas** — Evaluación de arquitectura, seguridad, rendimiento y escalabilidad de sistemas existentes
8. **Servicios relacionados con software** — Mantenimiento, migraciones, modernización de legacy systems, consultoría tecnológica

---

## Perfil del Equipo

- Desarrolladores con **más de 20 años de experiencia** en el sector
- Formación académica avanzada: **postgrados, maestrías, diplomados**
- **Certificaciones internacionales** en tecnologías clave (AWS, Google Cloud, Microsoft Azure, Salesforce, etc.)
- Dominio de una **amplia gama de lenguajes, frameworks y plataformas**
- Experiencia tanto en proyectos nacionales (México) como internacionales (USA, Latinoamérica)

---

## Requisitos de Diseño

### Estilo Visual
- **Moderno, tecnológico y llamativo**
- Paleta: oscura/profunda con acentos de color vibrante (sugerencia: azul eléctrico, cian, o verde neón sobre fondo oscuro)
- Tipografía: display font futurista + body font legible
- Estética: tech-premium, similar a empresas como Vercel, Linear, o Stripe pero con carácter propio mexicano/latinoamericano

### Animaciones y Dinámica
- Animaciones de entrada en scroll (fade-in, slide-up)
- Partículas o efectos de fondo animados
- Hover states en cards de servicios
- Contador animado de estadísticas (años de experiencia, proyectos, etc.)
- Transiciones suaves entre secciones

### Responsive / Mobile
- Totalmente adaptada a dispositivos móviles (mobile-first approach)
- Navbar con menú hamburguesa en mobile
- Cards de servicios en columna única en pantallas pequeñas
- Touch-friendly (botones con área mínima de 44px)

---

## Estructura de la Página (Secciones)

1. **Hero** — Headline poderoso, subtítulo, CTA principal, fondo animado
2. **Servicios** — Grid de cards con icono, título y descripción breve de cada servicio
3. **Nosotros / Por qué elegirnos** — Estadísticas animadas + texto sobre el equipo
4. **Tecnologías** — Logos/iconos del stack tecnológico manejado
5. **Proceso de Trabajo** — Timeline o steps del proceso de desarrollo
6. **Testimonios o Casos de Éxito** (placeholder si no hay datos reales)
7. **Contacto / CTA Final** — Formulario de contacto o botón de WhatsApp + datos de contacto
8. **Footer** — Links, redes sociales, copyright

---

## Stack Técnico del Archivo de Salida

- **Un solo archivo HTML** con CSS y JS embebidos
- Sin dependencias externas excepto Google Fonts y posiblemente un CDN para iconos (Lucide o similar)
- JavaScript vanilla para animaciones e interactividad
- Compatible con GitHub Pages (sin backend requerido)

---

## Notas para el Desarrollador / Claude

- El nombre "SoftMex" es provisional — usar variables o comentarios en el código donde aparezca el nombre para facilitar el cambio posterior
- El formulario de contacto puede ser visual (sin backend) o apuntar a un servicio como Formspree
- Dejar comentarios en el código indicando secciones y componentes principales
- Optimizar para velocidad: imágenes como SVG inline o usando gradientes/CSS en lugar de imágenes externas

---

## Archivos del Proyecto

| Archivo | Descripción |
|---|---|
| `CLAUDE.md` | Este archivo — especificaciones del proyecto |
| `index.html` | Landing page principal (HTML + CSS + JS en un solo archivo) |

---

*Última actualización: Mayo 2026*
*Proyecto iniciado con Claude Sonnet 4.6 — Anthropic*
