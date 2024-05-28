import React from 'react'
import './TeamCard.css'
import ImgTame1 from './../../Views/Home/phone-call (1).png'
import ImgTame2 from './../../Views/Home/facebook (2).png'
import ImgTame3 from './../../Views/Home/instagram (1).png'
function TeamCard({ titile , img , name}) {
  return (
    <div className='tame-card'>
        <img className='tame-img' src={img}/>
        <h1 className='team-name'>{name}</h1>
        <p className='team-titlel'>{titile}</p>
         <div className='img-card'>
        <img className='in-img' src={ImgTame1}/>
        <img className='in-img' src={ImgTame2}/>
        <img className='in-img' src={ImgTame3}/>
        </div>
    </div>
  )
}

export default TeamCard