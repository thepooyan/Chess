import { Pawn } from '../modules/pieces';
import setUpBoard from '../modules/setUpBoard';
import  './Board.scss';
import TheFile from './TheFile';

function Board() {
  return (
   <div id="Board">
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
Board.putPiece = (piece, position) => {
console.log(`a new ${piece} is being placed at ${position}`);
}
Board.movePiece = (piece, position) => {
  console.log(`moving ${piece} from OLD to ${position}`);
}
setUpBoard(Board);
let RPawn = new Pawn(true);
console.log(RPawn.getImg())

export default Board