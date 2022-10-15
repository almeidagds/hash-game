import { useState } from "react";
import { GameDifficulties } from "../../../enums/game-difficulties";
import styles from "./Menu.module.scss";

interface IMenu {
    handlePlayersChange: () => any
    handleDifficultyChange: () => any,
}
export function Menu({ handleDifficultyChange, handlePlayersChange }: IMenu) {

    let [players, setPlayers] = useState(1);

    return (
        <div className={styles.menu}>
            <span className={styles["menu__game-mode"]}>

                <input type="radio" 
                    id="one-player" 
                    name="game-mode" 
                    value="1" 
                    className={styles["menu__game-mode__input"]} 
                    onChange={() => handlePlayersChange()}/>
                <label htmlFor="one-player" 
                    className={styles["menu__game-mode__label"]} 
                    onClick={() => setPlayers(1)}>
                    1 player
                </label>

                <input type="radio" 
                    id="two-players" 
                    name="game-mode" 
                    value="2 players" 
                    className={styles["menu__game-mode__input"]}
                    onChange={() => handlePlayersChange()} />
                <label htmlFor="two-players"
                    className={styles["menu__game-mode__label"]} 
                    onClick={() => setPlayers(2)}>
                    2 players
                </label>
           
            </span>

            <span className={styles["menu__difficulty"]}>
                <label htmlFor="difficulty" 
                    className={styles["menu__difficulty__label"]}>
                    Difficulty: 
                </label>
                <select id="difficulty" 
                    name="difficulty" 
                    className={styles["menu__difficulty__input"]}
                    disabled={players !== 1}
                    onChange={handleDifficultyChange()}>
                    {
                        Object.keys(GameDifficulties).map((difficulty: string, index) => {
                            const difficultyNameWithFirstLetterInUpper = difficulty.charAt(0).toLocaleUpperCase() + difficulty.slice(1);
                            return <option key={index} value={difficulty}>{difficultyNameWithFirstLetterInUpper}</option>
                        })
                    }
                </select> 
            </span>
        </div>
    );
}