import { Link } from "react-router-dom";
import "./styles/Navbar.css"

function Navbar () {

    // const userName = "Ferret"; removing this for now, keeping it if we need it later

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link className="nav_a" to="/Login">Log in</Link></li>
                    {/* <li><Link to="/login">Log In</Link></li> */}
                    <li><Link className="nav_a" to="/sign-up">Sign up</Link></li>
                    {/* <li><Link to="/user-info">{userName}</Link></li> */}
                    <li><Link className="nav_a" to="/">Start page</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;