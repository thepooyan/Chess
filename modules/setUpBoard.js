import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {

    let pawn1 = new Pawn(Board.positions.A2);
    let pawn2 = new Pawn(Board.positions.B2);
    let pawn3 = new Pawn(Board.positions.C2);
    let pawn4 = new Pawn(Board.positions.D2);
    let pawn5 = new Pawn(Board.positions.E2);
    let pawn6 = new Pawn(Board.positions.F2);
    let pawn7 = new Pawn(Board.positions.G2);
    let pawn8 = new Pawn(Board.positions.H2);

    pawn1.move(Board.positions.C3);
    
    let Rknight = new Knight(Board.positions.C1);
    let Lknight = new Knight(Board.positions.F1);

    let Rrook = new Rook(Board.positions.A1);
    let Lrook = new Rook(Board.positions.H1);

    let Rbishop = new Bishop(Board.positions.B1);
    let Lbishop = new Bishop(Board.positions.G1);

    let king = new King(Board.positions.E1);
    let queen = new Queen(Board.positions.D1);
}