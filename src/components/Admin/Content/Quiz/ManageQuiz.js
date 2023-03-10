import Select from 'react-select';
import "./ManageQuiz.scss";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postNewQuiz } from '../../../../services/apiServices';
const ManageQuiz = (props) => {
    const options = [
        { value: 'EASY', label: 'Easy' },
        { value: 'MEDIUM', label: 'Medium' },
        { value: 'HARD', label: 'Hard' }
    ]
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [image, setImage] = useState("");
    const [previewImage, setPreviewing] = useState("");

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
                <div className="add-new">
                    <fieldset className="border rounded-3 p-3">
                        <legend className="float-none w-auto px-3">Add new Quiz:</legend>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingName"
                                placeholder="Quiz name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <label for="floatingName">Quiz name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text"
                                class="form-control"
                                id="floatingDes"
                                placeholder="Description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <label for="floatingDes">Description</label>
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
                                class="form-control"
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
                    </fieldset>
                </div>
                <div className="list-detail">
                    table
                </div>

            </div >
        </>
    )
}
export default ManageQuiz;