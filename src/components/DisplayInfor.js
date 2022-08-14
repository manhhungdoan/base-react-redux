import React from "react";
class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                My name: {user.name}
                                <br></br>
                                Age: {user.age}
                                <hr></hr>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}
export default DisplayInfor;