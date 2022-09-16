import React from "react";
import _ from 'lodash';
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Doan Manh Hung', age: 21 },
            { id: 2, name: 'Doan V A', age: 11 },
            { id: 3, name: 'Doan A C', age: 21 }
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (id) => {
        let currentUser = _.clone(this.state.listUsers);
        currentUser = currentUser.filter(user => user.id !== id)
        this.setState({
            listUsers: currentUser
        })
    }
    render() {
        return (
            <div>
                Hello World
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div >
        )
    }
}
export default MyComponent;