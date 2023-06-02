import React from 'react'
import './PlayerInfo.scss'

const PlayerInfo = ({name, rating, picAddress, reverse}) => {

    const picSrc = picAddress ? picAddress : "/anonymous_player.gif";

  return (
    <section className="playerInfo">
        <img src={picSrc} />
        <div>{name}<span>({rating})</span></div>
        <div className={`clock ${reverse?'ops deactive':''}`}>5:00</div>
    </section>
  )
}

export default PlayerInfo