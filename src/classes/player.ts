import { calculateDraw, calculateWinner } from "../common/scripts/board-functions";
import { squareOptions } from "../components/Board/Square";

export default class Player {
    maxDepth: number;
    nodesMap: Map<any, any>;

    constructor(maxDepth = -1) {
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
    }

    public getAvailableMoves(board: squareOptions[]): number[] {
        const availableMoves: number[] = [];
        board.forEach((square, index) => {
            if (!square) availableMoves.push(index);
        });
        return availableMoves;
    }

    public getBestMove(board: squareOptions[], maximizing = true, callback = (args?: any) => {}, depth = 0 ): number {
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

        return 0;
    }
}
