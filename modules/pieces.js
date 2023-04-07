import config from '../config/chessConfig.json';
const imgFolder = `/Chess set themes/${config.theme}/`;




class Piece {
    isKilled = false;

    constructor(type, position, isWhite, movePattern, Board) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.type = type;
        this.Board = Board;
        this.firstMove = true;
        this.movePattern = movePattern;
        this.imgAddress = imgFolder + `${this.isWhite ? 'w' : 'b'}${this.type}.png`;

        this.#showInBoard();
    }
    static analyseMove(currentPos, destPos) {
        let moveShape = '';

        currentPos = Piece.destructPosition(currentPos);
        destPos = Piece.destructPosition(destPos);

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
    static destructPosition(position) {
        position = position.name;

        let x = position[0].charCodeAt() - 64;

        return { x: x, y: parseInt(position[1]) }
    }
    #showInBoard(remove) {
        let url = remove ? null : `url("${this.imgAddress}")`;
        this.position.square.style.backgroundImage = url;
        if (remove) {
            this.position.square.classList.remove('occupied');
        } else {
            this.position.square.classList.add('occupied');
        }
    }
    moveAuthorize(pos) {
        //is it my turn?
        // if (this.Board.turn.isWhite !== this.isWhite)
        //     return false

        //does the move shape match the move pattern of the piece?
        let moveShape = Piece.analyseMove(this.position, pos);
        if (!new RegExp(`^(${this.movePattern})$`).test(moveShape))
            return false

        //is there another piece in the way? (for pawn's first move too)

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
            return false
        }
        if (pos.occupent) {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name} taking ${pos.occupent.type}`); //this is the same for every piece
            pos.occupent.kill();
        } else {
            console.log(`moving the ${this.position.name} ${this.type} to ${pos.name}`); //this is the same for every piece
        }

        this.#showInBoard(true);
        this.position.occupent = null;

        this.position = pos;

        this.position.occupent = this;
        this.#showInBoard();

        this.firstMove = false;
        return true
    }
    kill() {
        this.isKilled = true;
        this.position = null;
        this.move = null;
    }
}

export class Pawn extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super("Pawn", position, isWhite, 'u', Board);
    }
    moveAuthorize(pos) {
        let patternBackup = this.movePattern;
        let moveShape = Piece.analyseMove(this.position, pos);

        if (moveShape === 'u' && pos.occupent) {
            this.movePattern = ''
        }
        if ((moveShape === 'ur' || moveShape === 'ul') && pos.occupent) {
            this.movePattern += '|ur|ul'
        }
        if (this.firstMove) {
            this.movePattern += '|uu';
        }
        let res = super.moveAuthorize(pos);
        //reset the move pattern after the move is done
        this.movePattern = patternBackup;

        return res
    }
    move(pos) {
        let move = super.move(pos);
        if (move && /.8/.test(pos.name)) {
            new Queen(this.position, this.Board, { isWhite: this.isWhite });
            this.kill();
        }
    }
}

export class Knight extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Knight', position, isWhite, '([ud])[lr]\\2|[du][lr]{2}', Board);
    }
}

export class Bishop extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Bishop', position, isWhite, '([ud][lr])+', Board);
    }
}

export class Rook extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Rook', position, isWhite, 'u+|d+|l+|r+', Board);
    }
}

export class Queen extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('Queen', position, isWhite, '(u+|d+|l+|r+)|(([ud][lr])+)', Board);
    }
}

export class King extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super('King', position, isWhite, 'u|d|r|l|[ud][lr]', Board);
    }
}
