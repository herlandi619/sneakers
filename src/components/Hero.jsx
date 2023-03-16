import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../img/bg2.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';


import Typed from 'react-typed';

const Hero = () => {

  AOS.init({
    duration: 1000
  });


  return (
    
    <div className='relative h-screen w-screen mx-auto '>
      <img src={bg} alt="dummy" className='object-cover top-5 w-full h-full absolute -z-10' />
        <div data-aos="fade-right" className='w-2/3 text-center mx-auto text-white py-16 md:py-28 lg:py-32 xl:py-48'>
       <div className='mt-40 md:mt-28 lg:mt-20 xl:mt-0'>
         
            <p className='text-xl md:text-2xl font-[Poppins] py-1'>Kuat Elastis Anti Sobek</p>
            {/* <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-[gugi] py-1'>SNEAKER'S</h1> */}
            <Typed
                    strings={["SNEAKER'S","SHOES"]}
                    typeSpeed={400}
                    loop
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-[gugi] py-1"
                />
            <p className='text-xl md:text-2xl lg:text-3xl font-[Poppins] pb-3 lg:pb-5 md:pb-4'>Gaya Baru Tampil Baru Dan Beda</p>
            <Link to='/login' className='px-3 bg-black bg-opacity-50 text-white rounded-lg font-[Poppins] py-1 md:px-4 md:py-2 md:text-2xl lg:text-3xl hover:scale-105 duration-500 ease-in-out '>PESAN SEKARANG</Link>
        </div>
       </div>
    </div>
  )
}

export default Hero
