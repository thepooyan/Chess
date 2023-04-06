const imgFolder = `/Chess set themes/chessdotcom/`;

function destructPosition(position) {
    position = position.square.id;

    let y = position[0].charCodeAt() - 64;

    return { x: parseInt(position[1]), y: y }
}

class Piece {
    constructor(type, position, imgBase, { isWhite } = { isWhite: true }) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.type = type;
        this.coordinates = destructPosition(position);

        this.imgAddress = this.generateImgAddress(imgBase);
        this.setBackground();
    }
    generateImgAddress(base) {
        let baseName = `${this.isWhite ? 'w' : 'b'}${base}.png`;
        return imgFolder + baseName;
    }
    setBackground(address = this.imgAddress) {
        this.position.square.style.backgroundImage = `url("${address}")`;
    }
    moveAuthorize(pos) {
        return true //this is diffrent for every piece
    }
    move(pos) {
        if (!this.moveAuthorize(pos)) return

        console.log(`moving from ${this.position} to ${pos}`); //this is the same for every piece

        this.setBackground(null);
        this.position.occupent = null;

        this.position = pos;

        this.position.occupent = this;
        this.setBackground();
        // debugger;
    }
}

export class Pawn extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super("Pawn", position, 'p', { isWhite });
    }
}

export class Knight extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Knight', position, 'n', { isWhite });
    }
}

export class Bishop extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Bishop', position, 'b', { isWhite });
    }
}

export class Rook extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Rook', position, 'r', { isWhite });
    }
}

export class Queen extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('Queen', position, 'q', { isWhite });
    }
}

export class King extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super('King', position, 'k', { isWhite });
    }
}
