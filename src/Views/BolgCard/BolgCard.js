import React from 'react'
import './BolgCard.css'
function BolgCard({img ,   hading,  data,  date}) {
  return (
    <div className='blog-card'>

      <img className='bolg-img' src={img}/>
      <h1 className='bolg-hading' >{hading}</h1>
      <p className='bolg-data'>{data}</p>
      <h1 className='bolg-date'>{date}</h1>

    </div>
  )
}

export default BolgCard