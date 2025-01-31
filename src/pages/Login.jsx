import '../styles/reset.css';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigateToGame = useNavigate();
    const inputRef = useRef(null); // To keep track of the cursor position

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "password") {
            setCredentials((prev) => ({ ...prev, password: value }));
        } else {
            setCredentials((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handlePasswordInput = (e) => {
        e.preventDefault();
        
        const realPassword = credentials.password;
        const newCharacter = e.nativeEvent.data; // Get the new character being typed
        
        if (e.nativeEvent.inputType === "deleteContentBackward") {
            // If user presses backspace, remove last character
            setCredentials((prev) => ({
                ...prev,
                password: prev.password.slice(0, -1),
            }));
        } else if (newCharacter) {
            // If a character is typed, add it to the real password
            setCredentials((prev) => ({
                ...prev,
                password: prev.password + newCharacter,
            }));
        }

        // Reset input field value to show only masked characters
        e.target.value = "🐾".repeat(realPassword.length + (newCharacter ? 1 : -1));
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
            <form>
                <div className="login__form">
                    <div>
                        <label htmlFor="username">USERNAME</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username here"
                            onChange={handleChange}
                            value={credentials.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="text" // Keep input type as text to show paws (🐾)
                            id="password"
                            name="password"
                            placeholder="Enter password here"
                            ref={inputRef} // Track input
                            onBeforeInput={handlePasswordInput} // Handle manual typing
                            onChange={() => {}} // Prevent default React update issues
                            autoComplete="off"
                        />
                    </div>
                    <button onClick={handleLoginClick}>Let's Go</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
