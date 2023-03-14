import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen , setIsOpen] = useState(false)

  return (
<div>

    <div className='w-full bg-black bg-opacity-50 backdrop-blur flex fixed z-20 text-white p-5 justify-between'>
        
        <div>
            <Link to='/' className='text-xl font-[gugi]' >SNEAKER'S</Link>
        </div>
        

        <div>

        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden cursor-pointer'> 
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">

                    <path className={!isOpen ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

                    <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />

                    </svg>
                </div> 

            <div>
                <ul className='md:flex hidden gap-5 md:gap-5 font-[Poppins]'>
                <Link to='/about' className='text-xl font-[gugi]' >About</Link>
                <Link to='/career' className='text-xl font-[gugi]' >Career</Link>
                <Link to='/contact' className='text-xl font-[gugi]' >Contact</Link>
                   
                </ul>
            </div>
            
        </div>           
</div>

<div className={`${isOpen ? 'block' : 'hidden'} justify-center text-center text-white bg-black bg-opacity-50 backdrop-blur font-[Poppins] pt-20 fixed w-screen h-screen uppercase z-10 `}>
    <ul>
    <Link to='/about' className='text-xl font-[gugi] block my-5' >About</Link>
    <Link to='/career' className='text-xl font-[gugi] block my-5' >Career</Link>
    <Link to='/contact' className='text-xl font-[gugi]' >Contact</Link>

       
        <li className='p-3'><a href="#"></a></li>     
    </ul>
</div>

</div>
  )
}

export default Navbar
