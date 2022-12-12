import '../assets/stylesheets/components-styles/Messages.css'
import { FaUserAlt, FaUserMd } from 'react-icons/fa'


function Messenger({content,isOwn=false}) {

    function msgSent(){
        return(
            <div className="sent">
                <span className="sent-content">{content}</span> <FaUserAlt className='user-icon'/>
            </div>
        )
    }

    function msgReceived(){
        return(
            <div className="received">
                <FaUserMd className='user-icon'/><span className="received-content">{content}</span>
            </div>
        )
    }

    return ( 
        <>
        {
            isOwn ? msgSent() : msgReceived()
        }
        </>
     );
}

export default Messenger;