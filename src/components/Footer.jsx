import '../assets/stylesheets/components-styles/Footer.css'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    return ( 
        <footer>
            <img src="src\assets\Images\Caduceus-blue.svg" alt="Caduceus" className='logo-type-footer'/>
            <div className="social-links">
                <TiSocialFacebookCircular className='icon-link' color='2589BD'/>
                <AiOutlineInstagram className='icon-link' color='2589BD'/>
                <AiOutlineTwitter className='icon-link' color='2589BD'/>
            </div>
        </footer>
     );
}

export default Footer;