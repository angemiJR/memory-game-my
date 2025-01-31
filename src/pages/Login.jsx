import '../styles/reset.css';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Corgi from "../assets/kuce_3.png";
import Cloud from "../assets/cloud.png";

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigateToGame = useNavigate();

    const handleUsernameChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            username: e.target.value
        }));
    };

    const handlePasswordChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            password: e.target.value
        }));
    };

    const handleLoginClick = (e) => {
        e.preventDefault();

        const storedInfo = JSON.parse(localStorage.getItem("info"));

        if (
            storedInfo &&
            storedInfo.username === credentials.username &&
            storedInfo.password === credentials.password
        ) {
            navigateToGame("/game"); // Redirect to the game page
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="login__body">
            <div className='text'>
                <div className="container">
                    <img className='corgi' src={Corgi} alt="Corgi" />
                    <div className="cloud_container">
                        <img className='cloud' src={Cloud} alt="Cloud" />
                        <h2>Let's Log in!</h2>
                    </div>
                </div>
                <form>
                    <div className="login__form">
                        <div>
                            <label htmlFor="username">USERNAME</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleUsernameChange}
                                placeholder="Enter username here"
                                value={credentials.username}
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
                                value={credentials.password}
                            />
                        </div>
                        <button type='button' onClick={handleLoginClick}>Let's Go</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
