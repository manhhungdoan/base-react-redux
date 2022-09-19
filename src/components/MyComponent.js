import React, { useState } from "react";
import _ from 'lodash';
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: 'Doan Manh Hung', age: 21 },
//             { id: 2, name: 'Doan V A', age: 11 },
//             { id: 3, name: 'Doan A C', age: 21 }
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         console.log(userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (id) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== id);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         return (
//             <>
//                 Hello World
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </ >
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Doan Manh Hung', age: 21 },
        { id: 2, name: 'Doan V A', age: 11 },
        { id: 3, name: 'Doan A C', age: 21 }
    ])
    const handleAddNewUser = (userObject) => {
        setListUsers([userObject, ...listUsers])
    }

    const handleDeleteUser = (id) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== id)
        setListUsers(listUsersClone);
    }
    return (
        <>
            Hello World
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </ >
    )
}

export default MyComponent;