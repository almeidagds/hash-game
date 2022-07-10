import style from "./Button.module.scss";

interface Props {
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
}: Props) {

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