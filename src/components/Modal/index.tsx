import style from "./Modal.module.scss";
import $ from "jquery";

interface Props {
    id: string;
    title: string;
    body: string;
    buttons?: string;
}

export function Modal({id, title, body, buttons}: Props) {

    function closeModal(id: string): void {
        $(`#${id}`).css("display", "none");
    }

    return (
        <div id={id} className={style.modal}>
            <header className={style.title}>
                <h1>{title}</h1>
                <span className={style["close-button"]} onClick={() => closeModal(id)}>
                    X
                </span>
            </header>
            <div className={style.body}>
                {body}
            </div>
            <div className={style.footer}>
                <button className={style.button}>Play again</button>
                <button className={style.button}>Close</button>
            </div>
        </div>
    );
}