import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { postCreateUser } from '../../../services/apiServices';
const ModalCreateUser = (props) => {
    const { show, setShow, setCurrentPage, fetchListUsersWithPaginate } = props;
    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("USER")
        setImage("")
        setPreviewing("")
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewing] = useState("");

    const handleUploadImage = (event) => {
        // console.log("upload file", event.target.files[0])
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewing(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid Email");
        }
        let res = await postCreateUser(email, password, username, role, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            setCurrentPage(1);
            await fetchListUsersWithPaginate(1);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }

    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'><FcPlus></FcPlus>Upload an image</label>
                            <input
                                className="form-control"
                                type="file"
                                id='labelUpload'
                                hidden value={""}
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
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;