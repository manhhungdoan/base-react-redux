import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import { useState, useEffect } from "react";
import TableUsers from "./TableUsers";
import { getAllUsers } from "../../../services/apiServices";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [listUsers, setlistUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const handleSubmitBtnUpdate = () => {
    }
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
                    <TableUsers
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleSubmitBtnUpdate={handleSubmitBtnUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                />
            </div>
        </div>
    )
}
export default ManageUser;