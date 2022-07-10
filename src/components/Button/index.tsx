interface Props {
    type: "button" | "reset" | "submit";
    value?: string;
    name?: string;
    text: string;
    onClick: () => void;
}

export function Button({
    type = "button",
    value,
    name,
    text,
    onClick
}: Props) {


    return (
        <button type={type}
                value={value}
                name={name}
                onClick={() => onClick()}>
            {text}
        </button>
    );
}