import '../styles/reset.css';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
 const navigateToGame = useNavigate();

//  const handleLogin = () => {
//     navigateToGame('/game');
//  }
const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleLoginClick = (e) => {
    e.preventDefault();

    // Check if the entered credentials match the stored ones

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
                    <input type="text"
                     id="username" 
                     name="username" 
                     placeholder='Enter username here'
                     onChange={handleChange}
                     value={credentials.username}/>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder='Enter password here'
                    value={credentials.password}
                    onChange={handleChange}/>
                </div>
                <button onClick={handleLoginClick}>Let's Go</button>
            </div>
        </form>
    </div>
    );

 }

 export default Login;