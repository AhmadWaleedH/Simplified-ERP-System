
import './App.css'
import { Orders } from './Components/Orders'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <div className='bg-gray-900'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
      





    </>
  )
}

export default App
