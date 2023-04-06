import { useEffect } from 'react';
import setUpBoard from '../modules/setUpBoard';
import './Board.scss';
import TheFile from './TheFile';

function Board() {

  Board.positions = {};

  useEffect(() => {
    
    //test onclick for select
    Object.values(Board.positions).forEach(item => {
      item.square.onclick = _ => {
        item.square.classList.toggle('dot');
        console.log(item.occupent)
      }
    })

    setUpBoard(Board)
  })

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