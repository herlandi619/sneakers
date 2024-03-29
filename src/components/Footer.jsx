import React from 'react'
import {Link} from 'react-router-dom'


//gambarw
import fb from '../img/fb.png'
import ig from '../img/ig.png'
import tw from '../img/tw.png'

const Footer = () => {
  return (
    <div className='bg-black p-20 w-screen overflow-auto grid gap-5 '>
        <div>
            <h1 className='text-white text-5xl font-bold'>SNEAKER'S</h1>
        </div>
    
    <div className='flex gap-3'>
            <img src={fb} alt="fb" width={30} />
            <img src={ig} alt="ig" width={30} />
            <img src={tw} alt="tw" width={30} />
      </div>

      <div className='md:flex text-center'>
        <div className='text-white py-10  md:w-1/2 hidden md:block'>
            <h1 className='text-2xl font-semibold mb-1'>Menu</h1>
            <Link to='/about' className='text-slate-300 py-1 block' >About</Link>
            <Link to='/career' className='text-slate-300 py-1 block' >Career</Link>
            <Link to='/contact' className='text-slate-300 py-1 block' >Contact</Link>
            
        </div>

        <div className='text-white py-10  md:w-1/2 hidden md:block'>
            <h1 className='text-2xl font-semibold mb-1'>Community</h1>
            <p className='text-md text-slate-300  py-1'>Github</p> 
            <p className='text-md text-slate-300  py-1'>Discord</p> 
            <p className='text-md text-slate-300 py-1 '>Youtube</p> 
            
        </div>

        <div className='text-white py-10  md:w-1/2 hidden md:block'>
            <h1 className='text-2xl font-semibold mb-1'>Getting Started</h1>
            <p className='text-md text-slate-300  py-1'>Upgrade Guide</p> 
            <p className='text-md text-slate-300  py-1'>Editor Setup</p> 
            <p className='text-md text-slate-300 py-1 '>Browser Support</p> 
            
        </div>
        
        
      </div>

      
      <div>
        <p className='text-white text-xs text-center py-3'>Copyright herlandi619 || Reactjs - Tailwindcss 2023</p>
      </div>
    </div>
  )
}

export default Footer
