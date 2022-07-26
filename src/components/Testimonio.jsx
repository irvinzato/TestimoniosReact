import React from 'react';
import '../styles/Testimonio.css';

//Las exportaciones nombradas llevan "export" antes del "function" y donde se importa llevaria {}
function Testimonio() {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-img' 
           src={ require('../images/avatar-mujer.png') } alt='logo rojo' />
      <div className='testimonialText-container'>
        <p className='testimonial-name'>Angeles López en México</p>
        <p className='testimonial-position'>Ingeniera de Software</p>
        <p className='testimonial-text'>"Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
      </div>
    </div>
  );
}

//Este tipo de exportación(por defecto) es para cuando solo hay una función a exportar
export default Testimonio;