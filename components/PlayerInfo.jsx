import React from 'react'
import './PlayerInfo.scss'

const PlayerInfo = ({name, rating, picAddress}) => {

    const picSrc = picAddress ? picAddress : "/anonymous_player.gif";

  return (
    <section className='playerInfo'>
        <img src={picSrc} />
        <div>{name}<span>({rating})</span></div>
    </section>
  )
}

export default PlayerInfo