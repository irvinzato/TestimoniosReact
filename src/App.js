import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='principal-content'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          image='mujer' 
          name='Angeles López'
          country='México'
          position='Ingeniera de Software'
          company='Spotify'
          testimonial='Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify.' />
        
        <Testimonio
          image='mujer2' 
          name='Jade López'
          country='Singapur'
          position='Ingeniera de Software'
          company='ChatDesk'
          testimonial='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
        
        <Testimonio
          image='hombre' 
          name='Irving Rivera'
          country='Noruega'
          position='Ingeniero de Software'
          company='Amazon'
          testimonial='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
      </div>
    </div>
  );
}

export default App;
