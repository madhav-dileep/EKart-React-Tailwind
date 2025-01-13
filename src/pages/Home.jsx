import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productPerPage)
  const currentPageProductLastIndex = currentPage * productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)

  const navigateToNextPage = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const navigateToPrevPage = () => {
    if ( currentPage > 1 ) {
      setCurrentPage(currentPage - 1)
    }
  }

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
            <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  visibleAllProducts?.length > 0 ?
                    visibleAllProducts?.map((product) => (
                      <div key={product?.id} className='rounded border p-2 shadow'>
                        <img width={'100%'} src={product?.thumbnail} alt='placeholder' className='w-full' />
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

              <div className='text-2xl text-center font-bold mt-20'>
                <span onClick={navigateToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
              </div>

            </>
        }

      </div>
    </>
  )
}

export default Home