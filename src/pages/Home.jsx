import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slice/productSlice'
import { useDispatch } from 'react-redux'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop: '100px'}} className='container px-4 mx-auto'>
      
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img src='https://via.placeholder.com/150' alt='placeholder' className='w-full'/>
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Product Name</h3>
            <Link to={'/:id/view'} className='bg-violet-600 p-1 mt-3 text-white inline-block rounded-lg'>View More...</Link>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home