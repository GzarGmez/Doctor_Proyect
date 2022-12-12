import img from '../assets/Images/online-doctor.png'
import '../assets/stylesheets/components-styles/InstructionAsk.css'

function InstructionAsk() {
    return ( 
        <div className="instruction-ask">
            <div className="text-aside">
                <h1 className="ask-instruction">
                    Realiza tu pregunta
                </h1>
                <span>
                    Podrás resolver, de forma anónima, todas tus dudas en materia de salud.
                </span>
                <ul className="ask-features">
                    <li>Recibirás una respuesta fiable y de calidad.</li>
                    <li>Tu duda será resulta en 48 horas</li>
                    <li>Y, por supuesto, de forma gratuita.</li>
                </ul>
            </div>
            <img src={img} alt="Doctor" className="img-ask" />
        </div>
     );
}

export default InstructionAsk;