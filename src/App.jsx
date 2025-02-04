import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Game from "./pages/Game.jsx";
import SignUp from "./pages/Sign-up.jsx";
import PlayGamePage from "./pages/PlayGamePage.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const location = useLocation(); // Get the current route
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  // If in portrait mode, show a message instead of the app
  if (isPortrait) {
    return (
      <div className="landscape">
       <h2>Please rotate your device to landscape mode.</h2> 
      </div>
    );
  }

  return (
    <>
      {location.pathname !== "/game" && <Navbar />} {/* Render Navbar unless on /game */}
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
