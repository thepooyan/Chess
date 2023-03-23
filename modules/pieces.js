const imgFolder = `/Chess set themes/chessdotcom/`;

class Piece {
    constructor(isWhite = true) {
        this.isWhite = isWhite;
    }
}

export class Pawn extends Piece {
    constructor() {
        super();
        let baseName = `${this.isWhite?'w':'b'}p.png`;
        this.imgAddress = imgFolder + baseName;
    }
    getImg() {
        return this.imgAddress;
    }
}

class Knight extends Piece { }

class Bishop extends Piece { }

class Rook extends Piece { }

class Queen extends Piece { }

class King extends Piece { }
