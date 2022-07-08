import style from "./Modal.module.scss";

interface Props {
    message: string;
}

export function Modal() {

    return (
        <div className={style.modal}>
            <h1>teste</h1>
        </div>
    );
}