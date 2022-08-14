import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Doan Manh Hung', age: 21 },
            { id: 2, name: 'Doan V A', age: 11 },
            { id: 3, name: 'Doan A C', age: 21 }
        ]
    }
    render() {
        return (
            <div>
                Hello World
                <UserInfor />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div >
        )
    }
}
export default MyComponent;