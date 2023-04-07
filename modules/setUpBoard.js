import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board, isWhite) {
    window.p = Board.positions;

    window.pawnA = new Pawn(p.A2, {isWhite: isWhite});
    window.pawnB = new Pawn(p.B2, {isWhite: isWhite});
    window.pawnC = new Pawn(p.C2, {isWhite: isWhite});
    window.pawnD = new Pawn(p.D2, {isWhite: isWhite});
    window.pawnE = new Pawn(p.E2, {isWhite: isWhite});
    window.pawnF = new Pawn(p.F2, {isWhite: isWhite});
    window.pawnG = new Pawn(p.G2, {isWhite: isWhite});
    window.pawnH = new Pawn(p.H2, {isWhite: isWhite});
    window.Lknight = new Knight(p.B1, {isWhite: isWhite});
    window.Rknight = new Knight(p.G1, {isWhite: isWhite});
    window.Lrook = new Rook(p.A1, {isWhite: isWhite});
    window.Rrook = new Rook(p.H1, {isWhite: isWhite});
    window.Lbishop = new Bishop(p.C1, {isWhite: isWhite});
    window.Rbishop = new Bishop(p.F1, {isWhite: isWhite});
    window.king = new King(p.E1, {isWhite: isWhite});
    window.queen = new Queen(p.D1, {isWhite: isWhite});


    window.B_pawnA = new Pawn(p.A7, {isWhite: !isWhite});
    window.B_pawnB = new Pawn(p.B7, {isWhite: !isWhite});
    window.B_pawnC = new Pawn(p.C7, {isWhite: !isWhite});
    window.B_pawnD = new Pawn(p.D7, {isWhite: !isWhite});
    window.B_pawnE = new Pawn(p.E7, {isWhite: !isWhite});
    window.B_pawnF = new Pawn(p.F7, {isWhite: !isWhite});
    window.B_pawnG = new Pawn(p.G7, {isWhite: !isWhite});
    window.B_pawnH = new Pawn(p.H7, {isWhite: !isWhite});
    window.B_Lknight = new Knight(p.B8, {isWhite: !isWhite});
    window.B_Rknight = new Knight(p.G8, {isWhite: !isWhite});
    window.B_Lrook = new Rook(p.A8, {isWhite: !isWhite});
    window.B_Rrook = new Rook(p.H8, {isWhite: !isWhite});
    window.B_Lbishop = new Bishop(p.C8, {isWhite: !isWhite});
    window.B_Rbishop = new Bishop(p.F8, {isWhite: !isWhite});
    window.B_king = new King(p.E8, {isWhite: !isWhite});
    window.B_queen = new Queen(p.D8, {isWhite: !isWhite});
    
}