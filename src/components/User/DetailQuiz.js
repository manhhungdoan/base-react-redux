import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';

const DetailQuiz = (props) => {
    const params = useParams();

    const quizId = params.id;
    console.log("check quizid:", quizId)
    useEffect(() => {
        fetchQuestion();
    }, [quizId])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let data = res.DT;
            let raw =
                _.chain(data)
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
            console.log("data", data)
            console.log("group data: ", raw)
        }

    }
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz;