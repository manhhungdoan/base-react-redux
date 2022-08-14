import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                Hello World
                <UserInfor />
                <DisplayInfor
                    name='Đoàn Mạnh Hùng'
                    age='21'
                />
            </div >
        )
    }
}
export default MyComponent;