import React, { useEffect, useRef } from 'react'
import './PlayerInfo.scss'

const PlayerInfo = ({ name, rating, picAddress, reverse, clockRef, initTime }) => {

  const picSrc = picAddress ? picAddress : "/anonymous_player.gif";

  return (
    <section className="playerInfo">
      <img src={picSrc} />
      <div>{name}<span>({rating})</span></div>
      <div ref={clockRef} className={`clock deactive ${reverse ? 'ops' : ''}`}>{initTime}</div>
    </section>
  )
}

export default PlayerInfo