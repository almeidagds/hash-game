import { Square } from "../../components/Board/Square";
import styles from "./NotFound.module.scss";

export default function NotFound() {
    return (
        <div className={styles["not-found"]}>
            <div className={styles["not-found__title"]}>
                404
            </div>
            <div className={styles["not-found__description"]}>
                The page you are trying to reach doesn't exist.
            </div>
        </div>
    );
}