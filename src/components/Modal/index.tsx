import style from "./Modal.module.scss";
import $ from "jquery";
import { Button } from "../Button";

interface Props {
    id: string;
    title: string;
    body: string;
    buttons?: string;
}

export function Modal({id, title, body, buttons}: Props) {

    function closeModal(id: string): void {
        $(`#${id}`).toggleClass(style["fade-in"]);
        $(`#${id}`).toggleClass(style["fade-out"]);

        setTimeout(() => $(`#${id}`).css("display", "none"), 600);
    }

    return (
        <div id={id} className={style.modal + " " + style["fade-in"]} >
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
                <Button type="button" backgroundColor="blue" text="Play again" onClick={() => console.log("teste")}/>

                <Button type="button" backgroundColor="red" text="Close" onClick={() => closeModal(id)}/>
            </div>
        </div>
    );
}