import _ from "lodash";
import { getQuizByUser } from "../../services/apiServices";
import './DetailQuiz.scss';
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    const handleHanleCheckbox = (event, aId, qId) => {
        // console.log("check: ", event.target.checked)
        // console.log("data props:", aId, qId)
        props.handleCheckbox(aId, qId);
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
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="exampleRadios3"
                                    checked={a.isSelected}
                                    onChange={(event) => handleHanleCheckbox(event, a.id, data.questionId)}
                                />
                                <label className="form-check-label" htmlFor="exampleRadios3">
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