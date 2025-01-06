import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height: '250px', marginTop:'100px'}} className='bg-violet-600 w-full text-white p-4'>
      <div className='flex justify-between gap-4 p-4'>
        
        <div style={{width: '400px'}} className='intro'>
          <h5 className='text-2xl font-bold'><i className='fa-solid fa-truck-fast me-2 mb-3'></i>E-Cart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.1.0</p>
        </div>

        <div style={{width: '400px'}} className='footer-Pages'>
          <h5 className='text-2xl font-bold mb-1'>Pages</h5>
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/wishlist'}><li>Wishlist</li></Link>
            <Link to={'/cart'}><li>Cart</li></Link>
            <Link to={'/:id/view'}><li>View</li></Link>
          </ul>  
        </div>

        <div style={{width: '400px'}} className='footer-Links'>
          <h5 className='text-2xl font-bold mb-1'>Links</h5>
          <ul>
            <li><a href='https://react.dev/' target='_blank'>React</a></li>
            <li><a href='https://www.npmjs.com/package/react-router-dom' target='_blank'>React-Router-Dom</a></li>
            <li><a href='https://tailwindcss.com/' target='_blank'>Tailwind</a></li>
          </ul>
        </div>

        <div style={{width: '400px'}} className='footer-Contact'>
          <h5 className='text-2xl font-bold mb-1'>Contact Us</h5>
          <div className='flex'>
            <input type="email" className='rounded p-1 text-black' />
            <button className='rounded p-2 px-3 bg-blue-500 ms-1 font-bold text-xl'>&#10140;</button>
          </div>
          <div className='flex gap-7 mt-3'>
          <a href="https://facebook.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://youtube.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://github.com" style={{color:"white"}} target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="" style={{color:"white"}}><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>
      <p className='text-center mt-4 mb-4'>© 2024 E-Cart, Built with React Bootstrap by Madhav.</p>
    
    </div>
  )
}

export default Footer