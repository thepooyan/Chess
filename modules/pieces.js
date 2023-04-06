const imgFolder = `/Chess set themes/chessdotcom/`;

function destructPosition(position) {
    position = position.square.id;

    let y = position[0].charCodeAt() - 64;

    return { x: parseInt(position[1]), y: y }
}

class Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        position.occupent = this;
        this.position = position;
        this.isWhite = isWhite;
        this.coordinates = destructPosition(position);
    }
    generateImgAddress(base) {
        let baseName = `${this.isWhite ? 'w' : 'b'}${base}.png`;
        this.imgAddress = imgFolder + baseName;
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
        super(position, { isWhite });
        this.generateImgAddress('p');
        this.type = 'Pawn';
        this.setBackground();
    }
}

export class Knight extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super(position, { isWhite });
        let baseName = `${this.isWhite ? 'w' : 'b'}n.png`;
        this.imgAddress = imgFolder + baseName;
        this.position.square.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Knight';
    }
}

export class Bishop extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super(position, { isWhite });
        let baseName = `${this.isWhite ? 'w' : 'b'}b.png`;
        this.imgAddress = imgFolder + baseName;
        this.position.square.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Bishop';
    }
}

export class Rook extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super(position, { isWhite });
        let baseName = `${this.isWhite ? 'w' : 'b'}r.png`;
        this.imgAddress = imgFolder + baseName;
        this.position.square.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Rook';
    }
}

export class Queen extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super(position, { isWhite });
        let baseName = `${this.isWhite ? 'w' : 'b'}q.png`;
        this.imgAddress = imgFolder + baseName;
        this.position.square.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'Queen';
    }
}

export class King extends Piece {
    constructor(position, { isWhite } = { isWhite: true }) {
        super(position, { isWhite });
        let baseName = `${this.isWhite ? 'w' : 'b'}k.png`;
        this.imgAddress = imgFolder + baseName;
        this.position.square.style.backgroundImage = `url("${this.imgAddress}")`;
        this.type = 'King';
    }
}
