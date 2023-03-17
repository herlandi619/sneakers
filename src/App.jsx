import React, { useState , useEffect } from 'react'
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

  const [theme, setTheme] = useState('false');

    useEffect(() => {
      if(window.matchMedia(`(prefers-color-scheme: dark)`).matches){
        setTheme('dark');
      }
      else
      {
        setTheme('light');
      }
    }, [])

    useEffect( () => {
        if(theme === "dark") {
            document.documentElement.classList("dark");
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


  return (
   
      <div className='overflow-hidden' >
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
     
    
      // <div className='overflow-hidden' >
      //  
      //   <Hero />
      //   <About />
      //   {/* <Main /> */}
      //  
      // </div>
 
  )
}

export default App
