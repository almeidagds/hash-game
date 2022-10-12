import { GameDifficulties } from "../../../enums/game-difficulties";
import styles from "./Menu.module.scss";

export function Menu() {
    return (
        <div className={styles.menu}>
            <label>
                Difficulty: 
                <select name="difficulty" className={styles["menu__difficulty"]}>
                    {
                        Object.keys(GameDifficulties).map((difficulty: string, index) => {
                            const difficultyNameWithFirstLetterInUpper = difficulty.charAt(0).toLocaleUpperCase() + difficulty.slice(1);
                            return <option key={index} value={difficulty}>{difficultyNameWithFirstLetterInUpper}</option>
                        })
                    }
                </select>
            </label>
        </div>
    );
}