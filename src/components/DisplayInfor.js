import React from "react";
import './DisplayInfor.scss';
// import logo from './../logo.svg';
class DisplayInfor extends React.Component {

    //oop style
    constructor(props) {
        console.log('>> call constructor 1');
        super(props);
        this.state = {
            isShowList: true
        }
    }
    //babel compiler
    // state = {
    //     isShowList: true
    // }

    componentDidMount() {
        console.log('>>Call me component did mount');
        setTimeout(() => {
            document.title('mhung did mount');
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>call me comp did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            alert('you are 4')
        }
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
        console.log("call me render")
        const { listUsers } = this.props;
        const test_variables = { name: 'mhung', age: 18 }
        return (
            <>
                {JSON.stringify(test_variables)}
                <br></br>
                <div className="display-infor-container">
                    {/* <img src={logo} /> */}
                    <div>
                        <button onClick={() => this.handleShowHide()}>{this.state.isShowList === true ? "Hide List Users" : "Show List Users"}</button>
                    </div>
                    {this.state.isShowList &&
                        <div>
                            {
                                listUsers.map((user) => {
                                    return (
                                        <div className={+user.age > 18 ? "green" : "red"}>
                                            My name: {user.name}
                                            <br></br>
                                            Age: {user.age}
                                            <div>
                                                <button onClick={() => this.deleteUser(user.id)}>Delete</button>
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
}
export default DisplayInfor;