import { Link, useLocation } from "react-router-dom";
import { tQuestion } from "../questions";


const Question: React.FC = () => {
    const location = useLocation();
    const question = location.state as tQuestion;
    return (
        <>
            Question! {question.main} 
            {
                question.answers.map((answer) =>
                {
                    if (answer.question)
                    {
                    return <Link to="/ques" state={answer.question}>{answer.main}</Link>    
                    } else if(answer.fortune) {
                        return <h1>{answer.fortune}</h1>
                    }
                    else {
                        return <></>
                    }
                    
                })
            }
            {/* <h1></h1>
            <Link to="/yes1">Good!(^^)</Link>
            <h2></h2>
            <Link to="/no1">Bad!(´･ω･`)</Link>
            <h1></h1>
            <Link to="/">Homeに戻る</Link> */}
        </>
    );
}

export default Question;
