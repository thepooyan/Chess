import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {

    let pawn1 = new Pawn(Board.positions.B1);
    let pawn2 = new Pawn(Board.positions.B2);
    let pawn3 = new Pawn(Board.positions.B3);
    let pawn4 = new Pawn(Board.positions.B4);
    let pawn5 = new Pawn(Board.positions.B5);
    let pawn6 = new Pawn(Board.positions.B6);
    let pawn7 = new Pawn(Board.positions.B7);
    let pawn8 = new Pawn(Board.positions.B8);
    
    let Rknight = new Knight(Board.positions.A2);
    let Lknight = new Knight(Board.positions.A7);

    let Rrook = new Rook(Board.positions.A1);
    let Lrook = new Rook(Board.positions.A8);

    let Rbishop = new Bishop(Board.positions.A3);
    let Lbishop = new Bishop(Board.positions.A6);

    let king = new King(Board.positions.A5);
    let queen = new Queen(Board.positions.A4);
}