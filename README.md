# 🎨 Kiruki - Make It Happen

Sitio web corporativo y catálogo de productos al por mayor de **Kiruki**, desarrollado en **React** con **Vite** y gestor de paquetes **pnpm**.

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (`npm i -g pnpm`)

## 🛠️ Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar servidor local de desarrollo:**
   ```bash
   pnpm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Compilar para producción:**
   ```bash
   pnpm run build
   ```

4. **Previsualizar la build de producción:**
   ```bash
   pnpm run preview
   ```

## 📁 Estructura del Proyecto

```text
Kiruki-Make-It-Happen/
├── public/                # Archivos estáticos (assets, imágenes, catálogo PDF)
├── src/
│   ├── components/        # Componentes React (Navbar, Header, Products, Modal 3D, etc.)
│   ├── data/              # Base de datos de productos y categorías
│   ├── App.jsx            # Layout principal
│   ├── main.jsx           # Punto de entrada de React
│   └── style.css          # Sistema de diseño y estilos visuales Kiruki 2.0
├── index.html             # HTML principal montado en Vite
├── package.json           # Dependencias y scripts de pnpm
└── vite.config.js         # Configuración de Vite
```
