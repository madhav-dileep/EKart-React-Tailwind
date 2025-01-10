import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, emptyCart, removeFromCart } from '../redux/slice/cartSlice'

const Cart = () => {

  const navigate = useNavigate() // used to redirect to certain page using HOOK
  const [checkOutPrice, setCheckOutPrice] = useState(0)
  const cart = useSelector(state => state.cartReducer) // for getting the cart from the store
  const dispatch = useDispatch()  // for dispatching the action to the store
  // console.log(cart);

  useEffect(() => {
    if (cart?.length > 0) {
      setCheckOutPrice(Math.floor(cart.map(item => item.totalPrice).reduce((a, b) => a + b) * 100) / 100)
      // console.log();
    } else {
      setCheckOutPrice(0)
    }
  }, [cart])

  const handleDecrementQuantity = (product) => {
    if(product?.quantity>1){
      dispatch(decreaseQuantity(product))
    }
    else{
      dispatch(removeFromCart(product))
    }
  }

  const checkOut = () => {
    dispatch(emptyCart())
    alert("Order Confirmed..\n\tThank You for purchasing!")
    navigate('/')
  }


  return (
    <>
      <Header />
      <div className='px-4 mx-auto' style={{ paddingTop: '100px' }}>
        {cart?.length > 0 ?
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
                      cart?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{index + 1}.</td>
                          <td>{item?.title}</td>
                          <td><img src={item?.thumbnail} alt='placeholder' height={70} width={70} /></td>
                          <td>
                            <div className='flex'>
                              <button onClick={() => { handleDecrementQuantity(item) }} className=' p-1 text-center rounded font-bold' style={{ minWidth: "15px" }}>-</button>
                              <input type='text' style={{ width: '40px' }} className='p-1 border rounded mx-2 text-center' readOnly min={1} value={item?.quantity} />
                              <button onClick={() => { dispatch(addToCart(item)) }} className=' p-1 text-center rounded font-bold' style={{ minWidth: "15px" }}>+</button>
                            </div>
                          </td>
                          <td>$ {item?.totalPrice}</td>
                          <td><button onClick={() => { dispatch(removeFromCart(item)) }}><i className='fa-solid fa-trash text-red-500'></i></button></td>
                        </tr>
                      ))
                    }


                  </tbody>
                </table>
                <div className='float-right mt-5'>
                  <button onClick={()=>dispatch(emptyCart())} className='bg-red-500 rounded p-2 text-white me-2'>Empty Cart</button>
                  <Link to={'/'} className='bg-blue-500 rounded p-2 text-white'>Shop More</Link>
                </div>
              </div>

              <div className='col-span-1'>
                <div className='border rounded shadow p-5'>
                  <h2 className='text-2xl font-bold my-4 '>Total Amount : <span className='text-red-600 float-right'>$ {checkOutPrice} </span></h2>
                  <hr />
                  <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white text-xl w-full mt-4 '>Checkout</button>

                </div>
              </div>
            </div>
          </>
          :
          // <tr className='text-center mt-3'>
          //   <td colSpan={6} className='text-2xl font-bold text-red-600 mt-2'>No items in cart</td>
          // </tr>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>Cart is Empty!</h1>
            <img className='' src="https://www.meratiff.in/assets/images/emptycart.gif" alt="" />
          </div>
        }
      </div>
    </>
  )
}

export default Cart