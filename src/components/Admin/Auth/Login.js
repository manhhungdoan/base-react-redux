import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../services/apiServices';
import { toast } from 'react-toastify';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../../redux/action/userAction';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBackToHome = () => {
        navigate("/");
    }
    const handleBtnSignUp = () => {
        navigate("/signup");
    }
    const handleVisible = () => {
        setIsVisible(!isVisible);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid Email");
        }
        //submit
        if (isValidEmail) {
            let res = await postLogin(email, password);
            if (res && res.EC === 0) {
                dispatch(doLogin(res));
                toast.success(res.EM);
                navigate("/");
            }
            if (res && res.EC !== 0) {
                toast.error(res.EM);
            }
        }

    }
    return (
        <div className='login-container'>
            <div className='header'>
                Don't have an account yet?
                <button className='btn-signup' onClick={() => handleBtnSignUp()}>Sign Up</button>
            </div>
            <div className='title col-6 col-md-2 text-center mx-auto' onClick={() => handleBackToHome()}>
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
                <div className='form-group input-field'>
                    <label>Password</label>
                    <input
                        type={isVisible ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                    />
                    <button className='btn-visible-password' onClick={() => handleVisible()}>
                        {isVisible ? <BsEyeSlash /> : <BsEye />}
                    </button>
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