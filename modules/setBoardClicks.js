export default function setBoardClicks(Board) {

    function heighlightSquare(pos) {
        Object.values(Board.positions).forEach(pos => {
            pos.background.classList.remove('selected')
        })
        pos.background.classList.add('selected');
    }

    function destinationSelected(position, dest) {
        let piece = position.occupent;
        let moved = piece.move(dest);
        if (moved)
            dest.background.classList.add('selected');
        else
            position.background.classList.remove('selected');

        setTimeout(() => {
            setBoardClicks(Board);
        }, 0);
    }
    function clearEvents(square) {
        square.onclick = null;
        square.onmousedown = null;
        square.onmouseup = null;
        square.onmousemove = null;
    }
    function pieceClicked(position) {
        Object.values(Board.positions).forEach(position2 => {
            if (position2.occupent?.isWhite !== position.occupent.isWhite)
                clearEvents(position2.square);
            position2.square.onclick = () => {
                destinationSelected(position, position2);
            }
        })
    }

    Object.values(Board.positions).forEach(position => {

        if (position.occupent) {
            let x = 0, y = 0, prevID, dropSquare;
            function dragHandle(e) {
                e.preventDefault();

                x += e.movementX;
                y += e.movementY;

                position.square.style.transform = `translate(${x}px , ${y}px)`;

                //_______drop off square
                let dropID = e.target.id;

                if (dropID && dropID !== prevID) {
                    dropSquare = Board.positions[dropID];
                    Board.positions[prevID]?.background.classList.remove('heightlight');
                    prevID = dropID;
                    if (dropSquare.occupent?.isWhite === position.occupent.isWhite) return
                    dropSquare.background.classList.add('heightlight');
                }
            }
            function grabbingPiece(piece) {
                Board.mainRef.current.classList.add('grabbing');
                piece.style.transition = '0s';
                piece.style.pointerEvents = 'none';
                prevID = null;
                x = 0; y = 0;
                window.addEventListener('mousemove', dragHandle);
            }
            function releasePiece(piece) {
                Board.mainRef.current.classList.remove('grabbing');
                piece.style.transform = null;
                piece.style.transition = null;
                piece.style.pointerEvents = null;
                window.removeEventListener('mousemove', dragHandle);
            }
            position.square.onmousedown = e => {
                heighlightSquare(position);
                grabbingPiece(position.square);

                window.onmouseup = () => {
                    releasePiece(position.square);
                    if (!dropSquare) {
                        pieceClicked(position);
                        return
                    }

                    Board.positions[prevID].background.classList.remove('heightlight');
                    destinationSelected(position, dropSquare);
                }
            }

        } else {
            clearEvents(position.square);
        }

    })
}