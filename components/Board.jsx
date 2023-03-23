import styles from './Board.module.scss';
import TheFile from './TheFile';

function Board() {
  return (
   <div id={styles.Board}>
    <TheFile>A</TheFile>
    <TheFile>B</TheFile>
    <TheFile>C</TheFile>
    <TheFile>D</TheFile>
    <TheFile>E</TheFile>
    <TheFile>F</TheFile>
    <TheFile>G</TheFile>
    <TheFile>H</TheFile>
   </div> 
  )
}
Board.pieces = {
  Pawn: 1,
  Bishop: 3,
  Knight: 3,
  Rook: 5,
  Queen: 9,
  King: 0
}
Board.putPiece = (piece, position) => {
console.log(`a new ${piece} is being placed at ${position}`);
}
Board.movePiece = (piece, position) => {
  console.log(`moving ${piece} from OLD to ${position}`);
}

export default Board