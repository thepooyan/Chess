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

    function addLetter(count, letter) {
        for (let i = 0; i < count; i++)
            moveShape += letter;
    }
    let y = destPos.y - currentPos.y;
    let x = destPos.x - currentPos.x;
    let xl = 'r', yl = 'u';
    if (x<0) {
        xl = 'l';
        x = -x;
    }
    if (y < 0) {
        yl = 'd';
        y = -y;
    }
    while (x > 0 | y > 0) {
        if (y>0) {
            moveShape+=yl;
            y--;
        }
        if (x>0) {
            moveShape+=xl;
            x--;
        }
    }
    return moveShape
}

class Piece {
    #imgAddress;
    #movePattern;
    isKilled = false;

    constructor(type, position, imgBase, isWhite, movePattern) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.type = type;

        this.#imgAddress = this.generateImgAddress(imgBase);
        this.setBackground();
        this.movePattern = movePattern;
    }
    generateImgAddress(base) {
        let baseName = `${this.isWhite ? 'w' : 'b'}${base}.png`;
        return imgFolder + baseName;
    }
    setBackground(address = this.#imgAddress) {
        this.position.square.style.backgroundImage = `url("${address}")`;
    }
    kill() {
        this.isKilled = true;
        this.position = null;
        this.move = null;
    }
    moveAuthorize(pos) {
        let moveShape = analyseMove(this.position, pos);
        return new RegExp(`^(${this.movePattern})$`).test(moveShape);
    }
    move(pos) {
        if (!this.moveAuthorize(pos)) {
            console.log(`unauthorized move`);
            return
        }
        if (pos.occupent) {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name} taking ${pos.occupent.type}`); //this is the same for every piece
            pos.occupent.kill();
        } else {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name}`); //this is the same for every piece
        }

        this.setBackground(null);
        this.position.occupent = null;

        this.position = pos;

        this.position.occupent = this;
        this.setBackground();
    }
}

export class Pawn extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super("Pawn", position, 'p', isWhite, 'u|ur|ul');
    }
}

export class Knight extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Knight', position, 'n', isWhite, '([ud])[lr]\\2');
    }
}

export class Bishop extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Bishop', position, 'b', isWhite, '([ud][lr])+');
    }
}

export class Rook extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Rook', position, 'r', isWhite, 'u+|d+|l+|r+');
    }
}

export class Queen extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Queen', position, 'q', isWhite, '(u+|d+|l+|r+)|(([ud][lr])+)');
    }
}

export class King extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('King', position, 'k', isWhite, 'u|d|r|l|[ud][lr]');
    }
}
