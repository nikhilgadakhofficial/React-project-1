import React from 'react'
import './MenuCard.css'
import CardOfMenu from '../../Components/CardOfMenu/CardOfMenu';
import { MANU } from '../../Components/Confg/Confg';
import { useParams } from 'react-router-dom';
function MenuCard() {
    const { id } = useParams();
    const val = id;
  return (
    
         <div className='container-obj'>
    
    {
     MANU.map((coursObje, index)=>{
      const {title,description,img,rs,category,id}= coursObje;
      if( val == id){
      return <CardOfMenu id={id} title={title}  description={description}img={img} rs={rs}
      category={category}  key={index}/>
      }
     })
 }

  </div>
   
  )
}

export default MenuCard