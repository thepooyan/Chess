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
            1. is move shape ok? (ONLY THIS PART IS DIFFRENT IN ALL)
            2. is it on the board?
            3. is there another piece?
                -yes -- is it not the either of the kings?
                --is it of the oppisite color?
            4. is the move going to result in a check for your own king?
        }

        move {
            replace the current pos with dest pos
            check to kill the other piece (how?)
            replace the piece with the other pos
            empty the current square
        }
}