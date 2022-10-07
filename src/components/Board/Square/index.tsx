import style from "./Square.module.scss";

export type squareOptions = "x" | "o" | null;

interface Props {
    value: squareOptions;
    onClick: () => void;
}

export function Square({value, onClick}: Props) {

    function renderSVG(value: squareOptions)  {
        if (value === "x") {
            return (
                <svg className={style.cross}>
                    <path className={style['cross-left-line']}></path>
                    <path className={style['cross-right-line']}></path>
                </svg>
            );

        } else if (value === "o") {
            return (
                <svg className={style.circle}>
                    <circle />
                </svg>
            );
        }
    }

    return (
        <li className={style.square} onClick={onClick} >
            {renderSVG(value)}
        </li>
    );
}