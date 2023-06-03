export default function setBoardClicks(Board) {

    Object.values(Board.positions).forEach(position => {

        if (position.occupent) {

            position.square.onclick = _ => {
                let piece = position.occupent;
                Object.values(Board.positions).forEach(pos => {
                    pos.background.classList.remove('selected')
                })
                position.background.classList.add('selected');

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

            let x = 0, y = 0;
            function dragHandle(e) {
                e.preventDefault();

                x += e.movementX;
                y += e.movementY;

                position.square.style.transform = `translate(${x}px , ${y}px)`;
            }
            position.square.onmousedown = e => {
                window.addEventListener('mousemove', dragHandle);
                position.square.style.transition = '0s';
                x = 0; y = 0;

                window.onmouseup = () => {
                    window.removeEventListener('mousemove', dragHandle);
                    position.square.style.transform = null;
                    position.square.style.transition = null;
                }
            }

        } else {
            position.square.onclick = null;
            position.square.onmousedown = null;
        }

    })
}