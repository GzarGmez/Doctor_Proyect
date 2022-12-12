import img from '../assets/Images/Doctor-Experience.png'
import '../assets/stylesheets/components-styles/Experience.css'

function Experience() {
    return (
        <div className="experience">
            <img src={img} alt="Doctor pointer something" className="img-doctor-ex" />
            <div className="text-experience">
                <span className='regular'>CON MAS DE 20 AÑOS</span>
                <span className="blue-bold">DE EXPERIENCIA </span>
                <span className='regular'>SIEMPRE DANDO</span>
                <span className="blue-bold">UN SERVICIO DE CALIDAD</span>
            </div>
        </div>
    );
}

export default Experience;