import img from '../assets/Images/me-as-medical.png'
import '../assets/stylesheets/components-styles/MedicalCard.css'

function MedicalCard() {
    return ( 
        <div className="medical-card">
            <img src={img} alt="Me as Medical" className="me" />
            <div className="medical-info">
                <h1 className="profession">Doctora</h1>
                <span className="doctor-name">Wendy Janet Guizar Gomez</span>
                <span className="id-number">No. de cédula: 12284011 11998336 11041845</span>
            </div>
        </div>
     );
}

export default MedicalCard;