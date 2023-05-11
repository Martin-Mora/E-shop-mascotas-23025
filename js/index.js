const FILA=document.querySelector('.inicio-contenedor-carrusel-ofertas');
const FLECHA_IZQUIERDA=document.querySelector('.inicio-flecha-izquierda');
const FLECHA_DERECHA=document.querySelector('.inicio-flecha-derecha');

const FILA_DESTACADOS=document.querySelector('.inicio-contenedor-carrusel-productos-destacados');
const FLECHA_IZQUIERDA_DESTACADOS=document.getElementById('inicio-flecha-izquierda');
const FLECHA_DERECHA_DESTACADOS=document.getElementById('inicio-flecha-derecha');

// Mover las imágenes con la flecha derecha Ofertas//
FLECHA_DERECHA.addEventListener('click', () => {
  FILA.scrollLeft= FILA.scrollLeft + FILA.offsetWidth;
});
// Mover las imágenes con la flecha izquierda //
FLECHA_IZQUIERDA.addEventListener('click', () =>{
  FILA.scrollLeft= FILA.scrollLeft - FILA.offsetWidth;
});

// Mover las imágenes con la flecha derecha Productos destacados//
FLECHA_DERECHA_DESTACADOS.addEventListener('click', () => {
  FILA_DESTACADOS.scrollLeft= FILA_DESTACADOS.scrollLeft + FILA_DESTACADOS.offsetWidth;
});
// Mover las imágenes con la flecha izquierda //
FLECHA_IZQUIERDA_DESTACADOS.addEventListener('click', () =>{
  FILA_DESTACADOS.scrollLeft= FILA_DESTACADOS.scrollLeft - FILA_DESTACADOS.offsetWidth;
});