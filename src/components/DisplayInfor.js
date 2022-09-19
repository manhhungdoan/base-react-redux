import React, { useState } from "react";
import './DisplayInfor.scss';
// import logo from './../logo.svg';
// class DisplayInfor extends React.Component {

//     //oop style
//     // constructor(props) {
//     //     console.log('>> call constructor 1');
//     //     super(props);
//     //     this.state = {
//     //         isShowList: true
//     //     }
//     // }
//     //babel compiler
//     // state = {
//     //     isShowList: true
//     // }

//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowList: !this.state.isShowList
//     //     })
//     // }
//     // deleteUser = (id) => {
//     //     this.props.handleDeleteUser(id);
//     // }

//     //statekess(Khong co state) vs stateful(Co state)
//     render() {
//         console.log("call me render")
//         const { listUsers } = this.props; //Nhan du lieu tu thang cha
//         const test_variables = { name: 'mhung', age: 18 }
//         return (
//             <>
//                 {JSON.stringify(test_variables)}
//                 <br></br>
//                 <div className="display-infor-container">
//                     {/* <img src={logo} /> */}
//                     {/* <div>
//                         <button onClick={() => this.handleShowHide()}>{this.state.isShowList === true ? "Hide List Users" : "Show List Users"}</button>
//                     </div> */}
//                     {true &&
//                         <div>
//                             {
//                                 listUsers.map((user) => {
//                                     return (
//                                         <div className={+user.age > 18 ? "green" : "red"}>
//                                             My name: {user.name}
//                                             <br></br>
//                                             Age: {user.age}
//                                             <div>
//                                                 <button onClick={() => this.deleteUser(user.id)}>Delete</button>
//                                             </div>
//                                             <hr></hr>
//                                         </div>
//                                     )
//                                 }
//                                 )
//                             }
//                         </div>
//                     }
//                 </div>
//             </>
//         )
//     }
// }


//Chuyển class sang function sẽ không có this
const DisplayInfor = (props) => {
    const { listUsers } = props;//object

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    //Destructuring assignment
    // this.state = {
    //     isShowHideListUser = true;
    // }

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <>
            <br></br>
            <div className="display-infor-container">
                <div>
                    <button onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? "Hide list user" : "Show list users"}</button>
                </div>
                {isShowHideListUser &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div className={+user.age > 18 ? "green" : "red"}>
                                        My name: {user.name}
                                        <br></br>
                                        Age: {user.age}
                                        <div>
                                            <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                        </div>
                                        <hr></hr>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                }
            </div>
        </>
    )
}
export default DisplayInfor;