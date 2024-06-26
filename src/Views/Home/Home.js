import React from 'react'
import './Home.css'
import { DATA , ADD , MANU, TEAM, BOLG} from '../../Components/Confg/Confg'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import ImgAbout1 from './about-1.jpg'
import ImgAbout2 from './about-2.jpg'
import ImgAbout3 from './about-3.jpg'
import ImgAbout4 from './about-4.jpg'
import { Link } from 'react-router-dom'
import CardOf from '../../Components/CardOf/CardOf'
import CardOfMenu from '../../Components/CardOfMenu/CardOfMenu'
import TeamCard from '../../Components/TeamCard/TeamCard'
import BolgCard from '../BolgCard/BolgCard'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>

        <Navbar/>

    <div className='card-container'>

<div className='card-div'>
<h1 className='hading'>YOUR FAVOURITE FOOD DELIVERED & FRESH</h1>
<p className='titile'>
Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Consequuntur, Natus Magnam Incidunt Iste, Architecto Voluptate Amet Veniam Odio, Reiciendis Modi</p>

<button className='btn'>Order Now</button>
</div>

<div className='card-div'>

<div className='A-card'>
          <img className='A-img-2' src={ImgAbout1}  />
          <img className='A-img-1' src={ImgAbout2}  />
          <img className='A-img-1' src={ImgAbout3}  />
          <img className='A-img-2' src={ImgAbout4}  />
          </div>

</div>

    </div>


    <div className='container-obj'>      
            
      {
        DATA.map((coursObe, index)=>{
         const {title,description,img}= coursObe;
         return <Card title={title}  description={description} img={img} key={index}/>
        })
    }
         

    </div>
     
    <h1 className='hading-about'>About Us </h1>

    <div className='card-container'>


      <div className='card-of-about'>
        <img className='img-of-about' src='https://www.yudaah.com/demo/fast-food-website-template/assets/images/about.png'/>
      </div>

      <div className='card-of-about'>

        <h1 className='hading-of-about'>Food Is Important Part Of A Balanced Diet</h1>
        <p className='title-of-about'>Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine, which means the first impression happens long before they set foot on-premises. It happens online. And when it does, the restaurant description plays a pivotal role.</p>
        <p className='title-of-about'>ubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.</p>

        <Link className='btn' >Reed more </Link>
        
      </div>

       
    </div>

    <h1 className='hading-about'>How It Works</h1>

    <p className='title-of-about'>Like most kids, mine refuse to eat certain veggies. In order to feed them healthy foods, I have to be sneaky sometimes. The veggies give these meatballs a pleasing texture while providing valuable nutrients—and I’m happy to say my kids love ’em. Courtney Stultz, Weir, Kansas</p>

    
    <div className='container-obj'>      
            
      {
        ADD.map((coursObj, index)=>{
         const {title,description,img}= coursObj;
         return <CardOf title={title}  description={description} img={img} key={index}/>
        })
    }
         

    </div>
    <h1 className='hading-about'>Explore Our Best Menu</h1>
    <p className='title-of-about'>Located in the heart of the city, Taj Hotel has been an epitome of luxury and hospitality since its establishment in 1903. Over the years, it has welcomed discerning guests, celebrities, and dignitaries from around the world.</p>
     
     <div className='container-obj'>
    
       {
        MANU.map((coursObje, index)=>{
         const {title,description,img,rs,category,id}= coursObje;
         return <CardOfMenu id={id} title={title}  description={description} img={img} rs={rs}
         category={category}  key={index}/>
        })
    }

     </div>

     <h1 className='hading-about'>Explore Our Team</h1>
     <p  className='title-of-about'>n any industry where the people behind a company are as important as the company itself, you’re likely to find a kind of expanded “about” page that includes information on individual employees. “Meet the Team” pages are popular among web design and other creative firms, but are also found on sites within various other industries.</p>


     <div className='container-obj'>
    
    {
     TEAM.map((coursObje, index)=>{
      const {img,titile,name}= coursObje;
      return <TeamCard  titile={titile} name={name} img={img} key={index}/>
     })
 }

  </div>

  <h1 className='hading-about'>Explore Our News</h1>

  <div className='container-obj'>
    
    {
     BOLG.map((coursObje, index)=>{
      const {img,  hading,  data,  date}= coursObje;
      return <BolgCard img={img} hading={hading} data={data} date={date} />
     })
 }

  </div>
  <h1 className='hading-about'>Get In Touch</h1>

  <div className='container-obj'>

      <div className='map-card'>
      <form>
      <input className='input-tex' type="text" placeholder="Enter Your name" />
    </form>
    <form>
      <input className='input-tex' type="text" placeholder="Enter Your Email" />
    </form>
    <form>
      <input className='input-tex' type="text" placeholder="Enter Your Mobil Number" />
    </form>
    <form>
      <input className='input-tex-msg' type="text" placeholder="Enter Your Message" />
    </form>

    <button className='message-btn' > SEND MESSAGE </button>
      </div>

      <div  className='map-card'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15054.689722682811!2d74.84874048598147!3d19.38333135176058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc9947273cd64f%3A0x8fa72555d843e2f3!2sShani%20Shingnapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716911652875!5m2!1sen!2sin" className='map-div' width="600" height="590"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     
    

  </div>
  <Footer/>
    </div>
  )
}

export default Home