import { useEffect } from 'react';
import setUpBoard from '../modules/setUpBoard';
import './Board.scss';
import TheFile from './TheFile';

function Board() {

  Board.positions = {};

  useEffect(() => {
    setUpBoard(Board);

    function layerOneClick() {
      Object.values(Board.positions).forEach(position => {
        if (position.occupent) {

          position.square.onclick = _ => {
            let piece = position.occupent;
            position.square.classList.add('selected');

            Object.values(Board.positions).forEach(position2 => {
              position2.square.onclick = e => {
                piece.move(position2);
                position.square.classList.remove('selected');
                layerOneClick();
              }
            })

          }
        } else {
          position.square.onclick = null;
        }
      })
    }
    layerOneClick();

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