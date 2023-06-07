export default function setBoardClicks(Board) {

    function selectSquare(pos) {
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

        setBoardClicks(Board);
    }
    function pieceClicked(position) {
        Object.values(Board.positions).forEach(position2 => {
            if (position2.occupent?.isWhite !== position.occupent.isWhite)
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
            position.square.onmousedown = e => {
                window.addEventListener('mousemove', dragHandle);
                selectSquare(position);
                Board.mainRef.current.classList.add('grabbing');
                position.square.style.transition = '0s';
                position.square.style.pointerEvents = 'none';
                prevID = null;
                x = 0; y = 0;

                window.onmouseup = () => {
                    window.removeEventListener('mousemove', dragHandle);
                    Board.mainRef.current.classList.remove('grabbing');
                    position.square.style.transform = null;
                    position.square.style.transition = null;
                    position.square.style.pointerEvents = null;
                    if (!dropSquare) {
                        pieceClicked(position);
                        return
                    }
                    Board.positions[prevID].background.classList.remove('heightlight');

                    destinationSelected(position, dropSquare);
                }
            }

        } else {
            position.square.onclick = null;
            position.square.onmousedown = null;
        }

    })
}