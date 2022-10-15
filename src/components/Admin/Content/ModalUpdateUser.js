import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiServices';
import { useEffect } from 'react';
import _ from 'lodash'
const ModalUpdateUser = (props) => {
    const {
        show,
        setShow,
        dataUpdate,
        setDataUpdate,
        fetchListUsersWithPaginate,
        currentPage
    } = props;
    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("USER")
        setImage("")
        setPreviewing("")
        setDataUpdate("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewing] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            //updateState
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setPassword(dataUpdate.password)
            setRole(dataUpdate.role)
            setImage("")
            if (dataUpdate.image) {
                setPreviewing(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }

        console.log(dataUpdate);
    }, [dataUpdate])
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewing(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
    }
    const handleSubmitUpdateUser = async () => {
        let res = await putUpdateUser(dataUpdate.id, username, role, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            console.log(currentPage);
            await fetchListUsersWithPaginate(currentPage);
        }
        if (res && res.EC !== 0) {
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
                    <Modal.Title>Update User</Modal.Title>
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
                                disabled
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
                                disabled
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
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;