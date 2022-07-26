import React from 'react';
import '../styles/Testimonio.css';

//Las exportaciones nombradas llevan "export" antes del "function" y donde se importa llevaria {}
function Testimonio( props ) {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-img' 
           src={ require(`../images/avatar-${ props.image }.png`) } alt='logo rojo' />
      <div className='testimonialText-container'>
        <p className='testimonial-name'>{ props.name } en { props.country } </p>
        <p className='testimonial-position'>{ props.position } en { props.company } </p>
        <p className='testimonial-text'> "{ props.testimonial }" </p>
      </div>
    </div>
  );
}

//Este tipo de exportación(por defecto) es para cuando solo hay una función a exportar
export default Testimonio;