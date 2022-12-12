import '../assets/stylesheets/components-styles/RecentQuestions.css'
import { useContext } from "react";
import QuestionContext from "../context/QuestionContext";
import Swal from 'sweetalert2';

function RecentQuestions() {
    const { question, setQuestion } = useContext(QuestionContext)

    async function reply(message, id) {
        const { value: diagnpstic } = await Swal.fire({
            title: 'Escribe tu diagnóstico',
            input: 'text',
            inputLabel: message,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Necesitas escribir una respuesta'
                }
            }
        })

        if(diagnpstic){
            question[id].replied = true
            question[id].reply = diagnpstic
        }

    }

    return (
        <div className="recent-questions">
            <h1 className='recent-q-title'>Preguntas Recientes</h1>
            <div className="questions-pool">
                {question.map((qu) => {
                    const text = qu.question
                    const id = qu.id
                    return (
                        <div className="question">
                            <span className="question-content">
                                {text}
                            </span>
                            <button onClick={() => { reply(text,id) }} className='reply'>Responder</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RecentQuestions;