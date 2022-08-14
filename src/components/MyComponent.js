import React from "react";
class MyComponent extends React.Component {
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
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div onSubmit={(event) => this.handleOnSubmit(event)}>
                Hello World
                <div>My name is {this.state.name} from {this.state.address}</div>
                <button onClick={(event) => { this.handClick(event) }}>Click me</button>
                <form>
                    <input type='text' onChange={(event) => this.handOnchange(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent;