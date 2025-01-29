import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlayGamePage.css'; // Import the CSS for Pokémon theme


const PlayGamePage = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    // Function to navigate to the login page
    const handlePlayGame = () => {
      navigate('/Login'); // Navigate to the login page Emilija: I changed from login to game
    };
  
    return (
      <div className="play-game-page">
        <div className="pokemon-theme">
          
          <h1>Welcome to the Corgi Memory Game!</h1>
          
          {/* Play Game button */}
          <button className="start-button" onClick={handlePlayGame}>
            Play Game
          </button>
        </div>
      </div>
    );
  };
  
  export default PlayGamePage;
