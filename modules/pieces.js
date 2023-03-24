const imgFolder = `/Chess set themes/chessdotcom/`;

class Piece {
    constructor(currentPos, { isWhite } = { isWhite: true }) {
        this.currentPos = currentPos;
        this.isWhite = isWhite;
    }
    getImg() {
        return this.imgAddress;
    }
    getStartingPos() {
        return this.currentPos;
    }
}

export class Pawn extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}p.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
        // debugger;
    }
}

class Knight extends Piece { }

class Bishop extends Piece { }

class Rook extends Piece { }

class Queen extends Piece { }

class King extends Piece { }
