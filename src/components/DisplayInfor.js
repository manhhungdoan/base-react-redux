import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
class DisplayInfor extends React.Component {
    state = {
        isShowList: true
    }
    handleShowHide = () => {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }
    deleteUser = (id) => {
        this.props.handleDeleteUser(id);
    }
    render() {
        const { listUsers } = this.props;
        return (
            <>
                <div className="display-infor-container">
                    <img src={logo} />
                    <div>
                        <button onClick={() => this.handleShowHide()}>{this.state.isShowList === true ? "Hide List Users" : "Show List Users"}</button>
                    </div>
                    {this.state.isShowList &&
                        <div>
                            {
                                listUsers.map((user) => {
                                    return (
                                        <div onClick={() => this.deleteUser(user.id)} className={+user.age > 18 ? "green" : "red"}>
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
                    }
                </div>
            </>
        )
    }
}
export default DisplayInfor;