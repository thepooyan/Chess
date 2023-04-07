import config from '../config/chessConfig.json';
const imgFolder = `/Chess set themes/${config.theme}/`;

function destructPosition(position) {
    position = position.name;

    let x = position[0].charCodeAt() - 64;

    return { x: x, y: parseInt(position[1]) }
}
function analyseMove(currentPos, destPos) {
    let moveShape = '';

    currentPos = destructPosition(currentPos);
    destPos = destructPosition(destPos);

    let y = destPos.y - currentPos.y;
    let x = destPos.x - currentPos.x;
    let xl = 'r', yl = 'u';
    if (x < 0) {
        xl = 'l';
        x = -x;
    }
    if (y < 0) {
        yl = 'd';
        y = -y;
    }
    while (x > 0 | y > 0) {
        if (y > 0) {
            moveShape += yl;
            y--;
        }
        if (x > 0) {
            moveShape += xl;
            x--;
        }
    }
    return moveShape
}

class Piece {
    #imgAddress;
    isKilled = false;

    constructor(type, position, imgBase, isWhite, movePattern, Board) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.type = type;
        this.Board = Board;

        this.firstMove = true;
        this.patternBackup = movePattern;

        this.#imgAddress = this.generateImgAddress(imgBase);
        this.showInBoard();
        this.movePattern = movePattern;
    }
    generateImgAddress(base) {
        let baseName = `${this.isWhite ? 'w' : 'b'}${base}.png`;
        return imgFolder + baseName;
    }
    showInBoard(remove) {
        let url = remove ? null : `url("${this.#imgAddress}")`;
        this.position.square.style.backgroundImage = url;
        if (remove) {
            this.position.square.classList.remove('occupied');
        } else {
            this.position.square.classList.add('occupied');
        }
    }
    kill() {
        this.isKilled = true;
        this.position = null;
        this.move = null;
    }
    intersectCleanup() {
        this.movePattern = this.patternBackup;
        this.firstMove = false;
    }
    moveAuthorize(pos) {
        let moveShape = analyseMove(this.position, pos);

        //handle exceptions if there are
        if (this.authIntersect)
            this.authIntersect(moveShape, pos)

        //is it my turn?
        // if (this.Board.turn.isWhite !== this.isWhite)
        //     return false

        //does the move shape match the move pattern of the piece?
        if (!new RegExp(`^(${this.movePattern})$`).test(moveShape))
            return false
            
        //is there another piece in the way?

        //is the destenation occupied?
        if (pos.occupent) {
            if (pos.occupent.isWhite === this.isWhite)
                return false
        }

        //did this move result in a check for my king?

        return true //authorized!!
    }
    move(pos) {
        if (!this.moveAuthorize(pos)) {
            console.log(`unauthorized move (${this.type} ${this.position.name} => ${pos.name})`);
            return
        }
        if (pos.occupent) {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name} taking ${pos.occupent.type}`); //this is the same for every piece
            pos.occupent.kill();
        } else {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name}`); //this is the same for every piece
        }

        this.showInBoard(true);
        this.position.occupent = null;

        this.position = pos;

        this.position.occupent = this;
        this.showInBoard();

        this.intersectCleanup();
    }
}

export class Pawn extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super("Pawn", position, 'p', isWhite, 'u', Board);

    }
    authIntersect(moveShape, pos) {
        if (moveShape === 'u' && pos.occupent) {
            this.movePattern = ''
        }
        if ((moveShape === 'ur' || moveShape === 'ul') && pos.occupent) {
            this.movePattern += '|ur|ul'
        }
        if (this.firstMove) {
            this.movePattern += '|uu';
        }
    }
}

export class Knight extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Knight', position, 'n', isWhite, '([ud])[lr]\\2|[du][lr]{2}', Board);
    }
}

export class Bishop extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Bishop', position, 'b', isWhite, '([ud][lr])+', Board);
    }
}

export class Rook extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Rook', position, 'r', isWhite, 'u+|d+|l+|r+', Board);
    }
}

export class Queen extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Queen', position, 'q', isWhite, '(u+|d+|l+|r+)|(([ud][lr])+)', Board);
    }
}

export class King extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('King', position, 'k', isWhite, 'u|d|r|l|[ud][lr]', Board);
    }
    authIntersect(moveShape, pos) {

    }
}
