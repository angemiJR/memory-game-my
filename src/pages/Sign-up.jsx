import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Sign-up.css';
import Corgi from "../assets/kuce sign.png";
import Cloud from "../assets/cloud.png";

function SignUp() {
    const [info, setInfo] = useState({ username: "", password: "" });
    const navigateToGame = useNavigate();

    const handleUsernameChange = (e) => {
        setInfo(prev => ({
            ...prev,
            username: e.target.value
        }));
    };

    const handlePasswordChange = (e) => {
        setInfo(prev => ({
            ...prev,
            password: e.target.value
        }));
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();

        if (info.username && info.password) {
            localStorage.setItem('info', JSON.stringify(info)); // Save credentials
            navigateToGame('/game'); // Redirect to game page
        } else {
            alert("Please fill in both username and password.");
        }
    };

    return (
        <div className="signup__body">
            <div className='text'>
                <div className="container">
                    <img className='corgi_R' src={Corgi} alt="Corgi" />
                    <div className="cloud_container">
                    <h2>Let's Sign Up!</h2>
                        <img className='cloud' src={Cloud} alt="Cloud" />
                       
                    </div>
                </div>
                <form>
                    <div className="signup__form">
                        <div>
                            <label htmlFor="username">USERNAME</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleUsernameChange}
                                placeholder="Enter username here"
                                value={info.username}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">PASSWORD</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handlePasswordChange}
                                placeholder="Enter password here"
                                value={info.password}
                            />
                        </div>
                        <button type='button' onClick={handleSignUpClick}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
