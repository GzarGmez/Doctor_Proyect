import doctors from '../assets/Images/Doctors.png'
import '../assets/stylesheets/views-styles/Landing.css'

function Greeting() {
    return (
        <>
            <div className="greeting">
                <div className="title">
                    <h1 className="title-greeting">
                        SIEMPRE AL CUIDADO
                    </h1>
                    <h1 className="subtitle-greeting">
                        DE NUESTRAS PACIENTES
                    </h1>
                </div>
                <div className="doctor-images">
                    <img src={doctors} alt="Doctors" />
                </div>

            </div>
        </>
    );
}

export default Greeting;