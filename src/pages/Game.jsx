import '../styles/reset.css';
import "../styles/Game.css";
import React, { useState, useEffect } from "react";
import Cards from "../components/Cards.jsx";
import Score from "../components/Score.jsx";
import GameOver from "../components/GameOver.jsx";
import { Link } from "react-router-dom";

function Game() {
    const [cardData, setCardData] = useState([]); // Stores shuffled cards
    const [flippedCards, setFlippedCards] = useState([]); // Tracks flipped cards
    const [matchedCards, setMatchedCards] = useState([]); // Tracks matched cards
    const [score, setScore] = useState(0); // Game score
    const [mistakes, setMistakes] = useState(0); // Tracks number of mistakes
    const [isGameOver, setIsGameOver] = useState(false); // Game over state
    const [time, setTime] = useState(0); // Timer state
    const [successMessage, setSuccessMessage] = useState(""); // Success message state

    // Fetch data from specific image list and initialize cards
    useEffect(() => {
        fetchCardData();
    }, []);

    // Timer effect
    useEffect(() => {
        if (isGameOver) return;

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount or when game ends
    }, [isGameOver]);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    // Fetch specific card data
    const fetchCardData = async () => {
        try {
            // Define specific image URLs with unique IDs
            const specificImages = [
                { id: 1, content: "https://images.pexels.com/photos/4445617/pexels-photo-4445617.jpeg" },
                { id: 2, content: "https://images.pexels.com/photos/4445619/pexels-photo-4445619.jpeg" },
                { id: 3, content: "https://images.pexels.com/photos/27547181/pexels-photo-27547181/free-photo-of-a-corgi-dog-with-a-ball-on-its-head.jpeg" },
                { id: 4, content: "https://images.pexels.com/photos/4445620/pexels-photo-4445620.jpeg" },
                { id: 5, content: "https://images.pexels.com/photos/4445615/pexels-photo-4445615.jpeg" },
                { id: 6, content: "https://images.pexels.com/photos/4445624/pexels-photo-4445624.jpeg" },
                { id: 7, content: "https://images.pexels.com/photos/10922896/pexels-photo-10922896.jpeg" },
                { id: 8, content: "https://images.pexels.com/photos/4772940/pexels-photo-4772940.jpeg" },
                { id: 9, content: "https://images.pexels.com/photos/4641868/pexels-photo-4641868.jpeg" },
            ];

            // Duplicate and shuffle cards
            const shuffledCards = shuffleArray(
                [...specificImages, ...specificImages].map((card, index) => ({
                    ...card,
                    uniqueId: index, // Unique ID for each card instance
                }))
            );

            setCardData(shuffledCards);
        } catch (error) {
            console.error("Error setting specific images:", error);
        }
    };

    // Shuffle an array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Handle card click
    const handleCardClick = (card) => {
        if (flippedCards.length === 2 || flippedCards.some((c) => c.uniqueId === card.uniqueId)) return;

        const newFlippedCards = [...flippedCards, card];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            checkForMatch(newFlippedCards);
        }
    };

    // Check if two flipped cards match
    const checkForMatch = (cards) => {
        const [firstCard, secondCard] = cards;

        if (firstCard.id === secondCard.id) {
            setMatchedCards((prev) => {
                const updatedMatches = [...prev, firstCard.id];

                // Check if all cards are matched
                if (updatedMatches.length === cardData.length / 2) {
                    setIsGameOver(true);
                    setSuccessMessage(`Great job! Your time is ${formatTime(time)}. Can you beat that?`);
                }

                return updatedMatches;
            });
            setScore((prev) => prev + 1);
        } else {
            setMistakes((prev) => {
                const newMistakes = prev + 1;
                if (newMistakes >= 15) {
                    setIsGameOver(true); // Trigger game over
                }
                return newMistakes;
            });
        }

        setTimeout(() => {
            setFlippedCards([]);
        }, 1000);
    };

    // Check if a card is flipped or matched
    const isFlipped = (card) =>
        flippedCards.some((c) => c.uniqueId === card.uniqueId) || matchedCards.includes(card.id);

    // Reset the game
    const resetGame = () => {
        setFlippedCards([]);
        setMatchedCards([]);
        setScore(0);
        setMistakes(0);
        setIsGameOver(false);
        setTime(0); // Reset time
        setSuccessMessage(""); // Reset success message
        fetchCardData();
    };

    return (
        <div className="main">
            <div className="header">
                <Link to="/" className="back_link">
                    <button className="back_btn">Back</button>
                </Link>
                <Score score={score} />
                <h2>Mistakes: {mistakes} / 15</h2>
                <h2>Time: {formatTime(time)}</h2>
                <button onClick={resetGame}>Reset game</button>
            </div>

            {isGameOver && matchedCards.length === cardData.length / 2 ? (
                <div className="success_message">
                    <h2>{successMessage}</h2>
                    <button onClick={resetGame} className="play_again_btn">Play Again</button>
                </div>
            ) : isGameOver ? (
                <div className="game_over">
                    <GameOver />
                </div>
            ) : (
                <div className="cards">
                    {cardData.map((card) => (
                        <Cards
                            key={card.uniqueId}
                            content={card.content}
                            isFlipped={isFlipped(card)}
                            onClick={() => handleCardClick(card)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Game;
