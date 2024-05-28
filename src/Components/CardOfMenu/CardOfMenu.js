import React from 'react'
import './CardOfMenu.css'
import {Link, useParams} from 'react-router-dom'

function CardOfMenu({ title,category,rs,description,img,id }) {
  return (
    <div>
        <div className='menu-card'>
            <img className='menu-img' src={img}/>
            <h1 className='menu-title'>{title}</h1>
            <h2 className='menu-cat' >{category}</h2>
            <span className='menu-rs'>{rs}</span>
            <p className='menu-des'>{description.substring(0,130)}{description.length > 600 ? "..." : <Link to={`./MenuCard/${id}`}>Read More</Link>}</p>

        </div>
    </div>
  )
}

export default CardOfMenu