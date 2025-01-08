import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, removeFromCart } from '../redux/slice/cartSlice'

const Cart = () => {

  const cart = useSelector(state => state.cartReducer) // for getting the cart from the store
  const dispatch = useDispatch()  // for dispatching the action to the store
  // console.log(cart);


  return (
    <>
      <Header />
      <div className='px-4 mx-auto' style={{ paddingTop: '100px' }}>
        <>
          <h1 className='text-5xl text-center mb-16 mt-16 font-bold text-blue-600'>Cart Summary</h1>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='col-span-2 border rounded p-5 shadow'>
              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <td className='font-semibold'>#</td>
                    <td className='font-semibold'>Name</td>
                    <td className='font-semibold'>Image</td>
                    <td className='font-semibold'>Quantity</td>
                    <td className='font-semibold'>Price</td>
                    <td className='font-semibold'>...</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.length > 0  ?
                      cart?.map((item,index) => (
                        <tr key={item?.id}>
                          <td>{index+1}.</td>
                          <td>{item?.title}</td>
                          <td><img src={item?.thumbnail} alt='placeholder' height={70} width={70} /></td>
                          <td>
                            <div className='flex'>
                              <button onClick={() => {dispatch(decreaseQuantity(item))}} className=' p-1 text-center rounded font-bold' style={{ minWidth: "15px" }}>-</button>
                              <input type='text' style={{ width: '40px' }} className='p-1 border rounded mx-2 text-center' readOnly min={1} value={item?.quantity} />
                              <button onClick={() => {dispatch(addToCart(item))}} className=' p-1 text-center rounded font-bold' style={{ minWidth: "15px" }}>+</button>
                            </div>
                          </td>
                          <td>$ {item?.totalPrice}</td>
                          <td><button onClick={()=> {dispatch(removeFromCart(item))}}><i className='fa-solid fa-trash text-red-500'></i></button></td>
                        </tr>
                      ))
                      :
                      <tr className='text-center mt-3'>
                        <td colSpan={6} className='text-2xl font-bold text-red-600 mt-2'>No items in cart</td>
                      </tr>
                  }
                </tbody>
              </table>
              <div className='float-right mt-5'>
                <button className='bg-red-500 rounded p-2 text-white me-2'>Empty Cart</button>
                <Link to={'/'} className='bg-blue-500 rounded p-2 text-white'>Shop More</Link>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='border rounded shadow p-5'>
                <h2 className='text-2xl font-bold my-4 '>Total Amount : <span className='text-red-600 float-right'>$ 20</span></h2>
                <hr />
                <button className='bg-green-600 rounded p-2 text-white text-xl w-full mt-4 '>Checkout</button>

              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Cart