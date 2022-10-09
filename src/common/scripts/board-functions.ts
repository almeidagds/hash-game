import { squareOptions } from "../../components/Board/Square";

export function checkIfIsGameOver(squares: squareOptions[]): boolean {
    return !!calculateWinner(squares) || calculateDraw(squares);
}

export function calculateWinner(squares: squareOptions[]): squareOptions | null {
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

export function calculateDraw(squares: squareOptions[]): boolean {
    return !squares.some(square => !square) && !calculateWinner(squares);
}