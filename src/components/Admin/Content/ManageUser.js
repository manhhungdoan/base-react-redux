import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add New User</button>
                </div>
                <div>
                    table user

                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;