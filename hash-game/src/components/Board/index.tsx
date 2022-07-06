import { useState } from "react";
import style from "./Board.module.scss"
import { Square } from "./Square";

interface Props {
  xIsNext?: boolean;
}
export function Board() {

  let [board, setBoard] = useState({square: Array(9).fill(null), xIsNext: true});
  function setSquare(position: any) {
    if (!board.square[position]) {
      let newBoard = board.square;
      newBoard[position] = board.xIsNext ? "x" : "o";
      setBoard({square: newBoard, xIsNext: !board.xIsNext});
    }
    const isThereMoreSpace = board.square.some((square) => !square);
    if (!isThereMoreSpace) {
      setBoard({square: Array(9).fill(null), xIsNext: true});
    }
  }
  return (
      <div className={style.board}>
        <ul>
          <Square value={board.square[0]} onClick={() => setSquare(0)} />
          <Square value={board.square[1]} onClick={() => setSquare(1)} />
          <Square value={board.square[2]} onClick={() => setSquare(2)} />
          <Square value={board.square[3]} onClick={() => setSquare(3)} />
          <Square value={board.square[4]} onClick={() => setSquare(4)} />
          <Square value={board.square[5]} onClick={() => setSquare(5)} />
          <Square value={board.square[6]} onClick={() => setSquare(6)} />
          <Square value={board.square[7]} onClick={() => setSquare(7)} />
          <Square value={board.square[8]} onClick={() => setSquare(8)} />
        </ul>
      </div>
  );
}