import React from 'react';
import Select from 'react-select';
import './ManageQuestions.scss'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

const ManageQuestions = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [questions, setQuestions] = useState(
        [
            {
                id: uuidv4(),
                description: "question 1",
                image: "",
                ansers: [
                    {
                        id: uuidv4(),
                        description: 'answer 1',
                        isCorrect: false
                    }
                ]
            }
        ]
    )

    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion = {
                id: uuidv4(),
                description: "",
                image: "",
                ansers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    }
                ]
            }
            setQuestions([...questions, newQuestion])
        }
        if (type === "REMOVE") {
            let questionsClone = _.cloneDeep(questions);
            questionsClone = questionsClone.filter(item => item.id !== id);
            setQuestions(questionsClone);
        }
    }
    const handleAddRemoveAnswer = (type, q_id, a_id) => {
        let questionsClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnswer = {
                id: uuidv4(),
                description: '',
                isCorrect: false
            }

            let index = questionsClone.findIndex(item => item.id === q_id)
            questionsClone[index].ansers.push(newAnswer)
            setQuestions(questionsClone);
        }
        if (type === 'REMOVE') {
            let index = questionsClone.findIndex(item => item.id === q_id)
            questionsClone[index].ansers = questionsClone[index].ansers.filter(item => item.id !== a_id);
            setQuestions(questionsClone)
        }
    }

    return (
        <>
            <div className="manage-questions-container">
                <div className="title mb-4">Questions Manager</div>
                <Select
                    // value={}
                    onChange={() => { }}
                    options={options}
                    placeholder={"Choose Quiz"}
                />
                <hr />
                <h4>Questions:</h4>
                <span onClick={() => handleAddRemoveQuestion('ADD', '')} className="btn btn-success btn-add mt-3"><AiFillPlusCircle className='icon-add' />Add new question</span>
                {
                    questions && questions.length > 0 && questions.map((question, index) => {
                        return (
                            <div key={question.id} className='content mt-3'>
                                <div className="questions-content my-3">
                                    <div className="form-control mb-3">
                                        <label htmlFor="floatingInput">Question {index + 1}:</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="Name"
                                            value={question.description} />
                                        <input
                                            id="uploadCaptureInputFile"
                                            type="file"
                                            // className="form-control"
                                            placeholder=""
                                        // onChange={(event) => handleUploadImage(event)}
                                        ></input>
                                        {
                                            questions.length > 1 &&
                                            <span onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}><AiFillMinusCircle className='icon-remove' /></span>
                                        }
                                    </div>
                                </div>
                                {question.ansers && question.ansers.length && question.ansers.map((answer, index) => {
                                    return (
                                        <div key={answer.id} className='answers-content'>
                                            <div className='form-control'>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-text">
                                                        <input
                                                            class="form-check-input mt-0"
                                                            type="checkbox"
                                                            checked={answer.isCorrect}
                                                            aria-label="Checkbox for following text input"
                                                        />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        aria-label="Text input with checkbox"
                                                        value={answer.description}
                                                    />
                                                </div>
                                                {question.ansers.length > 1 &&
                                                    <span onClick={() => handleAddRemoveAnswer("REMOVE", question.id, answer.id)}><AiFillMinusCircle className='icon-remove' /></span>
                                                }

                                            </div>
                                        </div>
                                    )
                                })}
                                <span onClick={() => handleAddRemoveAnswer('ADD', question.id)} className="btn btn-outline-info">Add new answer</span>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default ManageQuestions;