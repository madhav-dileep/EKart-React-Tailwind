import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:pid/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
