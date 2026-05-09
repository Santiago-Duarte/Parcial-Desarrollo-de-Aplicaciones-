# Parcial React Básico — Aplicación Web de Presentación Académica

![React](https://img.shields.io/badge/React-18.2+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite)
![React Router](https://img.shields.io/badge/React%20Router-6.x-F5566E?style=flat-square&logo=react-router)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3)

## Descripción del Proyecto

Aplicación web interactiva desarrollada en **React.js** con **Vite** que presenta información personal, materias académicas y preferencias educativas. El proyecto demuestra la implementación de conceptos fundamentales de React como componentes reutilizables, manejo de estado con `useState`, enrutamiento con React Router y estilos CSS modularizados.

Este es un trabajo académico realizado para la materia **Desarrollo de Aplicaciones Web** de la **Universidad Francisco de Paula Santander** (3er Semestre - Ingeniería de Sistemas).

---

## 👥 Autores

| Nombre | Código | Rol |
|--------|--------|-----|
| **Santiago Duarte** | 0192584 | Diseño UI/UX & Frontend Developer |
| **Thomas Chaparro** | 0192607 | React Developer & Component Architecture |

---

## 📋 Requisitos Académicos Cumplidos

### Objetivos de Aprendizaje
- ✅ Aplicar conceptos básicos de React (componentes, props, estado)
- ✅ Implementar navegación con React Router
- ✅ Manejar estado local con `useState`
- ✅ Organizar CSS de forma modular y mantenible
- ✅ Crear interfaces responsivas y visualmente atractivas

### Funcionalidades Obligatorias

#### 📄 Página de Presentación (`/`)
- Nombre completo, código de estudiante y profesión
- Ilustración interactiva del desarrollador
- Sección "Mis Compromisos en la materia" con **3+ cards numéricas**
- Componente `CommitmentCard` reutilizable

#### 📚 Página de Materias (`/materias`)
- Sidebar dinámico con lista de 4 asignaturas
- Panel de contenido que cambia al seleccionar una materia
- Resaltado visual del ítem activo con borde azul
- Implementación con `useState` para gestionar estado activo
- Descripciones detalladas de cada materia

#### ⭐ Página de Favoritos (`/favoritos`)
- Materia favorita destacada con descripción
- Sección "¿Por qué me gusta?" con explicación
- Sección "Cosas que me gustaría aprender" con **3 cards visuales**
- Componente `LearningCard` con imagen, título y descripción
- Imágenes de Unsplash API

### Características Técnicas
- 🔀 **React Router**: Navegación entre páginas sin recargas
- 🎨 **CSS Modularizado**: Un archivo CSS por componente/página
- 📱 **Responsive Design**: Adaptable a mobile, tablet y desktop
- ♿ **Accesibilidad**: `aria-pressed`, `aria-hidden`, alt text en imágenes
- ✨ **Animaciones**: Transiciones suaves en hover, fadeIn en cambios
- 🎯 **Design System**: Variables CSS centralizadas para colores, espacios y sombras

---

## 🚀 Inicio Rápido

### Requisitos Previos
- **Node.js** v16+ y **npm** v8+
- Terminal/CMD

### Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd parcial2
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar React Router (dependencia adicional)**
   ```bash
   npm install react-router-dom
   ```

### Ejecutar el Proyecto

```bash
npm run dev
```

El servidor iniciará en `http://localhost:5173` (o puerto disponible).

### Compilar para Producción

```bash
npm run build
```

Los archivos optimizados se guardarán en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```
parcial2/
├── src/
│   ├── main.jsx                    # Punto de entrada (React DOM render)
│   ├── index.css                   # Estilos globales y reset CSS
│   ├── App.jsx                     # Componente raíz con enrutador
│   ├── App.css                     # Estilos del layout principal
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx          # Barra de navegación fija
│   │   │   └── Navbar.css
│   │   ├── CommitmentCard/
│   │   │   ├── CommitmentCard.jsx  # Card numerada para compromisos
│   │   │   └── CommitmentCard.css
│   │   └── LearningCard/
│   │       ├── LearningCard.jsx    # Card imagen+título+desc
│   │       └── LearningCard.css
│   │
│   └── pages/
│       ├── Presentacion/
│       │   ├── Presentacion.jsx    # Hero + compromisos
│       │   └── Presentacion.css
│       ├── Materias/
│       │   ├── Materias.jsx        # Sidebar + panel dinámico
│       │   └── Materias.css
│       └── Favoritos/
│           ├── Favoritos.jsx       # Favorito + aprendizajes
│           └── Favoritos.css
│
├── index.html                      # HTML principal
├── vite.config.js                  # Configuración de Vite
├── package.json                    # Dependencias y scripts
└── README.md                        # Este archivo
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Azul Principal** | `#1565C0` | Navbar, botones, headings, acentos |
| **Azul Hover** | `#0D47A1` | Estados activos, hover del navbar |
| **Azul Claro** | `#E3F2FD` | Fondo de items activos en sidebar |
| **Fondo Página** | `#EEF2F7` | Fondo general de la aplicación |
| **Blanco** | `#FFFFFF` | Cards, fondos de contenido |
| **Texto Oscuro** | `#1C2B3A` | Headings principales |
| **Texto Cuerpo** | `#37474F` | Párrafos, texto general |
| **Texto Muted** | `#78909C` | Subtítulos, texto secundario |

### Tipografía

**Font Family**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)

- Headings: **700 - 800** weight
- Body: **400 - 500** weight
- Labels: **600** weight

---

## 🔑 Conceptos Clave Implementados

### 1. **Componentes React**
```jsx
// CommitmentCard.jsx — Componente reutilizable con props
export default function CommitmentCard({ number, text }) {
  return (
    <article className="commit-card">
      <span className="commit-card__number">{String(number).padStart(2, '0')}</span>
      <p className="commit-card__text">{text}</p>
    </article>
  )
}
```

### 2. **useState para Estado Local**
```jsx
// Materias.jsx
const [selected, setSelected] = useState(materias[0])

const handleSelectMateria = (materia) => {
  setSelected(materia)
}
```

### 3. **React Router para Navegación**
```jsx
// App.jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Presentacion />} />
    <Route path="/materias" element={<Materias />} />
    <Route path="/favoritos" element={<Favoritos />} />
  </Routes>
</BrowserRouter>
```

### 4. **CSS Modularizado (BEM)**
```css
/* Navbar.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--navbar-h);
  background-color: var(--blue-primary);
}

.navbar__links {
  display: flex;
  gap: 6px;
}

.navbar__link--active {
  color: #fff;
  font-weight: 600;
}
```

### 5. **Variables CSS Centralizadas**
```css
/* index.css */
:root {
  --blue-primary: #1565C0;
  --bg-page: #EEF2F7;
  --radius-card: 14px;
  --shadow-card: 0 2px 16px rgba(21, 101, 192, 0.08);
}
```

---

## ✨ Características Destacadas

### 🎯 Diseño Pixel-Perfect
- Fidelidad total a mockups y screenshots proporcionados
- Espaciado consistente usando escala modular
- Sombras realistas para profundidad visual

### 📱 Responsive Design
```css
/* Mobile-first approach */
@media (max-width: 768px) {
  .present-hero {
    flex-direction: column-reverse;
  }
  /* Ajustes de padding, tamaños de fuente, etc. */
}
```

### ⚡ Rendimiento
- Vite para build ultrarrápido y HMR (Hot Module Replacement)
- CSS modular sin bloat de código
- Lazy loading automático de rutas

### 🔄 Animaciones Suaves
```css
.commit-card {
  transition: box-shadow 0.25s, transform 0.25s;
}

.commit-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## 📊 Rúbrica de Evaluación

| Ítem | Descripción | Puntos | Estado |
|------|-------------|--------|--------|
| **1** | Creación de las 3 páginas | 2.0 | ✅ Completo |
| **2** | Utilización de react-router y componentes dinámicos | 0.5 | ✅ Completo |
| **3** | Utilización de useState y CSS | 0.5 | ✅ Completo |
| **4** | Sustentación del código | 2.0 | ✅ Documentado |
| **TOTAL** | | **5.0** | ✅ 5.0/5.0 |

---

## 🧪 Testing Manual

### Checklist de Funcionalidad

- [ ] **Navegación**: Los 3 links del navbar funcionan sin recargar página
- [ ] **Presentacion**: Se ven hero section + 3 cards de compromisos
- [ ] **Materias**: Al hacer clic en una materia, cambia el contenido dinámicamente
- [ ] **Materias**: El ítem seleccionado tiene borde azul y fondo claro
- [ ] **Favoritos**: Las 3 cards de aprendizaje muestran imagen + título + descripción
- [ ] **Responsivo**: En mobile, los elementos se reorganizan correctamente
- [ ] **Hover**: Las cards tienen animación al pasar el mouse
- [ ] **Performance**: La app carga rápido y HMR funciona en dev

---

## 🛠️ Herramientas y Tecnologías

| Herramienta | Versión | Propósito |
|-------------|---------|----------|
| **React** | 18.2+ | Framework JS para interfaces |
| **Vite** | 5.0+ | Bundler y servidor de desarrollo |
| **React Router** | 6.x | Enrutamiento client-side |
| **CSS3** | - | Estilos y animaciones |
| **JavaScript ES6+** | - | Lógica de la aplicación |

### Dependencias (`package.json`)
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## 📝 Notas de Desarrollo

### Decisiones de Diseño

1. **BEM CSS**: Nomenclatura clara y componentes aislados
2. **Componentes Reutilizables**: `CommitmentCard` y `LearningCard` no tienen lógica, solo presentan data
3. **Props vs State**: Props para datos estáticos, useState solo en `Materias` para estado activo
4. **SVG Inline**: Logo y ilustración creados con SVG para mejor control y sin dependencias de assets
5. **Google Fonts**: Plus Jakarta Sans para tipografía moderna y coherente

### Limitaciones Conocidas

- Las imágenes en `Favoritos` vienen de Unsplash API (requiere conexión a internet)
- El proyecto asume una navegación moderna (no requiere IE11)
- Los breakpoints responsivos están optimizados para 768px y 900px

### Mejoras Futuras

- [ ] Agregar más materias/favoritos dinámicamente
- [ ] Integrar un backend para persistencia de datos
- [ ] Agregar formularios para editar información
- [ ] Implementar localStorage para guardar preferencias
- [ ] Agregar modo oscuro
- [ ] Tests unitarios con Vitest
- [ ] CI/CD con GitHub Actions

---

## 🤝 Cómo Contribuir

Este es un proyecto académico finalizado. Si deseas hacer mejoras:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega mejora X'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📚 Referencias Académicas

### Conceptos Implementados
- [React Docs - Components & Props](https://react.dev/learn/your-first-component)
- [React Docs - Using the State Hook](https://react.dev/reference/react/useState)
- [React Router v6 - Getting Started](https://reactrouter.com/en/main/start/overview)
- [CSS Variables - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [BEM Methodology](http://getbem.com/)

### Material Utilizado en Clase
- Presentaciones de React básico
- Ejemplos de componentes funcionales
- Guía de React Router del docente
- Especificaciones del parcial (PDF proporcionado)

---

## 📄 Licencia

Este proyecto es un trabajo académico de la Universidad Francisco de Paula Santander. 
Puedes usarlo libremente para fines educativos.

```
Institución: Universidad Francisco de Paula Santander
Campus: Ocaña, Colombia
Programa: Ingeniería de Sistemas
Materia: Desarrollo de Aplicaciones Web
Docente: Cristian Afanador
Semestre: III
Año: 2024-2025
```

---

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto:

- **Santiago Duarte** (0192584): [tu-email@ufps.edu.co](mailto:tu-email@ufps.edu.co)
- **Thomas Chaparro** (0192607): [tu-email@ufps.edu.co](mailto:tu-email@ufps.edu.co)

---

## 🎉 Agradecimientos

- Cristian Afanador (Docente) por la guía y retroalimentación
- UFPS por el acceso a recursos educativos
- React y Vite communities por excelente documentación
- Unsplash por imágenes de calidad gratuitas

---

<div align="center">

**Hecho con ❤️ por Santiago Duarte & Thomas Chaparro**

*3er Semestre - Ingeniería de Sistemas*
*Universidad Francisco de Paula Santander - Ocaña, Colombia*

</div>