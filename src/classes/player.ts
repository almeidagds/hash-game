import { calculateDraw, calculateWinner } from "../common/scripts/board-functions";
import { squareOptions } from "../components/Board/Square";
import { GameDifficulties } from "../enums/game-difficulties";


export default class Player {
    public  symbol: squareOptions;
    public  difficulty: GameDifficulties; 
    private  _maxDepth: number;
    
    constructor(symbol: squareOptions, difficulty: GameDifficulties = GameDifficulties.impossible) {
        this.symbol = symbol;
        this.difficulty = difficulty;
        this._maxDepth = this._getMaxDepthByDifficulty(difficulty);
    }

    private _getMaxDepthByDifficulty(difficulty: GameDifficulties) {
        const difficultiesDepths = {
            [GameDifficulties.easy]: 2,
            [GameDifficulties.medium]: 4,
            [GameDifficulties.hard]: 6,
            [GameDifficulties.impossible]: -1
        }
        return difficultiesDepths[difficulty];
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

        if (isDraw || winner || depth === this._maxDepth) {
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
