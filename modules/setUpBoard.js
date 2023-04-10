import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export default function setUpBoard(Board) {

    Board.pieces.white.pawn_A = new Pawn(p.A2,Board, {isWhite: true});
    Board.pieces.white.pawn_B = new Pawn(p.B2,Board, {isWhite: true});
    Board.pieces.white.pawn_C = new Pawn(p.C2,Board, {isWhite: true});
    Board.pieces.white.pawn_D = new Pawn(p.D2,Board, {isWhite: true});
    Board.pieces.white.pawn_E = new Pawn(p.E2,Board, {isWhite: true});
    Board.pieces.white.pawn_F = new Pawn(p.F2,Board, {isWhite: true});
    Board.pieces.white.pawn_G = new Pawn(p.G2,Board, {isWhite: true});
    Board.pieces.white.pawn_H = new Pawn(p.H2,Board, {isWhite: true});
    Board.pieces.white.knight_L = new Knight(p.B1,Board, {isWhite: true});
    Board.pieces.white.knight_R = new Knight(p.G1,Board, {isWhite: true});
    Board.pieces.white.rook_L = new Rook(p.A1,Board, {isWhite: true});
    Board.pieces.white.rook_R = new Rook(p.H1,Board, {isWhite: true});
    Board.pieces.white.bishop_L = new Bishop(p.C1,Board, {isWhite: true});
    Board.pieces.white.bishop_R = new Bishop(p.F1,Board, {isWhite: true});
    Board.pieces.white.king = new King(p.E1,Board, {isWhite: true});
    Board.pieces.white.queen = new Queen(p.D1,Board, {isWhite: true});


    Board.pieces.black.pawn_A = new Pawn(p.A7,Board, {isWhite: false});
    Board.pieces.black.pawn_B = new Pawn(p.B7,Board, {isWhite: false});
    Board.pieces.black.pawn_C = new Pawn(p.C7,Board, {isWhite: false});
    Board.pieces.black.pawn_D = new Pawn(p.D7,Board, {isWhite: false});
    Board.pieces.black.pawn_E = new Pawn(p.E7,Board, {isWhite: false});
    Board.pieces.black.pawn_F = new Pawn(p.F7,Board, {isWhite: false});
    Board.pieces.black.pawn_G = new Pawn(p.G7,Board, {isWhite: false});
    Board.pieces.black.pawn_H = new Pawn(p.H7,Board, {isWhite: false});
    Board.pieces.black.knight_L = new Knight(p.B8,Board, {isWhite: false});
    Board.pieces.black.knight_R = new Knight(p.G8,Board, {isWhite: false});
    Board.pieces.black.rook_L = new Rook(p.A8,Board, {isWhite: false});
    Board.pieces.black.rook_R = new Rook(p.H8,Board, {isWhite: false});
    Board.pieces.black.bishop_L = new Bishop(p.C8,Board, {isWhite: false});
    Board.pieces.black.bishop_R = new Bishop(p.F8,Board, {isWhite: false});
    Board.pieces.black.king = new King(p.E8,Board, {isWhite: false});
    Board.pieces.black.queen = new Queen(p.D8,Board, {isWhite: false});
    
}