import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop: '100px'}} className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
        <img src='https://via.placeholder.com/150' alt='placeholder' className='w-full object-cover'/>
        <div className='mx-4 px-4'>
          <h3 className='font-bold'>PID : id</h3>
          <h1 className='text-4xl font-bold mb-2'>Product Name <span className='text-xl text-green-500 float-right'>In Stock</span></h1>
          <h4 className='text-2xl font-semibold mt-2 mb-2 text-red-700'>$100 </h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <h3 className='text-md font-semibold mt-2 mb-2'>Description: <span className='font-light text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam minima natus aut porro facere aliquid, esse aperiam ea iste ratione quisquam deleniti nostrum velit ipsam sed pariatur cumque quae itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorem est dolore illum adipisci accusantium, minus temporibus nihil quas labore dicta aspernatur quis deserunt explicabo libero neque numquam sint. Aperiam!</span></h3>
          
          <div className='flex mt-4'>
            <button className='bg-green-500 text-white p-2 rounded-lg'>Add to Cart
            </button>
            <button className='bg-blue-500 text-white p-2 rounded-lg ms-2'>Add to Wishlist</button>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default View