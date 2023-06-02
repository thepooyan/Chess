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

  Board.turn = {
    isWhite: true,
    change() {
      this.isWhite = !this.isWhite
    }
  }

  const whiteClockRef = useRef(null);
  const blackClockRef = useRef(null);

  Board.clock = {
    white: new Timer(timer * 60),
    black: new Timer(timer * 60),
    change() {
      Board.clock.white.toggle();
      Board.clock.black.toggle();
      whiteClockRef.current.classList.toggle('deactive');
      blackClockRef.current.classList.toggle('deactive');
    },
    start() {
      Board.clock.black.start();
      blackClockRef.current.classList.remove('deactive');
      console.log('clock started!')
    },
    kill() {
      Board.clock.white.reset();
      Board.clock.black.reset();
      whiteClockRef.current.classList.add('deactive');
      blackClockRef.current.classList.add('deactive');
    }
  }

  Board.clock.white.onchange = t => {
    console.log('white time', t.getString)
    whiteClockRef.current.innerText = t.getString;
  }
  Board.clock.black.onchange = t => {
    console.log('black time', t.getString)
    blackClockRef.current.innerText = t.getString;
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
    console.log('white lost on time')
    Board.clock.kill();
  }
  Board.clock.black.onfinish = _ => {
    console.log('black lost on time')
    Board.clock.kill();
  }

  useEffect(() => {
    setUpBoard(Board);
    setBoardClicks(Board);
    console.log(whiteClockRef)
  })

  window.Board = Board;
  window.p = Board.positions;

  let cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  if (!isWhite) cols = cols.slice().reverse();

  return (
    <div id="BoardWrapper">
      <PlayerInfo name={player2.name} rating={player2.rating} reverse={Board.isWhite} clockRef={Board.isWhite ? blackClockRef : whiteClockRef} />
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
      <PlayerInfo name={player1.name} rating={player1.rating} reverse={!Board.isWhite} clockRef={!Board.isWhite ? blackClockRef : whiteClockRef} />
    </div>
  )
}


export default Board