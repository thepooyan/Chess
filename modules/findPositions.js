export default function findPositions(Board) {
    let pos = {};

    let file = Board.querySelector('#A-File');
    pos["a"] = {
        1: file.querySelector('#A1')
    }

    return pos;
}