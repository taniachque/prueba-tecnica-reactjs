# Prueba Técnica Frontend

Este proyecto es una aplicación web desarrollada con React.js que consume la API de JSONPlaceholder para mostrar publicaciones y comentarios.

## Descripción

La aplicación permite la paginación de publicaciones, filtrado por usuario y búsqueda de publicaciones por título o contenido. Se ha hecho un esfuerzo por reutilizar componentes para mejorar la modularidad y la mantenibilidad del código.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Página principal con lista paginada de publicaciones.
- Controles de navegación para la paginación.
- Campo de búsqueda para filtrar publicaciones por título o contenido.
- Detalles de publicación en una subruta, incluyendo comentarios.
- Reutilización de componentes para publicaciones y comentarios.

## Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React Router](https://reactrouter.com/)
- [CSS](para estilos personalizados)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/taniachque/prueba-tecnica-reactjs.git  
   
   Instalar las dependencias:
bash

Copy
npm install
Uso
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

bash

Copy
npm start
Esto abrirá la aplicación en [http://localhost:3000].

Estructura del Proyecto
src/
components/: Componentes reutilizables para publicaciones y comentarios.
pages/: Páginas de la aplicación (página principal y detalles de publicación).
App.js: Componente principal que configura las rutas.
index.js: Punto de entrada de la aplicación.