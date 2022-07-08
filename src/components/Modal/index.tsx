import style from "./Modal.module.scss";

interface Props {
    title?: string;
    body?: string;
    buttons?: string;
}

export function Modal({title, body, buttons}: Props) {

    return (
        <div className={style.modal}>
            <h1 className={style.title}>E o vencedor é...</h1>
            <div className={style.body}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,

            </div>
            <div className={style.footer}>botão 1 e botão 2</div>
        </div>
    );
}