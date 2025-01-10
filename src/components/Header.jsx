import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slice/productSlice'



const Header = ({ insideHome }) => {

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer) // for getting the wishlist from the store
  const cart = useSelector(state => state.cartReducer) // for getting the cart from the store

  return (
    <nav className='flex bg-violet-600 p-3 fixed w-full text-white'>
      <Link className='text-3xl font-bold p-1 ps-4' to={'/'}><i class="fa-solid fa-truck-fast me-2"></i>E-Cart</Link>
      <ul className='flex-1 text-right'>

        {
          insideHome &&
          <li className='list-none inline-block px-5'>
            <input 
            onChange={(e) => { dispatch(searchProduct(e.target.value.toLowerCase())) }} 
            className='rounded p-2 text-black' 
            style={{ width: "300px" }} 
            type="text" 
            placeholder='Search products here...' 
            />
          </li >
        }

        <li className='list-none inline-block px-5'>
          <i className='fa-solid fa-heart text-red-600 me-1'></i>
          <Link to={'/wishlist'}>Wishlist</Link>
          <span className='bg-black text-white rounded p-1 ms-1'>{userWishlist?.length}</span>
        </li>

        <li className='list-none inline-block px-5'>
          <i className='fa-solid fa-heart text-green-600 me-1'></i>
          <Link to={'/cart'}>Cart</Link>
          <span className='bg-black text-white rounded p-1 ms-1'>{cart?.length}</span>
        </li>

      </ul>

    </nav>
  )
}

export default Header