const imgFolder = `/Chess set themes/chessdotcom/`;

export class Piece {
    constructor(startingPos, {isWhite} = {isWhite: true}) {
        this.startingPos = startingPos;
        this.isWhite = isWhite;
    }
    getImg() {
        return this.imgAddress;
    }
    getStartingPos() {
        return this.startingPos;
    }
}

export class Pawn extends Piece {
    constructor() {
        super();
        let baseName = `${this.isWhite?'w':'b'}p.png`;
        this.imgAddress = imgFolder + baseName;
    }

}

class Knight extends Piece { }

class Bishop extends Piece { }

class Rook extends Piece { }

class Queen extends Piece { }

class King extends Piece { }
