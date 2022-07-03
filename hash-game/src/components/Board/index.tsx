import { useState } from "react";
import style from "./Board.module.scss"
import { Square } from "./Square";

interface Props {
  //squares?: Array<"x" | "o" | null>;
  xIsNext?: boolean;
}
export function Board({xIsNext = true}: Props) {

  let [squares, setSquares] = useState<any[]>(Array(9).fill(null));
  
  return (
      <div className={style.board}>
        <ul>
          {squares.map((squareValue, index) => <Square value={squareValue} key={index} />)}
        </ul>
      </div>
  );
}