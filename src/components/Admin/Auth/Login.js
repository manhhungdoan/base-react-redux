import { useState } from 'react';
import './Login.scss';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className='login-container'>
            <div className='header'>
                Don't have an account yet?
                <button className='btn-signup'>Sign Up</button>
            </div>
            <div className='title col-4 text-center mx-auto'>
                mhungit
            </div>
            <div className='welcome text-center col-4 mx-auto'>
                Hello, who is this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button className='btn-login'>Login to mhungit</button>
                </div>
            </div>
        </div>
    )
}
export default Login;