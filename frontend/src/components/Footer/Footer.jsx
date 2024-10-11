import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'>
            <div className=' footer-content-left'>
               <img  src={assets.logo} alt='' />
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum turpis nec purus laoreet, ac facilisis tortor dictum. Integer egestas bibendum risus, non aliquet elit fermentum eget. Cras quis condimentum lacus, eu egestas ligula. Aenean quis ligula fringilla, dictum est nec, viverra lorem. Suspendisse potenti. Ut pharetra purus a felis volutpat, non tristique dui vehicula.
</p>
                <div className='footer-social-icons'>
                     <img src={assets.facebook_icon} alt='' />
                     <img src={assets.twitter_icon} alt='' />
                     <img src={assets.linkedin_icon} alt='' />

                </div>
            </div>
            <div className=' footer-content-center'>
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy </li>
                    <li></li>
                 </ul>
            </div>
            <div className=' footer-content-right'>
                 <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+91 766-709-0989</li>
                    <li>Contact@tomato.con</li>
                  </ul>
            </div>
       </div>
       <hr/>
       <p className=' footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer