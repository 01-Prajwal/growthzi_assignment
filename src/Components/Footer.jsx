import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
 
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
   
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
       
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
     
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
     
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item">Home</li>
      <li class="menu__item">About</li>
      <li class="menu__item">Services</li>

      <li class="menu__item">Contact</li>

    </ul>
    <p>&copy;2024 Bistro Bites | Rights Reserved</p>
  </footer>
  )
}

export default Footer