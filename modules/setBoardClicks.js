export default function setBoardClicks(Board) {

    Object.values(Board.positions).forEach(position => {

        if (position.occupent) {

            position.square.onclick = _ => {
                let piece = position.occupent;
                Object.values(Board.positions).forEach(pos=>{
                    pos.square.classList.remove('selected')
                })
                position.square.classList.add('selected');

                Object.values(Board.positions).forEach(position2 => {
                    position2.square.onclick = e => {
                        let moved = piece.move(position2);
                        if (moved)
                        position2.square.classList.add('selected');
                        else
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