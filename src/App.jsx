import { useState } from 'react'
import './App.css'
import Nav from './assets/Componenets/Nav.jsx'
import Home from './assets/Componenets/Home.jsx'
import Aboutus from './assets/Componenets/Aboutus.jsx'

import Footer from './assets/Componenets/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WhatsAppButton from './assets/Componenets/WhatsappButton.jsx'
import Product from './assets/Componenets/Product.jsx'
import CNGFitting from './assets/Componenets/CNGFitting.jsx'
import CNGSERVICE from './assets/Componenets/CNGSERVICE.jsx'
import MechanicalWorks from './assets/Componenets/MechenicalWorks.jsx'
import MECHANICAL from './assets/Componenets/MECHANICAL.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav />
      <Routes>
     <Route path="/" element={<Home />} />
<Route path="/Product" element={<Product />} />
<Route path="/Aboutus" element={<Aboutus />} />
<Route path="/CNGFitting" element={<CNGFitting />} />
<Route path="/CNGSERVICE" element={<CNGSERVICE />} />
<Route path="/MECHANICAL" element={<MECHANICAL/>} />
 </Routes>
 <WhatsAppButton/>
      <Footer/>
    </Router>
  )
}

export default App
