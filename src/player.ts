import { squareOptions } from "./components/Board/Square";


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
}
