import style from "./Modal.module.scss";
import $ from "jquery";
import { Button, ButtonOptions } from "../Button";
import { v4 as uuidv4 } from 'uuid';


interface Props {
    id?: string;
    title: string;
    body: string;
    buttons: ButtonOptions[];
}

export function Modal({id = uuidv4(), title, body, buttons}: Props) {
    
    function closeModal(id: string): void {
        $(`#${id}`).toggleClass(style["fade-in"]);
        $(`#${id}`).toggleClass(style["fade-out"]);
        setTimeout(() => $(`#${id}`).css("display", "none"), 600);
    }

    const modalButtons = buttons.map((button: ButtonOptions) => {
        return <Button type={button.type} text={button.text} onClick={button.onClick} backgroundColor={button.backgroundColor} />
    });

    return (
        <div id={id} className={`${style.modal} ${style["fade-in"]}`} >
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
                {modalButtons}
            </div>
        </div>
    );
}