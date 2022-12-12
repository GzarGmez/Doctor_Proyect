import '../assets/stylesheets/components-styles/SendQuestion.css'
import '../assets/stylesheets/components-styles/Replies.css'
import Messenger from './Messages';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

function SendQuestion({ Quest, setQuest }) {

    const { userctx, setUserctx } = useContext(UserContext)
    const [ques, setQues] = useState(null)

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

    function sendQuest(e) {
        e.preventDefault()
        console.log(userctx)
        if (!userctx.logged) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Necesitas iniciar sesión para empezar una conversación'
            })
            return;
        }
        Quest.push({
            "id": Quest.length,
            "question": ques,
            "replied": false,
            "reply": null
        })
        console.log(Quest)
    }

    return (
        <>
            <div className="send-question">
                <form className="question-form" onSubmit={(e) => sendQuest(e)}>
                    <h1 className="forn-title">Tu pregunta</h1>
                    <textarea onKeyUp={(e) => { setQues(e.target.value) }} className='question-input' />
                    <ul className="specifications">
                        <li>Tu pregunta se publicará de forma anónima</li>
                        <li>Intenta de tu consulta médica sea clara y breve</li>
                        <li>La pregunta irá dirigida a todos los especialistas de Doctoralia, no a uno en específico</li>
                        <li>Este servicio no sustituye a una consulta con un profesional de la salud. Si tienes un problema o una urgencia, acude a tu médico o a los servicios de urgencias</li>
                        <li>No se permiten preguntas sobre casos específicos o segundas opiniones</li>
                        <li>Por cuestiones de salud, no se publicarán cantidades ni dosis de medicamento</li>
                    </ul>
                    <button className='primary-btn' type="submit">Enviar</button>
                </form>
            </div>

            <div className="replies">
                <div className="reply-container">
                    <h1 className="reply-title">Respuestas</h1>
                    <div className="messages">
                        {
                            Quest.map((q) => {
                                if (Quest.lenght <= 0) {
                                    return (<h1>No hay mensajes todavía</h1>)
                                }
                                if (q.reply === null) {
                                    return (
                                        <>
                                            <Messenger content={q.question} isOwn={true} />
                                            <Messenger content="..." />
                                        </>)
                                } else {
                                    return (
                                        <>
                                            <Messenger content={q.question} isOwn={true} />
                                            <Messenger content={q.reply} />
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <span className="declaimer">Todos los contenidos publicados, especialmente preguntas y respuestas, son de carácter informativo y en ningún caso deben considerarse un sustituto de un asesoramiento médico.</span>
            </div>
        </>

    );
}

export default SendQuestion;