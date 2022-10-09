import { useState } from "react";
import Player from "../../classes/player";
import { checkIfIsGameOver, calculateDraw, calculateWinner } from "../../common/scripts/board-functions";
import style from "./Board.module.scss"
import { Square } from "./Square";

export function Board() {

  let [board, setBoard] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });
  const player = new Player("o");
  
  function setSquareValue(index: number) {

    let squares = board.squares;
    let isSelectedSquareEmpty = !board.squares[index];
    let isGameOver = checkIfIsGameOver(board.squares);

    if (isSelectedSquareEmpty && !isGameOver) {
  
      squares[index] = "x";
      
      setBoard({
        squares: squares, 
        xIsNext: true
      });

    }

    squares = board.squares;
    isSelectedSquareEmpty = !board.squares[player.getBestMove(squares, "o")];
    isGameOver = checkIfIsGameOver(board.squares);

    if (isSelectedSquareEmpty && !isGameOver) {

      squares[player.getBestMove(squares, "o")] = "o";

      setBoard({
        squares: squares, 
        xIsNext: true
      });

    }
  
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
            checkIfIsGameOver(board.squares) ?
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
          checkIfIsGameOver(board.squares) ?
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