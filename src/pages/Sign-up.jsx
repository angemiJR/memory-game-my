import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Sign-up.css';

function SignUp() {

    const [info, setInfo] = useState({ //defines the object to be stored
        username: "",
        password: ""
    });

    const handleUsernameChange = (e) => {   //updates the username
        let updatedValue = {};
        updatedValue = {username: e.target.value}
        setInfo(info => ({
            ...info,
            ...updatedValue
        }));
    }
    const handlePasswordChange = (e) => {   //updates the password
        let updatedValue = {};
        updatedValue = {password: e.target.value}
        setInfo(info => ({
            ...info,
            ...updatedValue
        }));
    }
    const navToLogin = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault()        
        if (info.username && info.password) {
            localStorage.setItem('info', JSON.stringify(info)); // Save credentials
                                //submits the info as wth the key of 'info' to local storage
        //  alert("Sign in successful!");

        // Redirect to the login page
        navToLogin('/game');
        } else {
        alert("Please fill in both username and password."); 
        }
    }
    return (
        <div className="signup__body">
            <div className='signup__body_marking marking-L'></div>
            <form action="">
                <div className="signup__form">
                    <div>
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" name="username" onChange={handleUsernameChange} placeholder='Select a username' />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" id="password" name="password" onChange={handlePasswordChange} placeholder='Select a password' />
                    </div>
                    <button type='button' onClick={handleSignUpClick}>SIGN UP</button>
                </div>
            </form>
            <div className='signup__body_marking marking-R'></div>
        </div>
    )
}

export default SignUp;