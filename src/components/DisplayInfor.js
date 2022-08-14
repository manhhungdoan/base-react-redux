import React from "react";
class DisplayInfor extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                My name is: {name}
                <br></br>
                Age: {age}
            </div>
        )
    }
}
export default DisplayInfor;