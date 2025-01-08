import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>

        {
          loading ?

            <div className=' flex justify-center items-center my-5 text-lg'>
              <img src="https://cdn.dribbble.com/users/1122374/screenshots/4835344/media/94c3100a14992a242388b551d7b32f9d.gif" alt="" />
            </div>
            :
            <div className='grid grid-cols-4 gap-4'>
              {
                allProducts?.length > 0?
                allProducts?.map((product)=>(
                  <div key={product?.id} className='rounded border p-2 shadow'>
                  <img  width={'100%'} src={product?.thumbnail} alt='placeholder' className='w-full' />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <Link to={`/${product?.id}/view`} className='bg-violet-600 mt-3 text-white inline-block rounded-lg p-3'>View More...</Link>
                  </div>
                </div>
                ))
                
                :
                <div className='flex justify-center items-center my-5 text-lg text-red-500'>
                  No Products Found
                </div>
              }
            </div>
        }

      </div>
    </>
  )
}

export default Home