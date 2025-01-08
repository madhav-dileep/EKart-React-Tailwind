import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

const View = () => {

  const dispatch = useDispatch()

  const userWishlist = useSelector(state => state.wishlistReducer) // for getting the wishlist from the store
  const cart = useSelector(state => state.cartReducer) // for getting the cart from the store

  const [product, setProduct] = useState({})// for storing the specific product
  const { pid } = useParams() // for getting the id from the url
  // console.log(pid);

  // const { allProducts } = useSelector(state => state.productReducer) // for getting the allProducts from the store
  // console.log(allProducts);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))// for getting the allProducts from the session storage to avoid the loss of data on page refresh
      // console.log(allProducts?.find(item=>item.id==pid));
      setProduct(allProducts?.find(item => item.id == pid))
    }

  }, [])

  const addingToCart = () => {
    dispatch(addToCart(product))
    if (userWishlist.find(item => item.id == product.id)) {
      dispatch(removeFromWishlist(product))
    }
  }

  // console.log(product);


  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <div>
            <img src={product?.thumbnail} alt='placeholder' className='w-full object-cover' />
            <div className='flex justify-between mt-4 '>
              <button onClick={addingToCart} className='bg-green-500 text-white p-2 rounded-lg'>Add to Cart
              </button>
              <button onClick={() => { dispatch(addToWishlist(product)) }} className='bg-blue-500 text-white p-2 rounded-lg ms-2'>Add to Wishlist</button>
            </div>
          </div>

          <div className='mx-4 px-4'>
            <h3 className='font-bold'>PID : {pid}</h3>
            <h1 className='text-4xl font-bold mb-2'>
              {product?.title}
              <span className='text-xl text-green-500 float-right'>
                {product?.availabilityStatus}
              </span>
            </h1>
            <h4 className='text-2xl font-semibold mt-2 mb-2 text-red-700'>${product?.price} </h4>
            <h4 className='font-bold'>Brand : <span className='font-normal'>{product?.brand}</span></h4>
            <h4 className='capitalize font-bold'>Category : <span className='font-normal'>{product?.category}</span></h4>
            <h3 className='text-md font-semibold mt-2 mb-2'>Description: <span className='font-light text-justify'>{product?.description}</span></h3>


            <div className='reviews mt-5'>
              <h3 className='text-2xl font-bold mt-4'>Client Reviews</h3>
              {
                product?.reviews?.length > 0 ?
                  product?.reviews?.map(review => (
                    <div key={review?.id} className='border p-2 my-2 ms-2'>
                      <h4 className='font-semibold'>{review?.reviewerName} </h4>
                      <span className='text-xs '>
                        {review?.rating}
                        <i className='fas fa-star text-yellow-500 ms-2'></i>
                      </span>
                      <p className='text-sm'>{review?.comment}</p>
                    </div>
                  ))
                  :
                  <p>No Reviews yet!</p>
              }

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default View