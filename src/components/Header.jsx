import React from 'react'
import { Link } from 'react-router-dom'



const Header = ({ insideHome }) => {
  return (
    <nav className='flex bg-violet-600 p-3 fixed w-full text-white'>
      <Link className='text-2xl font-bold' to={'/'}><i class="fa-solid fa-truck-fast me-2"></i>E-Cart</Link>
      <ul className='flex-1 text-right'>
        
       {  
       insideHome && 
        <li className='list-none inline-block px-5'>
          <input className='rounded p-2' style={{width:"300px"}} type="text" placeholder='Search products here...' />
        </li >
      }

        <li className='list-none inline-block px-5'>
          <i className='fa-solid fa-heart text-red-600 me-1'></i>
          <Link to={'/wishlist'}>Wishlist</Link>
          <span className='bg-black text-white rounded p-1 ms-1'>0</span>
        </li>
        
        <li className='list-none inline-block px-5'>
          <i className='fa-solid fa-heart text-green-600 me-1'></i>
          <Link to={'/cart'}>Cart</Link>
          <span className='bg-black text-white rounded p-1 ms-1'>0</span>
        </li>

      </ul>

    </nav>
  )
}

export default Header