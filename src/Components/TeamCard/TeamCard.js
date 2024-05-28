import React from 'react'
import './TeamCard.css'
function TeamCard({ titile , img , name}) {
  return (
    <div className='tame-card'>
        <img className='tame-img' src={img}/>
        <h1 className='team-name'>{name}</h1>
        <p className='team-titlel'>{titile}</p>
    </div>
  )
}

export default TeamCard