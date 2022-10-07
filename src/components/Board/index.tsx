import { useState } from "react";
import style from "./Board.module.scss"
import { Square, squareOptions } from "./Square";

export function Board() {

  let [board, setBoard] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function setSquareValue(index: number) {

    const squares = board.squares;
    const isSelectedSquareEmpty = !board.squares[index];
    const isGameOver = checkIfIsGameOver();

    if (isSelectedSquareEmpty && !isGameOver) {
  
      squares[index] = board.xIsNext ? "x" : "o";
      
      setBoard({
        squares: squares, 
        xIsNext: !board.xIsNext
      });
    }
  }

  function checkIfIsGameOver(): boolean {
    const squares = board.squares;
    return !!calculateWinner(squares) || calculateDraw(squares);
  }

  function calculateWinner(squares: squareOptions[]): squareOptions | null {
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

    let winner = null;

    winnerLines.forEach((winnerLine) => {
      const [a, b, c] = winnerLine;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winner = squares[a];
      }
    });

    return winner;
  }
  
  function calculateDraw(squares: squareOptions[]): boolean {
    return !squares.some(square => !square) && !calculateWinner(squares);
  }

  function restartGame() {
    setBoard({
      squares: Array(9).fill(null),
      xIsNext: board.xIsNext
    });
  }
  
  return (
      <div className={style.board}>
        <h2 className={style.status_title}>
          <strong>Status:&nbsp;</strong>
          {
            checkIfIsGameOver() ?
              calculateDraw(board.squares) ?
              <span>
                draw
              </span> 
              :
              <span>
                the winner was&nbsp;
                <span className={calculateWinner(board.squares) === "x" ? style.status_title_cross : style.status_title_circle}>
                  {calculateWinner(board.squares)?.toLocaleUpperCase()}
                  &nbsp;
                </span>
              </span> 
            :
            <span>
              <span className={board.xIsNext ? style.status_title_cross : style.status_title_circle}>
                {board.xIsNext ? "X" : "O"}
                &nbsp;
              </span> 
              is next...
            </span>


          }
        </h2>
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
        {
          checkIfIsGameOver() ?
          <span 
            className={`${style["play_again"]} ${calculateWinner(board.squares) === "x" ? style["play_again_blue"] : style["play_again_red"]}`}
            onClick={() => restartGame()}>
            Play again
          </span>
          : ""
        }
      </div>
  );
}