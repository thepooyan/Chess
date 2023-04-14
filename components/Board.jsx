import { useEffect } from 'react';
import setBoardClicks from '../modules/setBoardClicks';
import setUpBoard from '../modules/setUpBoard';
import Timer from '../modules/Timer';
import './Board.scss';
import TheFile from './TheFile';
import TheFileAlt from './TheFileAlt';

function Board({ isWhite, timer }) {

  Board.positions = {};
  Board.pieces = { white: {}, black: {} }

  Board.turn = {
    isWhite: true,
    change() {
      this.isWhite = !this.isWhite
    }
  }
  Board.clock = {
    white: new Timer(timer * 60),
    black: new Timer(timer * 60),
    change() {
      Board.clock.white.toggle();
      Board.clock.black.toggle();
    },
    start() {
      Board.clock.white.start();
    },
    kill() {
      Board.clock.white.reset();
      Board.clock.black.reset();
    }
  }
  Board.clock.white.onchange = t => {
    console.log('white time', t.getString)
  }
  Board.clock.black.onchange = t => {
    console.log('black time', t.getString)
  }
  Board.isWhite = isWhite;
  Board.isFirstMove = true;

  Board.aftermove = () => {
    Board.turn.change();
    timer && Board.clock.change();

    if (Board.isFirstMove && timer) {
      Board.clock.white.pause();
      Board.isFirstMove = false;
      console.log('clock started!')
    }
  }

  Board.clock.white.onfinish = _ => {
    console.log('white lost on time')
    Board.clock.kill();
  }
  Board.clock.black.onfinish = _ => {
    console.log('black lost on time')
    Board.clock.kill();
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
      <div className="pieces">
        {cols.map(item => {
          return (
            <TheFile position={Board.positions} key={item} isWhite={isWhite}>{item}</TheFile>
          )
        })}
      </div>
      
      <div className="background">
        {cols.map(item => {
          return <TheFileAlt position={Board.positions} key={item} isWhite={isWhite} noRef={true}>{item}</TheFileAlt>
        })}
      </div>
    </div>
  )
}


export default Board