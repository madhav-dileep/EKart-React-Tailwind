import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop: '100px'}} className='px-4 mx-auto'>
      <h1 className='text-center text-4xl font-bold text-red-500'>My Wishlist</h1>
      <>
         <div className='grid grid-cols-4 gap-4'>
                <div className='rounded border p-2 shadow'>
                  <img src='https://via.placeholder.com/150' alt='placeholder' className='w-full'/>
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>Product Name</h3>
                    <div className='flex justify-evenly mt-3'>
                      <button className='text-xl '><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                      <button className='text-xl '><i class="fa-solid fa-cart-plus text-green-500"></i></button>
                    </div>
                  </div>
                </div>
              </div>
      </>
    </div>
    </>
  )
}

export default Wishlist