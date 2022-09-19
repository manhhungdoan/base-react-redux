import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//     //JSX
//     state = {
//         name: 'mhung',
//         address: 'Phu Tho',
//         age: 21
//     }
//     handClick() {
//         console.log('click me', this.state.name);
//         this.setState({
//             name: 'Doan Manh Hung'
//         });
//     }
//     handOnchange = (event) => {
//         this.setState(
//             {
//                 name: event.target.value
//             }
//         )
//     }
//     handleChangeAge = (event) => {
//         this.setState(
//             {
//                 age: event.target.value
//             }
//         )
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div>My name is {this.state.name} age: {this.state.age}</div>
//                 <button onClick={(event) => { this.handClick(event) }}>Click me</button>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input value={this.state.name} type='text' onChange={(event) => this.handOnchange(event)}></input>
//                     <label>Your age: </label>
//                     <input value={this.state.age} type='text' onChange={(event) => this.handleChangeAge(event)}></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


//React Hook
const AddUserInfor = (props) => {
    const [name, setName] = useState('mhung')
    const [address, setAddress] = useState('Phutho')
    const [age, setAge] = useState('21')

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + 'random',
                name: name,
                age: age
            }
        )
    }
    return (
        <>
            <div>My name is: {name} -- age: {age} -- Address: {address}</div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Your name: </label>
                <input value={name} type="text" onChange={(event) => handleOnChangeName(event)} ></input>
                ---
                <label>Your age:</label>
                <input value={age} type='text' onChange={(event) => handleOnChangeAge(event)}></input>
                ---
                <label>Your address: </label>
                <input value={address} type='text' onChange={(event) => handleOnChangeAddress(event)}></input>
                <button>Submit</button>
            </form>
        </>
    )
}
export default AddUserInfor;