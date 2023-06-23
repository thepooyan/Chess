import { pushNotif } from '../components/Notif';
import config from '../config/chessConfig.json';
const imgFolder = `/Chess set themes/${config.theme}/`;




class Piece {
    isKilled = false;
    firstMove = true;

    constructor(position, isWhite, movePattern, Board) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.type = this.constructor.name;
        this.Board = Board;
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
    static restructPosition(x, y) {
        return `${String.fromCharCode(x + 64)}${y}`
    }
    static isCourseClear(x, y1, y2, Board, isRow) {
        let count = Math.max(y1, y2) - 1 - Math.min(y1, y2);
        for (let i = 0; i < count; i++) {
            let y = Math.min(y2, y1) + 1 + i;
            let square;
            if (isRow) {
                square = Piece.restructPosition(y, x);
            } else {
                square = Piece.restructPosition(x, y);
            }
            if (Board.positions[square].occupent)
                return false
        }
        return true
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
        try {
            //am i moving?
            if (pos.name === this.position.name)
                throw new Error(`can't stay still :/`)

            //is it my turn?
                if (this.Board.turn.isWhite !== this.isWhite)
                throw new Error(`it's not your move`)

            //does the move shape match the move pattern of the piece?
            let moveShape = Piece.analyseMove(this.position, pos);
            if (!new RegExp(`^(${this.movePattern})$`).test(moveShape))
                throw new Error('not compatible with move pattern')

            //is the destenation occupied?
            if (pos.occupent) {
                if (pos.occupent.isWhite === this.isWhite)
                    throw new Error(`can't take your own piece`)
            }

            //is there another piece in the way?
            let here = Piece.destructPosition(this.position);
            let dest = Piece.destructPosition(pos);


            //checking columns
            if (here.x === dest.x) {
                if (!Piece.isCourseClear(here.x, dest.y, here.y, this.Board))
                    throw new Error('another vertical piece in the way.')
            }
            //checking rows
            if (here.y === dest.y) {
                if (!Piece.isCourseClear(here.y, dest.x, here.x, this.Board, true))
                    throw new Error('another horizantal piece in the way')
            }

            //checking diagnals
            if (here.x - here.y === dest.x - dest.y || here.x - dest.x === dest.y - here.y) {
                let isRising = here.x - here.y === dest.x - dest.y;
                let count = Math.abs(here.x - dest.x) - 1;
                let minX = Math.min(here.x, dest.x);
                let minY = Math.min(here.y, dest.y);
                let maxY = Math.max(here.y, dest.y);

                if (count > 0) {
                    for (let i = 0; i < count; i++) {
                        let x = minX + i + 1;
                        let y;
                        if (isRising)
                            y = minY + i + 1;
                        else
                            y = maxY - i - 1;

                        let squareName = Piece.restructPosition(x, y);
                        
                        if (this.Board.positions[squareName].occupent)
                            throw new Error(`another piece in the way of diagnal (${squareName})`)

                    }
                }
            }

            //did this move result in a check for my own king?
            //...

        } catch (err) {
            pushNotif(<>unauthorized move (the {this.position.name} {this.type} TO {pos.name})<br/>{err.message}</>);
            return false
        }
        return true
    }
    move(pos) {
        if (!this.moveAuthorize(pos)) return false
        let whiteOrBlack = this.isWhite ? 'white' : 'black';

        if (pos.occupent) {
            console.log(`${whiteOrBlack} moving the ${this.position.name} ${this.type} to ${pos.name} taking ${pos.occupent.type}`);
            pos.occupent.kill();
        } else {
            console.log(`${whiteOrBlack} moving the ${this.position.name} ${this.type} to ${pos.name}`)
        }

        this.animate(pos);

        this.firstMove = false;
        this.Board.aftermove();
        return true
    }
    animate(pos) {
        let here = Piece.destructPosition(this.position);
        let dest = Piece.destructPosition(pos);
        let x = dest.x - here.x;
        let y = here.y - dest.y;
        if (!this.Board.isWhite) {
            x = -x; y = -y;
        }
        x = x * 100;
        y = y * 100;
        let movingSquare = this.position.square;
        movingSquare.style.transform = `translate(${x}px, ${y}px)`;
        movingSquare.addEventListener('transitionend', () => {
            this.transport(pos);
            movingSquare.style.transform = '';
        })
    }
    transport(pos) {
        this.#showInBoard(true);
        this.position.occupent = null;

        this.position = pos;

        this.position.occupent = this;
        this.#showInBoard();
    }
    kill() {
        this.#showInBoard(true);
        this.isKilled = true;
        this.position = null;
        this.move = null;
    }
}

