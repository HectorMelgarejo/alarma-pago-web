# Alarmas de Pago — Web

Aplicación web para el sistema de alarmas de pago de servicios y facturas, desarrollada en Angular. Proyecto del curso *Mejoramiento de la experiencia de usuario* (Universidad de los Andes).

## Descripción

Permite a los usuarios llevar control de sus obligaciones de pago (servicios, arriendo, seguros, etc.), visualizar cuáles están pendientes o pagadas, y consultar un resumen mensual filtrado por mes y categoría.

## Pantallas incluidas

- **Dashboard**: resumen de obligaciones pendientes y pagadas, accesos directos a Alarmas y Resumen mensual.
- **Alarmas**: listado de obligaciones con filtro por pestañas (Todas / Pendientes / Pagadas).
- **Resumen mensual**: filtros por mes y categoría, total pagado y detalle de pagos.
- **Detalle de obligación**: información completa de una obligación individual.

## Tecnologías

- Angular (standalone components)
- SCSS con sistema de diseño propio (tokens de color, tipografía y componentes según *style tile* del proyecto)

## Cómo ejecutar el proyecto

\`\`\`bash
npm install
npm start
\`\`\`

La aplicación queda disponible en `http://localhost:4200`.

## Estructura del proyecto

\`\`\`
src/app/
├── core/              # Servicios (datos de obligaciones)
├── shared/            # Componentes reutilizables (botón, badge, list-item, etc.)
└── pages/             # Pantallas: dashboard, alarmas, resumen-mensual, detalle-obligacion
\`\`\`

## Autor

Héctor Melgarejo — Curso UX, Universidad de los Andes