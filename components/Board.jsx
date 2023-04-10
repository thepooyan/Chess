import { useEffect } from 'react';
import setBoardClicks from '../modules/setBoardClicks';
import setUpBoard from '../modules/setUpBoard';
import './Board.scss';
import TheFile from './TheFile';

function Board({ isWhite }) {

  Board.positions = {};
  Board.pieces = {white:{}, black:{}}

  Board.turn = {
    isWhite: true,
    change() {
      this.isWhite = !this.isWhite
    }
  }
  Board.isWhite = isWhite;

  Board.aftermove = () => {
    Board.turn.change();
  }

  useEffect(() => {
    setUpBoard(Board);
    setBoardClicks(Board)
  })

  window.Board = Board;
  window.p = Board.positions;

  let cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  if (!isWhite) cols = cols.slice().reverse();

  return (
    <div id="Board">
      {cols.map(item=>{
        return (
          <TheFile position={Board.positions} key={item} isWhite={isWhite}>{item}</TheFile>
        )
      })}
    </div>
  )
}


export default Board