import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {
    window.p = Board.positions;

    window.pawnA = new Pawn(p.A2);
    window.pawnB = new Pawn(p.B2);
    window.pawnC = new Pawn(p.C2);
    window.pawnD = new Pawn(p.D2);
    window.pawnE = new Pawn(p.E2);
    window.pawnF = new Pawn(p.F2);
    window.pawnG = new Pawn(p.G2);
    window.pawnH = new Pawn(p.H2);

    window.Lknight = new Knight(p.B1);
    window.Rknight = new Knight(p.G1);

    window.Lrook = new Rook(p.A1);
    window.Rrook = new Rook(p.H1);

    window.Lbishop = new Bishop(p.C1);
    window.Rbishop = new Bishop(p.F1);

    window.king = new King(p.E1);
    window.queen = new Queen(p.D1);


    window.B_pawnA = new Pawn(p.A7, {isWhite: false});
    window.B_pawnB = new Pawn(p.B7, {isWhite: false});
    window.B_pawnC = new Pawn(p.C7, {isWhite: false});
    window.B_pawnD = new Pawn(p.D7, {isWhite: false});
    window.B_pawnE = new Pawn(p.E7, {isWhite: false});
    window.B_pawnF = new Pawn(p.F7, {isWhite: false});
    window.B_pawnG = new Pawn(p.G7, {isWhite: false});
    window.B_pawnH = new Pawn(p.H7, {isWhite: false});

    window.B_Lknight = new Knight(p.B8, {isWhite: false});
    window.B_Rknight = new Knight(p.G8, {isWhite: false});
    window.B_Lrook = new Rook(p.A8, {isWhite: false});
    window.B_Rrook = new Rook(p.H8, {isWhite: false});
    window.B_Lbishop = new Bishop(p.C8, {isWhite: false});
    window.B_Rbishop = new Bishop(p.F8, {isWhite: false});
    window.B_king = new King(p.E8, {isWhite: false});
    window.B_queen = new Queen(p.D8, {isWhite: false});
    
    function move() {
        pawnD.move(p.G6);
    }
    move()
    window.move = move;
}