export class Pawn extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        let forwardSymbole = isWhite ? 'u' : 'd';
        super(position, isWhite, forwardSymbole, Board);
        this.forwardSymbole = forwardSymbole;
    }
    moveAuthorize(pos) {
        let patternBackup = this.movePattern;
        let moveShape = Piece.analyseMove(this.position, pos);

        if (moveShape === `${this.forwardSymbole}` && pos.occupent) {
            this.movePattern = ''
        }
        if ((moveShape === `${this.forwardSymbole}r` || moveShape === `${this.forwardSymbole}l`) && pos.occupent) {
            this.movePattern += `|${this.forwardSymbole}r|${this.forwardSymbole}l`
        }
        if (this.firstMove) {
            this.movePattern += `|${this.forwardSymbole}${this.forwardSymbole}`;
        }

        let result = super.moveAuthorize(pos);
        //reset the move pattern after the move is done
        this.movePattern = patternBackup;

        if (result && /.8/.test(pos.name)) {
            setTimeout(() => {
                new Queen(this.position, this.Board, { isWhite: this.isWhite });
                this.kill();
            }, 0);
        }

        return result
    }
}

export class Knight extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super(position, isWhite, '([ud])[lr]\\2|[du][lr]{2}', Board);
    }
}

export class Bishop extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super(position, isWhite, '([ud][lr])+', Board);
    }
}

export class Rook extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super(position, isWhite, 'u+|d+|l+|r+', Board);
    }
}

export class Queen extends Piece {
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super(position, isWhite, '(u+|d+|l+|r+)|(([ud][lr])+)', Board);
    }
}

export class King extends Piece {
    rookTransport = false;
    constructor(position, Board, { isWhite } = { isWhite: true }) {
        super(position, isWhite, 'u|d|r|l|[ud][lr]', Board);
    }
    moveAuthorize(pos) {
        let patternBackup = this.movePattern;
        let moveShape = Piece.analyseMove(this.position, pos);
        let whiteOrBlack = this.isWhite ? 'white' : 'black';

        if (this.firstMove) {
            let kingP = Piece.destructPosition(this.position);

            if (moveShape === 'rr') {
                let rook = this.Board.pieces[whiteOrBlack].rook_R;
                let rookP = Piece.destructPosition(rook.position);
                if (Piece.isCourseClear(kingP.y, kingP.x, rookP.x, this.Board, true) && rook.firstMove) {
                    this.movePattern += '|rr';
                    this.rookTransport = { place: this.Board.positions[`F${kingP.y}`], rook: rook };
                }
            }
            if (moveShape === 'll') {
                let rook = this.Board.pieces[whiteOrBlack].rook_L;
                let rookP = Piece.destructPosition(rook.position);
                if (Piece.isCourseClear(kingP.y, kingP.x, rookP.x, this.Board, true) && rook.firstMove) {
                    this.movePattern += '|ll';
                    this.rookTransport = { place: this.Board.positions[`D${kingP.y}`], rook: rook };
                }
            }

        }

        setTimeout(() => {
            this.movePattern = patternBackup;
        }, 0);

        return super.moveAuthorize(pos);
    }
    move(pos) {
        let move = super.move(pos);
        if (move) {
            this.aftermove();
        }
        return move
    }
    aftermove() {
        if (this.rookTransport) {
            this.rookTransport.rook.transport(this.rookTransport.place);
            this.rookTransport = false;
        }
    }
}
