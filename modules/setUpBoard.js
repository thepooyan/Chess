import { Pawn, Piece } from "./pieces";

export default function setUpBoard(Board) {

    let pawn1 = new Piece(Board.positions.A1)
    console.log(pawn1.getStartingPos())

}