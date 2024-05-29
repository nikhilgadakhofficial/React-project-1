import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Linkedin from './linkedin.png'
import Twitter from './tw.png'
import Gadgets from './logo.webp'

function Footer() {
  return (
    <div className=' m'>
    <div className='container '>
        <div class="row d-flex justify-content-around text-light py-3 pb-0">
          <div class="col-md-4 col-sm-12 mt-4 text-center">
            <img src={Gadgets} class="w-25 mb-4" />
            <h2 class="fw-bold c">Good Luck Restaurant</h2>
            <p class="fw-light c m-0">Now there’s two ways to plan your trip—use AI or search on your own. Either way, you’ve got more than 8 million spots to discover, with over one billion traveller reviews and opinions to guide you.</p>
          </div>
          <div class="col-md-2 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0 c">Quick Links</p>
            <ul>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item c m-2">About us</li></Link>
              <Link  class="text-decoration-none text-light"><li class="list-group-item m-2 c">Contact us</li></Link>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Review</li></Link>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Bolg Now</li></Link>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Login</li></Link>
            </ul>
          </div>
          <div class="col-md-2 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0 c">Services</p>
            <ul>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Home Delivery</li></Link>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Quality Food</li></Link>
              <Link to="" class="text-decoration-none text-light"><li class="list-group-item m-2 c">Online Order</li></Link>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 mt-4 text-center text-md-start">
            <p class="fs-5 m-0 c">Contact</p>
            <ul>
              <li class="list-group-item my-2 c">📌3084, National Highway 6 Duttawadi, Wadi, A Ahmednagar, Maharashtra 440028</li>
              <li class="list-group-item my-2">📱<a href="mob:8010564343" class="text-decoration-none c">+91 909090909</a></li>
              <li class="list-group-item my-2">✉️<a href="mailto:nikhilgadakh543@gmail.com" class="text-decoration-none c"> goodluckrestaurant@gmail.com</a></li>
              <li class="list-group-item my-3">
                <a href="#"><img src={Linkedin} alt="" className="icon-h" /></a>
                <a href="#"><img src={Twitter} alt="" className="icon-h" /></a>
                <a href="#"><img src={Facebook} alt="" className="icon-h" /></a>
                <a href="#"><img src={Instagram} alt="" className="icon-h" /></a>
              </li>
            </ul>
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default Footer