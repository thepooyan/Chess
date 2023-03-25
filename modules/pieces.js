const imgFolder = `/Chess set themes/chessdotcom/`;

function getAxies(pos) {
    return {x:parseInt(pos[1]), y:pos[0]}
}

class Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        position.occupent = this;
        this.position = position;
        this.currentSquare = position.square;
        this.isWhite = isWhite;
        this.coordinates = getAxies(position.square.id);
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
        this.type = 'Pawn';
    }
    move(pos) {
        let destPos = getAxies(pos.id);
        this.position.occupent = null;
        if (this.isWhite) {
            if (this.coordinates.x + 1 === destPos.x) {
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
        this.type = 'Knight';
    }
}

export class Bishop extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}b.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Bishop';
    }
}

export class Rook extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}r.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Rook';
    }
}

export class Queen extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}q.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Queen';
    }
}

export class King extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}k.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentSquare.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'King';
    }
}
