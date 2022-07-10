import style from "./Modal.module.scss";
import $ from "jquery";
import { Button, ButtonOptions } from "../Button";

interface Props {
    id: string;
    title: string;
    body: string;
    buttons?: ButtonOptions[];
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
                {
                    buttons?.forEach((button: ButtonOptions, index: number) => {
                        return (
                            <Button backgroundColor={button.backgroundColor}
                                    text={button.text}
                                    type={button.type}
                                    value={button.value}
                                    name={button.name}
                                    onClick={button.onClick}
                                    key={index} />
                        );
                    });
                }
            </div>
        </div>
    );
}