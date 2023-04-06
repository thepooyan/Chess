import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {
    window.Board = Board;
    window.p = Board.positions;

    window.pawn1 = new Pawn(p.A2);
    let pawn2 = new Pawn(p.B2);
    let pawn3 = new Pawn(p.C2);
    let pawn4 = new Pawn(p.D2);
    let pawn5 = new Pawn(p.E2);
    let pawn6 = new Pawn(p.F2);
    let pawn7 = new Pawn(p.G2);
    let pawn8 = new Pawn(p.H2);

    let Rknight = new Knight(p.B1);
    let Lknight = new Knight(p.G1);

    let Rrook = new Rook(p.A1);
    let Lrook = new Rook(p.H1);

    let Rbishop = new Bishop(p.C1);
    let Lbishop = new Bishop(p.F1);

    let king = new King(p.E1);
    let queen = new Queen(p.D1);


    let B_pawn1 = new Pawn(p.A7, {isWhite: false});
    let B_pawn2 = new Pawn(p.B7, {isWhite: false});
    let B_pawn3 = new Pawn(p.C7, {isWhite: false});
    let B_pawn4 = new Pawn(p.D7, {isWhite: false});
    let B_pawn5 = new Pawn(p.E7, {isWhite: false});
    let B_pawn6 = new Pawn(p.F7, {isWhite: false});
    let B_pawn7 = new Pawn(p.G7, {isWhite: false});
    let B_pawn8 = new Pawn(p.H7, {isWhite: false});

    let B_Rknight = new Knight(p.B8, {isWhite: false});
    let B_Lknight = new Knight(p.G8, {isWhite: false});
    let B_Rrook = new Rook(p.A8, {isWhite: false});
    let B_Lrook = new Rook(p.H8, {isWhite: false});
    let B_Rbishop = new Bishop(p.C8, {isWhite: false});
    let B_Lbishop = new Bishop(p.F8, {isWhite: false});
    let B_king = new King(p.E8, {isWhite: false});
    let B_queen = new Queen(p.D8, {isWhite: false});
    
    function move() {
        pawn1.move(p.A4);
    }
    window.move = move;
}