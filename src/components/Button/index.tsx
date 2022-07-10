import style from "./Button.module.scss";

export interface ButtonOptions {
    type: "button" | "reset" | "submit";
    backgroundColor?: "red" | "blue" | string;
    value?: string;
    name?: string;
    text: string;
    onClick: () => void;
}

export function Button({
    type = "button",
    backgroundColor = "blue",
    value,
    name,
    text,
    onClick
}: ButtonOptions) {

    return (
        <button className={`${style.button} ${backgroundColor === "blue" ? style["button-bg-blue"] : style["button-bg-red"]}`}
            type={type}
            value={value}
            name={name}
            onClick={() => onClick()}>
            {text}
        </button>
    );
}