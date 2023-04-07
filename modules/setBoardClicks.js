export default function setBoardClicks(Board) {

    Object.values(Board.positions).forEach(position => {

        if (position.occupent) {

            position.square.onclick = _ => {
                let piece = position.occupent;
                position.square.classList.add('selected');

                Object.values(Board.positions).forEach(position2 => {
                    position2.square.onclick = e => {
                        piece.move(position2);
                        position.square.classList.remove('selected');
                        setBoardClicks(Board);
                    }
                })
            }

        } else {
            position.square.onclick = null;
        }

    })
}