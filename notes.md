piece class {
    attributes:
    
    1. position (direct from position OBJECT) ({square (element), occupent})
    2. coordinates (X and Y in numbers! of the current pos)
    3. isWhite=true
    4. type = ["Pawn", "Knight", ...] //hows to get this from constructor?
    5. move shape
    **take shape is diffrent than move shape for pawn



    methods:
        auth move {
            is it your turn?
            is move shape ok? (ONLY THIS PART IS DIFFRENT IN ALL)
                {
                    does the shape match the algorythm?
                    is there a piece in between? (except for knight)
                }

            is there another piece?
                --is it the either of the kings?
                --is it of the oppisite color?

            is the move going to result in a check for your own king?
                {

                }

            authorized!!
        }

        move {
            replace the current pos with dest pos
            check to kill the other piece (how?)
            replace the piece with the other pos
            empty the current square

            afterMove()
        }

        afterMove() {
            change the turn
            change the clock
            is there a possible move for current player? (not stalemate)
            was the last move check?
            was it checkmate?
        }

        get possible moves {
            move shape => a bunch of squares
            filter ones that are inside the board
            auth move for each => 
            return result
        }
}