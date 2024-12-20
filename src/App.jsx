import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
// import Login from "./pages/Login.jsx";
import Game from "./pages/Game.jsx";
// import UserInfo from "./pages/User-info.jsx";
import SignUp from "./pages/Sign-up.jsx";
import PlayGamePage from "./pages/PlayGamePage.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      
      {location.pathname !== "/game" && <Navbar />}     {/* Render Navbar unless on /game  */}
   
      <Routes>
        <Route path="/" element={<PlayGamePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;