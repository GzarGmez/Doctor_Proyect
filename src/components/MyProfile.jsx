import '../assets/stylesheets/components-styles/MyProfile.css'
import img from '../assets/Images/me-as-medical.png'

function MyProfile() {
    return ( 
        <div className='my-profile'>
            <div className="info-container">
                <h1 className="greet">Bienvenida</h1>
                <span className="name">Wendy Janet Guizar Gomez</span>
            </div>
            <img src={img}className="me" />
        </div>
     );
}

export default MyProfile;