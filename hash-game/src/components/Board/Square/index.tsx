import style from "./Square.module.scss";

interface Props {
    value?: any;
    onClick?: () => void;
}

export function Square({value, onClick}: Props) {

    function renderCorrectValue(value: any)  {

        let valueElement;

        if (value === "x") {
            valueElement = <svg className={style.cross}>
            <path className={style['cross-left-line']}></path>
            <path className={style['cross-right-line']}></path>
            </svg>
            return valueElement;
        } else if (value === "o") {
            valueElement = <svg className={style.circle}>
            <circle />
            </svg>;
            return valueElement;
        }
        return "";
    }

    return (
        <li className={style.square} onClick={onClick} >
            {renderCorrectValue(value)}
        </li>
    );
}