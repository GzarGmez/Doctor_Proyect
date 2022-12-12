import '../assets/stylesheets/components-styles/Replies.css'
import Messenger from './Messages';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import QuestionContext from '../context/QuestionContext';

function Replies() {

    const{userctx, setUserctx} = useContext(UserContext)
    const{question, setQuestion} = useContext(QuestionContext)

    function loadMsg(msg, reply) {
        if (reply === null) {
            return (
                <>
                    <Messenger content={msg} isOwn={true} />
                    <Messenger content="..." />
                </>)
        } else {
            return (
                <>
                    <Messenger content={msg} isOwn={true} />
                    <Messenger content={reply} />
                </>
            )
        }
    }

    return (
        <div className="replies">
            <div className="reply-container">
                <h1 className="reply-title">Respuestas</h1>
                <div className="messages">
                </div>
            </div>
            <span className="declaimer">Todos los contenidos publicados, especialmente preguntas y respuestas, son de carácter informativo y en ningún caso deben considerarse un sustituto de un asesoramiento médico.</span>
        </div>
    );
}

export default Replies;