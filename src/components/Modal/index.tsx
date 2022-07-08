import style from "./Modal.module.scss";

interface Props {
    title?: string;
    body?: string;
    buttons?: string;
}

export function Modal({title, body, buttons}: Props) {

    return (
        <div className={style.modal}>
            <header className={style.title}>
                <h1>And the winner is...</h1>
                <span className={style["close-button"]}>
                    X
                </span>
            </header>
            <div className={style.body}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </div>
            <div className={style.footer}>
                <button className={style.button}>Play again</button>
                <button className={style.button}>Close</button>
            </div>
        </div>
    );
}