import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from '../../services/apiServices';
import './DetailQuiz.scss';
import _ from 'lodash';

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log("check location:", location);
    const quizId = params.id;
    console.log("check quizid:", quizId)
    useEffect(() => {
        fetchQuestion();
    }, [quizId])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data =
                _.chain(raw)
                    // Group the elements of Array based on `color` property
                    .groupBy("id")
                    // `key` is group's name (color), `value` is the array of objects
                    .map((value, key) => {
                        let answers = [];
                        let questionDescription, image = null;
                        value.forEach((item, index) => {
                            if (index === 0) {
                                questionDescription = item.description;
                                image = item.image;
                            }
                            answers.push(item.answers);
                        })
                        return { questionId: key, answers, questionDescription, image }
                    })
                    .value()
            console.log("data", raw)
            console.log("group data: ", data)
        }

    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <div className="quiz-body">
                    <img></img>
                </div>
                <div className="quiz-content">
                    <div className="question">
                        Question 1: Test location?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. Select 1</div>
                        <div className="a-child">B. Select 2</div>
                        <div className="a-child">C. Select 3</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>

                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;