import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board, isWhite) {

    Board.pieces.white.pawnA = new Pawn(p.A2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnB = new Pawn(p.B2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnC = new Pawn(p.C2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnD = new Pawn(p.D2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnE = new Pawn(p.E2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnF = new Pawn(p.F2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnG = new Pawn(p.G2,Board, {isWhite: isWhite});
    Board.pieces.white.pawnH = new Pawn(p.H2,Board, {isWhite: isWhite});
    Board.pieces.white.Lknight = new Knight(p.B1,Board, {isWhite: isWhite});
    Board.pieces.white.Rknight = new Knight(p.G1,Board, {isWhite: isWhite});
    Board.pieces.white.Lrook = new Rook(p.A1,Board, {isWhite: isWhite});
    Board.pieces.white.Rrook = new Rook(p.H1,Board, {isWhite: isWhite});
    Board.pieces.white.Lbishop = new Bishop(p.C1,Board, {isWhite: isWhite});
    Board.pieces.white.Rbishop = new Bishop(p.F1,Board, {isWhite: isWhite});
    Board.pieces.white.king = new King(p.E1,Board, {isWhite: isWhite});
    Board.pieces.white.queen = new Queen(p.D1,Board, {isWhite: isWhite});


    Board.pieces.black.pawnA = new Pawn(p.A7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnB = new Pawn(p.B7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnC = new Pawn(p.C7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnD = new Pawn(p.D7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnE = new Pawn(p.E7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnF = new Pawn(p.F7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnG = new Pawn(p.G7,Board, {isWhite: !isWhite});
    Board.pieces.black.pawnH = new Pawn(p.H7,Board, {isWhite: !isWhite});
    Board.pieces.black.Lknight = new Knight(p.B8,Board, {isWhite: !isWhite});
    Board.pieces.black.Rknight = new Knight(p.G8,Board, {isWhite: !isWhite});
    Board.pieces.black.Lrook = new Rook(p.A8,Board, {isWhite: !isWhite});
    Board.pieces.black.Rrook = new Rook(p.H8,Board, {isWhite: !isWhite});
    Board.pieces.black.Lbishop = new Bishop(p.C8,Board, {isWhite: !isWhite});
    Board.pieces.black.Rbishop = new Bishop(p.F8,Board, {isWhite: !isWhite});
    Board.pieces.black.king = new King(p.E8,Board, {isWhite: !isWhite});
    Board.pieces.black.queen = new Queen(p.D8,Board, {isWhite: !isWhite});
    
}