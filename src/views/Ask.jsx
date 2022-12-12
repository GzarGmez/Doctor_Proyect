import InstructionAsk from "../components/InstructionAsk";
import Replies from "../components/Replies";
import SendQuestion from "../components/SendQuestion";
import { useContext } from "react";
import QuestionContext from "../context/QuestionContext";

function Ask() {
    const {question, setQuestion} = useContext(QuestionContext)
    return (
        <>
            <InstructionAsk />
            <SendQuestion setQuest={setQuestion} Quest={question}/>
        </>
    );
}

export default Ask;