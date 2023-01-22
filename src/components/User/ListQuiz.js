import { useState } from "react";
import { useEffect } from "react";
import { getQuizByUser } from "../../services/apiServices";
import './ListQuiz.scss';
import { useNavigate } from "react-router-dom";
const ListQuiz = (props) => {
    const navigate = useNavigate();
    const [arrQuiz, setArrQuiz] = useState([]);
    useEffect(() => {
        getQuizData();
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }
    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 && arrQuiz.map((quiz, index) => {
                return (
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={`data:image/jpeg;base64,${quiz.image}`} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{quiz.description}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                            >Start Quiz</button>
                        </div>
                    </div>
                )
            })}
            {arrQuiz && arrQuiz.length === 0 &&
                <div>
                    You don't have Quiz!
                </div>
            }
        </div>
    )
}

export default ListQuiz;