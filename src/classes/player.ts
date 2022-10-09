import { calculateDraw, calculateWinner } from "../common/scripts/board-functions";
import { squareOptions } from "../components/Board/Square";

export default class Player {
    maxDepth: number;
    nodesMap: Map<any, any>;
    symbol: squareOptions;

    constructor(symbol: squareOptions, maxDepth = 2) {
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
        this.symbol = symbol;
    }

    public getAvailableMoves(board: squareOptions[]): number[] {
        const availableMoves: number[] = [];
        board.forEach((square, index) => {
            if (!square) availableMoves.push(index);
        });
        return availableMoves;
    }

    public getBestMove(board: squareOptions[], symbol: squareOptions, depth = 0): number {

        const availableMoves = this.getAvailableMoves(board);
        const nextPlayer = symbol === "x" ? "o" : "x";
        const winner = calculateWinner(board);
        const isDraw = calculateDraw(board);
        const isCPUPlaying = symbol === this.symbol;
        let bestScore = isCPUPlaying ? -100 : 100;
        let bestPositionToPlay = availableMoves[Math.floor(Math.random() * availableMoves.length)];

        if (isDraw || winner || depth === this.maxDepth) {
            let score = 0;
            if (winner === this.symbol) {
                score = 100 - depth;
            } else if (!isDraw) {
                score = -100 + depth;
            }
            return score;
        }

        availableMoves.forEach((position) => {

            const newBoard = board.slice();
            newBoard[position] = symbol;

            const moveScore = this.getBestMove(newBoard, nextPlayer, depth + 1);
            bestScore = isCPUPlaying ? Math.max(bestScore, moveScore) : Math.min(bestScore, moveScore);
            bestPositionToPlay = bestScore === moveScore ? position : bestPositionToPlay;
            if (depth === 0) console.log("Posição " + position + ": " + moveScore);
        });

        if (depth === 0) {
            return bestPositionToPlay;
        }
        return bestScore;
    }

}
