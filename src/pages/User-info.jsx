import "../styles/user-info.css";
import pkmImage from"../assets/001-bulbasaur.png";

function UserInfo() {
    const pkmNumber = "001";
    const pkmName = "Bulbasaur";
    const userName = "Red";
    const type = "Grass";
    const hiScore = "100";
    const lastScore = "3";
    const gamesPlayed = "66";

    return (
        <div className="ui__body">
            <div className="fave-pkm__banner">
                <div className="fave-pkm__container">
                    <h3>No. {pkmNumber}</h3>
                    <h3>{pkmName}</h3>
                </div>
            </div>
            <div className="info__container">
                <img src={pkmImage} alt="Favourite Pokemon" />
                <div>
                    <div className="user-info">
                        <h4>User:</h4>
                        <p>{userName}</p>
                    </div>
                    <div className="user-info">
                        <h4>Type:</h4>
                        <p>{type}</p>
                    </div>
                    <div className="game-info">
                        <h4>High Score:</h4>
                        <p>{hiScore}</p>
                    </div>
                    <div className="game-info">
                        <h4>Last Score:</h4>
                        <p>{lastScore}</p>
                    </div>
                    <div className="game-info">
                        <h4>Games Played:</h4>
                        <p>{gamesPlayed}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserInfo;