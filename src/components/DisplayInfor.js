import React from "react";
class DisplayInfor extends React.Component {
    state = {
        isShowList: true
    }
    handleShowHide = () => {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <button onClick={() => this.handleShowHide()}>{this.state.isShowList === true ? "Hide List Users" : "Show List Users"}</button>
                </div>
                {this.state.isShowList &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age ? "green" : "red"}>
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
        )
    }
}
export default DisplayInfor;