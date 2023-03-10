import Select from 'react-select';
import "./ManageQuiz.scss";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postNewQuiz, getAllQuizByAdmin } from '../../../../services/apiServices';
import TableQuizzes from './TableQuizzes';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
const ManageQuiz = (props) => {
    const options = [
        { value: 'EASY', label: 'Easy' },
        { value: 'MEDIUM', label: 'Medium' },
        { value: 'HARD', label: 'Hard' }
    ]
    const [listQuizzes, setListQuizzes] = useState([]);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [image, setImage] = useState("");
    const [previewImage, setPreviewing] = useState("");

    useEffect(() => {
        fectListQuizzes();
    }, [])
    const fectListQuizzes = async () => {
        let res = await getAllQuizByAdmin();
        if (res && res.EC === 0) {
            setListQuizzes(res.DT);
        }
    }

    const handleUploadImage = (event) => {
        // console.log("upload file", event.target.files[0])
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewing(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
    }

    const handleSubmit = async () => {
        let res = await postNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            await fectListQuizzes()
            setName("");
            setDescription("")
            setPreviewing("")
            setType("")
            document.getElementById("uploadCaptureInputFile").value = "";
        }
        else {
            toast.error(res.EM);
        }
    }
    return (
        <>
            <div className="manage-container">
                <div className="title">
                    Manage Quizzes
                </div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Add new Quiz</Accordion.Header>
                        <Accordion.Body>
                            <div className="add-new">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingName"
                                        placeholder="Quiz name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <label htmlFor="floatingName">Quiz name</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text"
                                        className="form-control"
                                        id="floatingDes"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                    />
                                    <label htmlFor="floatingDes">Description</label>
                                </div>
                                <div className='my-3'>
                                    <Select options={options}
                                        placeholder="Difficulty"
                                        value={type}
                                        onChange={setType}
                                    />
                                </div>
                                <div>
                                    <label className='mb-1'>Quiz Image:</label>
                                    <input
                                        id="uploadCaptureInputFile"
                                        type="file"
                                        className="form-control"
                                        placeholder="Choose file"
                                        onChange={(event) => handleUploadImage(event)}
                                    ></input>
                                </div>
                                <div className='col-md-12 mt-3 preview-img'>
                                    {previewImage ?
                                        <img src={previewImage} alt=""></img>
                                        :
                                        <span>Preview Image</span>
                                    }
                                </div>
                                <div className='mt-3'>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handleSubmit()}
                                    >Save</button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="list-detail mt-4 mb-1">
                    <TableQuizzes
                        listQuizzes={listQuizzes}
                        fectListQuizzes={fectListQuizzes}
                    />
                </div>

            </div >
        </>
    )
}
export default ManageQuiz;