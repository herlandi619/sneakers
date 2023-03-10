import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className='w-full bg-black fixed z-10 '>
            <div className='flex p-5 justify-between w-4/4 bg-black text-white mx-auto md:w-3/4 '>
     
            <div>
                <a className='text-xl font-[gugi]' href="#">SNEAKER'S</a>
            </div>
            

           <div>

            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'> 
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">

                        <path className={!isOpen ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

                        <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />


                        </svg>
                    </div> 

                <div>
                    <ul className='lg:flex hidden  gap-4 md:gap-5 font-[Poppins]'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
           </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} flex justify-center text-center text-white mx-auto font-[Poppins] backdrop-blur-sm`}>
                    <ul>
                        <li className='p-3'><a href="#">About</a></li>
                        <li className='p-3'><a href="#">Blogs</a></li>
                        <li className='p-3'><a href="#">Services</a></li>
                        <li className='p-3'><a href="#"></a></li>
                           
                    </ul>
                </div>
    </div>
  )
}

export default Navbar
