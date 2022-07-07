import { useState } from "react";
import style from "./Board.module.scss"
import { Square, squareOptions } from "./Square";

export function Board() {

  let [board, setBoard] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function setSquareValue(index: number) {

    if (!board.squares[index]) {

      const squares = board.squares;
      squares[index] = board.xIsNext ? "x" : "o";

      setBoard({
        squares: squares, 
        xIsNext: !board.xIsNext
      });

      const winner = calculateWinner(squares);

      if (winner) {
        console.log("Winner: " + winner);
        setBoard({
          squares: Array(9).fill(null),
          xIsNext: true
        });
      }
    }
  }

  function calculateWinner(squares: squareOptions[]): squareOptions | void {
    const winnerLines: Array<number[]> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winner;
    winnerLines.forEach((winnerLine) => {
      const [a, b, c] = winnerLine;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winner = squares[a];
      }
    });

    return winner;
  }
  
  return (
      <div className={style.board}>
        <ul>
          <Square value={board.squares[0]} onClick={() => setSquareValue(0)} />
          <Square value={board.squares[1]} onClick={() => setSquareValue(1)} />
          <Square value={board.squares[2]} onClick={() => setSquareValue(2)} />
          <Square value={board.squares[3]} onClick={() => setSquareValue(3)} />
          <Square value={board.squares[4]} onClick={() => setSquareValue(4)} />
          <Square value={board.squares[5]} onClick={() => setSquareValue(5)} />
          <Square value={board.squares[6]} onClick={() => setSquareValue(6)} />
          <Square value={board.squares[7]} onClick={() => setSquareValue(7)} />
          <Square value={board.squares[8]} onClick={() => setSquareValue(8)} />
        </ul>
      </div>
  );
}