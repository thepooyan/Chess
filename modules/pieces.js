const imgFolder = `/Chess set themes/chessdotcom/`;

function getAxies(pos) {
    return {x:parseInt(pos[1]), y:pos[0]}
}

class Piece {
    constructor(currentSquare, { isWhite } = { isWhite: true }) {
        this.currentSquare = currentSquare;
        this.isWhite = isWhite;
        this.pos = getAxies(currentSquare.id);
    }
    getImg() {
        return this.imgAddress;
    }
    getStartingPos() {
        return this.currentSquare;
    }
}

export class Pawn extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}p.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
    move(pos) {
        let destPos = getAxies(pos.id);
        if (this.isWhite) {
            if (this.pos.x + 1 === destPos.x) {
                console.log('granted');
            } else {
                console.log('illigal move');
            }
        } else {

        }
    }
}

export class Knight extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}n.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Bishop extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}b.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Rook extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}r.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Queen extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}q.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class King extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}k.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}
