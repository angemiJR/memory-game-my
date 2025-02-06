import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlayGamePage.css'; // Import the CSS for Pokémon theme
import Corgi from"../assets/kuce.png";


const PlayGamePage = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    // Function to navigate to the login page
    const handlePlayGame = () => {
      navigate('/Game'); // Navigate to the login page Emilija: I changed from login to game
    };
  
    return (
      <div className="play-game-page">
        <div className="box">
        <div className='corgi_G'>
          <img src={Corgi} alt="" />
        </div>
        <div className="pokemon-theme">
          
          <h1>Welcome to the Corgi Memory Game!</h1>
          
          {/* Play Game button */}
          <button className="start-button" onClick={handlePlayGame}>
            Play Game
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default PlayGamePage;
