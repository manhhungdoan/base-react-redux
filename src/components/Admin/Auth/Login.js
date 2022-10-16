import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../services/apiServices';
import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    }
    const handleLogin = async () => {
        //validate

        //submit
        let res = await postLogin(email, password);
        console.log('test login >>', res);
        if (res && res.EC === 0) {
            toast.success(res.EM);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className='login-container'>
            <div className='header'>
                Don't have an account yet?
                <button className='btn-signup'>Sign Up</button>
            </div>
            <div className='title col-6 col-md-2 text-center mx-auto'>
                mhungit
            </div>
            <div className='welcome text-center col-6 col-md-2 mx-auto'>
                Hello, who is this?
            </div>
            <div className='content-form col-6 col-md-2 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        autoFocus="autoFocus"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <div className='input-group'>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button className='btn-login' onClick={() => handleLogin()}>Login to mhungit</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => handleBackToHome()}> &#60; Back to Homepage</span>
                </div>
            </div>
        </div >
    )
}
export default Login;