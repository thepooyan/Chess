import { useEffect, useRef } from 'react';
import setBoardClicks from '../modules/setBoardClicks';
import setUpBoard from '../modules/setUpBoard';
import Timer from '../modules/Timer';
import './Board.scss';
import TheFile from './TheFile';
import TheFileAlt from './TheFileAlt';
import PlayerInfo from "../components/PlayerInfo";

function Board({ isWhite, timer, player1, player2 }) {

  Board.positions = {};
  Board.pieces = { white: {}, black: {} }
  Board.mainRef = useRef(null);

  Board.turn = {
    isWhite: true,
    change() {
      this.isWhite = !this.isWhite
    }
  }

  Board.clock = {
    white: new Timer(timer * 60),
    black: new Timer(timer * 60),
    whiteRef: useRef(null),
    blackRef: useRef(null),
    change() {
      Board.clock.white.toggle();
      Board.clock.black.toggle();
      Board.clock.whiteRef.current.classList.toggle('deactive');
      Board.clock.blackRef.current.classList.toggle('deactive');
    },
    start() {
      Board.clock.black.start();
      Board.clock.blackRef.current.classList.remove('deactive');
      console.log('clock started!')
    },
    kill() {
      Board.clock.white.reset();
      Board.clock.black.reset();
      Board.clock.whiteRef.current.classList.add('deactive');
      Board.clock.blackRef.current.classList.add('deactive');
    }
  }

  Board.clock.white.onchange = t => {
    Board.clock.whiteRef.current.innerText = t.getString;
  }
  Board.clock.black.onchange = t => {
    Board.clock.blackRef.current.innerText = t.getString;
  }
  Board.isWhite = isWhite;
  Board.isFirstMove = true;

  Board.aftermove = () => {
    Board.turn.change();

    if (timer) {
      if (Board.isFirstMove) {
        Board.clock.start();
      } else {
        Board.clock.change();
      }
    }

    Board.isFirstMove = false;
  }

  Board.clock.white.onfinish = _ => {
    alert('white lost on time')
    Board.clock.kill();
  }
  Board.clock.black.onfinish = _ => {
    alert('black lost on time')
    Board.clock.kill();
  }

  useEffect(() => {
    setUpBoard(Board);
    setBoardClicks(Board);
  })

  window.Board = Board;
  window.p = Board.positions;

  let cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  if (!isWhite) cols = cols.slice().reverse();

  return (
    <div id="BoardWrapper">
      <PlayerInfo name={player2.name} rating={player2.rating} reverse={Board.isWhite} clockRef={Board.isWhite ? Board.clock.blackRef : Board.clock.whiteRef} initTime={Board.clock.white.getString} />
      <div id="Board" ref={Board.mainRef}>
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
      <PlayerInfo name={player1.name} rating={player1.rating} reverse={!Board.isWhite} clockRef={!Board.isWhite ? Board.clock.blackRef : Board.clock.whiteRef} initTime={Board.clock.white.getString} />
    </div>
  )
}


export default Board