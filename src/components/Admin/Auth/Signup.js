import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupBackground from '../../../asset/signup-image.png';
import './Signup.scss';
import { postSignup } from '../../../services/apiServices';
import { toast } from 'react-toastify';
import { BsEyeSlash, BsEye } from 'react-icons/bs'
const Signup = () => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleSignup = async () => {
        let res = await postSignup(email, username, password);
        if (res && res.EC === 0) {
            toast.success(res.EM);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM)
        }
    }

    const handleBackToHome = () => {
        navigate('/');
    }
    const handleBtnSignin = () => {
        navigate('/login');
    }
    const handleVisible = () => {
        setIsVisible(!isVisible);
    }
    return (
        <>
            <div className="signup-container">
                <div className="signup-bg d-none d-lg-block">
                    <div className='signup-bg-content'>
                        <span className='bg-title'>Sign up
                            <br></br>and come on in</span>
                        <img src={signupBackground} alt=""></img>
                        <span className='bg-copyright'></span>
                    </div>
                </div>
                <div className='signup-content'>
                    <div className='header'>
                        <span>Already have an account?</span>
                        <button className='btn-signup' onClick={() => handleBtnSignin()}>Log in</button>
                    </div>
                    <div className='title col-10 col-md-5 text-center mx-auto' onClick={() => handleBackToHome()}>mhungit</div>
                    <div className='welcome col-10 col-md-5 mx-auto text-center'>Get better data with conversational forms, surveys, quizzes & more.</div>
                    <div className='content-form col-10 col-md-5 mx-auto'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type={'email'}
                                className="form-control"
                                autoFocus="autoFocus"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Email"
                            ></input>
                            <span></span>
                        </div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input
                                type={'text'}
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder="Username"
                            ></input>
                        </div>
                        <div className='form-group input-field'>
                            <label>Password</label>
                            <input
                                type={isVisible ? 'text' : 'password'}
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                            ></input>
                            <button className='btn-visible-password' onClick={() => handleVisible()}>
                                {isVisible ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                I agree to Typeform’s Terms of Service, Privacy Policy and Data Processing Agreement.
                            </label>
                        </div>
                        <div>
                            <button className='btn-signup' onClick={() => handleSignup()}>Create my free account</button>
                        </div>
                        <div className='text-center'>
                            <span className='back' onClick={() => handleBackToHome()} > &#60; Back to Homepage</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;