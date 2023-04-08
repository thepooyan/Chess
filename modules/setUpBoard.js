import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board, isWhite) {
    Board.turn = {
        isWhite: true,
        change() {
            this.isWhite = !this.isWhite
        }
    }
    window.p = Board.positions;

    window.pawnA = new Pawn(p.A2,Board, {isWhite: isWhite});
    window.pawnB = new Pawn(p.B2,Board, {isWhite: isWhite});
    window.pawnC = new Pawn(p.C2,Board, {isWhite: isWhite});
    window.pawnD = new Pawn(p.D2,Board, {isWhite: isWhite});
    window.pawnE = new Pawn(p.E2,Board, {isWhite: isWhite});
    window.pawnF = new Pawn(p.F2,Board, {isWhite: isWhite});
    window.pawnG = new Pawn(p.G2,Board, {isWhite: isWhite});
    window.pawnH = new Pawn(p.H2,Board, {isWhite: isWhite});
    window.Lknight = new Knight(p.B1,Board, {isWhite: isWhite});
    // window.Rknight = new Knight(p.G1,Board, {isWhite: isWhite});
    window.Lrook = new Rook(p.A1,Board, {isWhite: isWhite});
    window.Rrook = new Rook(p.H1,Board, {isWhite: isWhite});
    window.Lbishop = new Bishop(p.C1,Board, {isWhite: isWhite});
    // window.Rbishop = new Bishop(p.F1,Board, {isWhite: isWhite});
    window.king = new King(p.E1,Board, {isWhite: isWhite});
    window.queen = new Queen(p.D1,Board, {isWhite: isWhite});


    window.o_pawnA = new Pawn(p.A7,Board, {isWhite: !isWhite});
    window.o_pawnB = new Pawn(p.B7,Board, {isWhite: !isWhite});
    window.o_pawnC = new Pawn(p.C7,Board, {isWhite: !isWhite});
    window.o_pawnD = new Pawn(p.D7,Board, {isWhite: !isWhite});
    window.o_pawnE = new Pawn(p.E7,Board, {isWhite: !isWhite});
    window.o_pawnF = new Pawn(p.F7,Board, {isWhite: !isWhite});
    window.o_pawnG = new Pawn(p.G7,Board, {isWhite: !isWhite});
    window.o_pawnH = new Pawn(p.H7,Board, {isWhite: !isWhite});
    window.o_Lknight = new Knight(p.B8,Board, {isWhite: !isWhite});
    window.o_Rknight = new Knight(p.G8,Board, {isWhite: !isWhite});
    window.o_Lrook = new Rook(p.A8,Board, {isWhite: !isWhite});
    window.o_Rrook = new Rook(p.H8,Board, {isWhite: !isWhite});
    window.o_Lbishop = new Bishop(p.C8,Board, {isWhite: !isWhite});
    window.o_Rbishop = new Bishop(p.F8,Board, {isWhite: !isWhite});
    window.o_king = new King(p.E8,Board, {isWhite: !isWhite});
    window.o_queen = new Queen(p.D8,Board, {isWhite: !isWhite});
    
}