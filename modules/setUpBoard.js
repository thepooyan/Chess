import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {
    window.Board = Board;

    let pawn1 = new Pawn(Board.positions.A2);
    let pawn2 = new Pawn(Board.positions.B2);
    let pawn3 = new Pawn(Board.positions.C2);
    let pawn4 = new Pawn(Board.positions.D2);
    let pawn5 = new Pawn(Board.positions.E2);
    let pawn6 = new Pawn(Board.positions.F2);
    let pawn7 = new Pawn(Board.positions.G2);
    let pawn8 = new Pawn(Board.positions.H2);

    let Rknight = new Knight(Board.positions.B1);
    let Lknight = new Knight(Board.positions.G1);

    let Rrook = new Rook(Board.positions.A1);
    let Lrook = new Rook(Board.positions.H1);

    let Rbishop = new Bishop(Board.positions.C1);
    let Lbishop = new Bishop(Board.positions.F1);

    let king = new King(Board.positions.E1);
    let queen = new Queen(Board.positions.D1);


    let B_pawn1 = new Pawn(Board.positions.A7, {isWhite: false});
    let B_pawn2 = new Pawn(Board.positions.B7, {isWhite: false});
    let B_pawn3 = new Pawn(Board.positions.C7, {isWhite: false});
    let B_pawn4 = new Pawn(Board.positions.D7, {isWhite: false});
    let B_pawn5 = new Pawn(Board.positions.E7, {isWhite: false});
    let B_pawn6 = new Pawn(Board.positions.F7, {isWhite: false});
    let B_pawn7 = new Pawn(Board.positions.G7, {isWhite: false});
    let B_pawn8 = new Pawn(Board.positions.H7, {isWhite: false});

    let B_Rknight = new Knight(Board.positions.B8, {isWhite: false});
    let B_Lknight = new Knight(Board.positions.G8, {isWhite: false});
    let B_Rrook = new Rook(Board.positions.A8, {isWhite: false});
    let B_Lrook = new Rook(Board.positions.H8, {isWhite: false});
    let B_Rbishop = new Bishop(Board.positions.C8, {isWhite: false});
    let B_Lbishop = new Bishop(Board.positions.F8, {isWhite: false});
    let B_king = new King(Board.positions.E8, {isWhite: false});
    let B_queen = new Queen(Board.positions.D8, {isWhite: false});
    
    function move() {
        pawn1.move(Board.positions.A4);
    }
    window.move = move;
}