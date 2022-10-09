import { calculateDraw, calculateWinner } from "../common/scripts/board-functions";
import { squareOptions } from "../components/Board/Square";

export default class Player {
    maxDepth: number;
    nodesMap: Map<any, any>;
    symbol: squareOptions;

    constructor(symbol: squareOptions, maxDepth = 45) {
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

    /* public getBestMove(board: squareOptions[], maximizing = true, callback = (args?: any) => { }, depth = 0): number {

        if (depth === 0) this.nodesMap.clear();

        const winner = calculateWinner(board);
        const isDraw = calculateDraw(board);

        if (winner || isDraw || depth === this.maxDepth) {
            let points: number = 0;
            if (winner === "x") {
                points = 100 - depth;
            } else if (winner === "o") {
                points = -100 + depth;
            }
            return points;
        }

        if (maximizing) {

            let bestPontuation = -100;

            this.getAvailableMoves(board).forEach(index => {

                const newBoard = board.slice();

                newBoard[index] = "x";

                const nodeValue = this.getBestMove(newBoard, false, callback, depth + 1);

                bestPontuation = Math.max(bestPontuation, nodeValue);

                if (depth === 0) {
                    const moves = this.nodesMap.has(nodeValue)
                        ? `${this.nodesMap.get(nodeValue)},${index}`
                        : index;
                    this.nodesMap.set(nodeValue, moves);
                }
            });

            if (depth === 0) {
                let returnValue: number;
                if (typeof this.nodesMap.get(bestPontuation) === "string") {
                    const arr = this.nodesMap.get(bestPontuation).split(",");
                    const rand = Math.floor(Math.random() * arr.length);
                    returnValue = arr[rand];
                } else {
                    returnValue = this.nodesMap.get(bestPontuation);
                }

                callback(returnValue);
                return returnValue;
            }

            return bestPontuation;
        }

        if (!maximizing) {

            let bestPontuation = 100;

            this.getAvailableMoves(board).forEach(index => {

                const newBoard = board.slice();

                newBoard[index] = "o";

                const nodeValue = this.getBestMove(newBoard, true, callback, depth + 1);

                bestPontuation = Math.max(bestPontuation, nodeValue);

                if (depth === 0) {
                    const moves = this.nodesMap.has(nodeValue)
                        ? `${this.nodesMap.get(nodeValue)},${index}`
                        : index;
                    this.nodesMap.set(nodeValue, moves);
                }
            });

            if (depth === 0) {
                let returnValue: number;
                if (typeof this.nodesMap.get(bestPontuation) === "string") {
                    const arr = this.nodesMap.get(bestPontuation).split(",");
                    const rand = Math.floor(Math.random() * arr.length);
                    returnValue = arr[rand];
                } else {
                    returnValue = this.nodesMap.get(bestPontuation);
                }

                callback(returnValue);
                return returnValue;
            }

            return bestPontuation;
        }

        return 0;
    } */

    //@ts-ignore
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
            return bestScore;
        });

        if (depth === 0) {
            return bestPositionToPlay;
        }
    }

}
