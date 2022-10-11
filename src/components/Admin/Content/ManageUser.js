import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus></FcPlus>Add New User</button>
                </div>
                <div className="table-user-container">
                    table user

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}
export default ManageUser;