import { Link } from "react-router-dom";
import Question from "./Question";
import { questionTree } from "../questions";



const Home: React.FC = () => {
    return (
        <>Homeだよ～　 Are You Ready?
            <h1></h1>
            <Link to="/ques" state={questionTree}>Yes!</Link>
        </>  

);    
}

export default Home;
