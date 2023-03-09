import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from '../../services/apiServices';
import './DetailQuiz.scss';
import _ from 'lodash';
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [showModalResult, setShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});
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
                            item.answers.isSelected = false;
                            answers.push(item.answers);
                        })
                        return { questionId: key, answers, questionDescription, image }
                    })
                    .value()
            // console.log("data", raw)
            // console.log("group data: ", data)
            setDataQuiz(data);
        }

    }
    const handlePrev = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }
    const handleNext = () => {

        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1)
        }
    }
    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz); // React hook doesn't merge state
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId);
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }
    const handleFinish = async () => {
        // {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        let payload = {
            quizId: +quizId,
            answers: []
        };
        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = +question.questionId;
                let userAnswerId = [];

                //todo
                question.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })
        }
        payload.answers = answers;
        //submit api
        let res = await postSubmitQuiz(payload);
        if (res && res.EC === 0) {
            setShowModalResult(true)
            setDataModalResult({
                countCorrect: res.DT.countCorrect,
                countTotal: res.DT.countTotal,
                quizData: res.DT.quizData,
            });
        }
        else {
            alert("error somethings...")
        }
    }
    // console.log("check dataQuizLength:", dataQuiz.length)
    // console.log("check data quiz", dataQuiz);
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
                    <Question
                        index={index}
                        handleCheckbox={handleCheckbox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []
                        } />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handlePrev()}>Prev</button>
                    <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handleFinish()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
            <ModalResult
                show={showModalResult}
                setShow={setShowModalResult}
                dataModalResult={dataModalResult}
            />
        </div>
    )
}

export default DetailQuiz;