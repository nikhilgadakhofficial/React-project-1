import React from 'react'
import './CardOf.css'

function CardOf({title,description,img}) {
    return (
      <div>
    
       <div className='container-of-card'>
          <img className='card-img' src={img}/>
          <h1 className='card-title'>{title}</h1>
          <p className='card-description'>{description}</p>
       </div>
  
  
      </div>
    )
  }

export default CardOf