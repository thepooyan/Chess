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
    }
}

export class Knight extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}n.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Bishop extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}b.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Rook extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}r.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class Queen extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}q.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}

export class King extends Piece {
    constructor(...args) {
        super(...args);
        let baseName = `${this.isWhite ? 'w' : 'b'}k.png`;
        this.imgAddress = imgFolder + baseName;
        this.currentPos.style.backgroundImage = `url("${this.imgAddress}")`;
    }
}
