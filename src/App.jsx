import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Career from './components/Career'
import Contact from './components/Contact'
import Login from './components/Login'




const App = () => {

  

  return (
   
      <div className='overflow-hidden'  >

      <Router >
           <Navbar />
           <Hero />

        <Routes>
         
            <Route path='/' exact element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
          
        </Routes> 

          <Footer />
      </Router>
      </div>
  )
}

export default App
