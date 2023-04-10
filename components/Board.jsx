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
    setUpBoard(Board, isWhite);
    setBoardClicks(Board)
  })

  window.Board = Board;
  window.p = Board.positions;

  return (
    <div id="Board">
      <TheFile position={Board.positions}>A</TheFile>
      <TheFile position={Board.positions}>B</TheFile>
      <TheFile position={Board.positions}>C</TheFile>
      <TheFile position={Board.positions}>D</TheFile>
      <TheFile position={Board.positions}>E</TheFile>
      <TheFile position={Board.positions}>F</TheFile>
      <TheFile position={Board.positions}>G</TheFile>
      <TheFile position={Board.positions}>H</TheFile>
    </div>
  )
}


export default Board