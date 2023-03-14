import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Select from 'react-select';
import _ from 'lodash'
import { updateQuizByAdmin } from '../../../../services/apiServices';

const ModalUpdateQuiz = (props) => {

    const options = [
        { value: 'EASY', label: 'Easy' },
        { value: 'MEDIUM', label: 'Medium' },
        { value: 'HARD', label: 'Hard' }
    ]
    const [quizName, setQuizName] = useState("");
    const [quizDes, setQuizDes] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState();
    const [previewImage, setPreviewing] = useState("");
    const { show, setShow, updateQuizData, fectListQuizzes } = props;

    const handleClose = () => {
        setShow(false);
    }
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewing(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
    }
    useEffect(() => {
        if (!_.isEmpty(updateQuizData)) {
            setQuizName(updateQuizData.name);
            setQuizDes(updateQuizData.description);
            if (updateQuizData.image) {
                setPreviewing(`data:image/jpeg;base64,${updateQuizData.image}`)
            }
        }
    }, [updateQuizData])

    const handleSubmitUpdateQuiz = async () => {
        let res = await updateQuizByAdmin(updateQuizData.id, quizDes, quizName, type, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await fectListQuizzes();
        }
        else {
            toast.error(res.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={quizName}
                                onChange={(event) => setQuizName(event.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={quizDes}
                                onChange={(event) => setQuizDes(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
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
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} alt=""></img>
                                :
                                <span>Preview Image</span>
                            }
                            {/* <span>Preview Image</span> */}
                            {/* <img src='https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/302348800_3331865120467929_6145823796706548103_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tpxzdP1qAPYAX8mKRAw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9Wou-mJvlG1eEZNY73wgDzntqbj9yN8j-QT2C4BYVWjQ&oe=634934C3'></img> */}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateQuiz()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUpdateQuiz;