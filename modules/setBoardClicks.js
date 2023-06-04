export default function setBoardClicks(Board) {

    function selectSquare(pos) {
        Object.values(Board.positions).forEach(pos => {
            pos.background.classList.remove('selected')
        })
        pos.background.classList.add('selected');
    }

    Object.values(Board.positions).forEach(position => {

        if (position.occupent) {

            position.square.onclick = _ => {
                let piece = position.occupent;
                selectSquare(position);

                Object.values(Board.positions).forEach(position2 => {
                    if (position2.occupent?.isWhite !== position.occupent.isWhite)
                        position2.square.onclick = () => {
                            let moved = piece.move(position2);
                            if (moved)
                                position2.background.classList.add('selected');
                            else
                                position.background.classList.remove('selected');

                            setBoardClicks(Board);
                        }
                })
            }

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
                    if (dropSquare.occupent) return
                    dropSquare.background.classList.add('heightlight');
                }
            }
            position.square.onmousedown = e => {
                window.addEventListener('mousemove', dragHandle);
                selectSquare(position);
                position.square.style.cursor = 'grabbing';
                position.square.style.transition = '0s';
                position.square.style.pointerEvents = 'none';
                prevID = null;
                x = 0; y = 0;

                window.onmouseup = () => {
                    window.removeEventListener('mousemove', dragHandle);
                    position.square.style.cursor = null;
                    position.square.style.transform = null;
                    position.square.style.transition = null;
                    position.square.style.pointerEvents = null;
                    Board.positions[prevID].background.classList.remove('heightlight');

                    console.log('drop square', dropSquare);
                }
            }

        } else {
            position.square.onclick = null;
            position.square.onmousedown = null;
        }

    })
}