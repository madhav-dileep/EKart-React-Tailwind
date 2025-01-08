import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


const Wishlist = () => {

  const userWishlist = useSelector(state => state.wishlistReducer) // for getting the wishlist from the store
  const cart = useSelector(state => state.cartReducer) // for getting the cart from the store
  const dispatch = useDispatch()

  const addingToCart = (product) => {
    // console.log(product);
      dispatch(addToCart(product))
      if(userWishlist.find(item => item.id == product.id)){
        dispatch(removeFromWishlist(product))
      }
    }

  return (
    <>
    <Header/>
    <div style={{paddingTop: '100px'}} className='px-4 mx-auto'>
      <h1 className='text-center text-4xl font-bold text-red-500 mb-5'>My Wishlist</h1>
      <>
         <div className='grid grid-cols-4 gap-4'>
          {
            userWishlist?.length > 0 ? 
              userWishlist?.map(item => (
                
                  <div key={item?.id} className='rounded border p-2 shadow'>
                    <Link to={`/${item?.id}/view`}>
                      <img src={item?.thumbnail} alt='placeholder' className='w-full'/>
                      <h3 className='text-xl text-center font-bold'>{item?.title}</h3>
                    </Link>
                    <div className='text-center'>
                      <div className='flex justify-evenly mt-3'>
                        <button onClick={()=>{dispatch(removeFromWishlist(item))}} className='text-xl '><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                        <button onClick={()=>addingToCart(item)} className='text-xl '><i class="fa-solid fa-cart-plus text-green-500"></i></button>
                      </div>
                    </div>
                  </div>
                
              ))
              :
              <div className='col-span-4 mt-5 pt-5 flex flex-col justify-center items-center'>
                <h1 className='text-center text-2xl font-bold'>No items in wishlist</h1>
                <Link to={'/'} className='text-center block text-blue-500'>Go to Home</Link>
                <img className='' width={'40%'} src="https://media3.giphy.com/media/0HhDnlH89djZtRqYoO/giphy.gif" alt="" />
              </div>
          }
        </div>
      </>
    </div>
    </>
  )
}

export default Wishlist