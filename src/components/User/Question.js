import _ from "lodash";
import { getQuizByUser } from "../../services/apiServices";
import './DetailQuiz.scss';
const Question = (props) => {
    const { data, index } = props;
    console.log("check dataQuiz: ", data);
    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (
        <>
            {data.image ?
                <div className='quiz-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`}></img>
                </div> :
                <div className='quiz-image'>
                </div>

            }
            <div className="question">
                Question {index + 1}: {data.questionDescription}
            </div>
            <div className="answer">
                {data.answers.map((a, index) => {
                    return (
                        <div key={`answer-${index}`}
                            className="answer-child">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                <label class="form-check-label" for="exampleRadios3">
                                    {a.description}
                                </label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Question;