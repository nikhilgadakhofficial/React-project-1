import React from 'react'
import './MenuCard.css'
import CardOfMenu from '../../Components/CardOfMenu/CardOfMenu';
import { MANU } from '../../Components/Confg/Confg';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
function MenuCard() {
    const { id } = useParams();
    const val = id;
  return (
    
         <div className='container-obj'>
          <Navbar/>
    
    {
     MANU.map((coursObje, index)=>{
      const {title,description,img,rs,category,id}= coursObje;
      if( val == id){
      return <CardOfMenu id={id} title={title}  description={description}img={img} rs={rs}
      category={category}  key={index}/>
      }
     })
 }
   <Footer/>
  </div>
   
  )
}

export default MenuCard