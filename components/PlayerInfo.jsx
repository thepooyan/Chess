import React from 'react'
import './PlayerInfo.scss'

const PlayerInfo = ({name, rating, picAddress}) => {

    const picSrc = picAddress ? picAddress : "/anonymous_player.gif";

  return (
    <section className='playerInfo'>
        <img src={picSrc} />
        {`${name} (${rating})`}
    </section>
  )
}

export default PlayerInfo