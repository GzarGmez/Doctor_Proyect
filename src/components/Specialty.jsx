import '../assets/stylesheets/components-styles/Specialty.css'
import image1 from '../assets/Images/Especialidad-1.png'
import image2 from '../assets/Images/Especialidad-2.png'
import image3 from '../assets/Images/Especialidad-3.png'

function Specialty() {
    return ( 
        <div className="specialty">

            <h1 className="title-specialty">Especialidades</h1>

            <div className="cards-containers">

                <div className="card">

                    <img src={image3} className="image-card"/>
                    <span className="decription">Consultoria</span>
                </div>

                <div className="card">
                    <img src={image2} className="image-card"/>
                    <span className="decription">Cirugía</span>
                </div>

                <div className="card">
                    <img src={image1} className="image-card"/>
                    <span className="decription">Investigación</span>
                </div>

            </div>

        </div>
     );
}

export default Specialty;