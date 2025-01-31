import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import '../styles/reset.css';
import '../styles/Sign-up.css';

function SignUp() {
    const [info, setInfo] = useState({
        username: "",
        password: ""
    });

    const inputRef = useRef(null); // Track password input field
    const navToLogin = useNavigate();

    const handleUsernameChange = (e) => {
        setInfo(prev => ({
            ...prev,
            username: e.target.value
        }));
    };

    const handlePasswordInput = (e) => {
        e.preventDefault();

        const realPassword = info.password;
        const newCharacter = e.nativeEvent.data; // Detect typed character

        if (e.nativeEvent.inputType === "deleteContentBackward") {
            setInfo(prev => ({
                ...prev,
                password: prev.password.slice(0, -1),
            }));
        } else if (newCharacter) {
            setInfo(prev => ({
                ...prev,
                password: prev.password + newCharacter,
            }));
        }

        // Show masked version in input
        e.target.value = "🐾".repeat(realPassword.length + (newCharacter ? 1 : -1));
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();

        if (info.username && info.password) {
            localStorage.setItem('info', JSON.stringify(info)); // Save credentials
            navToLogin('/game'); // Redirect to game page
        } else {
            alert("Please fill in both username and password.");
        }
    };

    return (
        <div className="signup__body">
            <div className='signup__body_marking marking-L'></div>
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
                        />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="text" // Keep it text to display paws (🐾)
                            id="password"
                            name="password"
                            ref={inputRef}
                            onBeforeInput={handlePasswordInput} // Mask manually
                            onChange={() => {}} // Prevents default React updates
                            placeholder="Enter password here"
                            autoComplete="off"
                        />
                    </div>
                    <button type='button' onClick={handleSignUpClick}>Sign up</button>
                </div>
            </form>
            <div className='signup__body_marking marking-R'></div>
        </div>
    );
}

export default SignUp;
