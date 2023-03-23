import { Pawn } from '../modules/pieces';
import setUpBoard from '../modules/setUpBoard';
import  './Board.scss';
import TheFile from './TheFile';

let position = {};
function Board() {
  return (
   <div id="Board">
    <TheFile position={position}>A</TheFile>
    <TheFile position={position}>B</TheFile>
    <TheFile position={position}>C</TheFile>
    <TheFile position={position}>D</TheFile>
    <TheFile position={position}>E</TheFile>
    <TheFile position={position}>F</TheFile>
    <TheFile position={position}>G</TheFile>
    <TheFile position={position}>H</TheFile>
   </div> 
  )
}
console.log(position)
Board.positions = {
 A1: 'A1'
}
Board.putPiece = (piece, position) => {
console.log(`a new ${piece} is being placed at ${position}`);
}
Board.movePiece = (piece, position) => {
  console.log(`moving ${piece} from OLD to ${position}`);
}
setUpBoard(Board);


export default Board