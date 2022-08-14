import React from "react";
class UserInfor extends React.Component {
    //JSX
    state = {
        name: 'mhung',
        address: 'Phu Tho',
        age: 21
    }
    handClick() {
        console.log('click me', this.state.name);
        this.setState({
            name: 'Doan Manh Hung'
        });
    }
    handOnchange = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    handleChangeAge = (event) => {
        this.setState(
            {
                age: event.target.value
            }
        )
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div>My name is {this.state.name} from {this.state.address}</div>
                <button onClick={(event) => { this.handClick(event) }}>Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input value={this.state.name} type='text' onChange={(event) => this.handOnchange(event)}></input>
                    <button>Submit</button>
                </form>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your age: </label>
                    <input value={this.state.age} type='text' onChange={(event) => this.handleChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;