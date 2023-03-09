import React from 'react'
import bg from '../img/bg.png'

const Hero = () => {
  return (
    
    <div className='relative'>
        <img src={bg} alt="dummy" className='w-full bg-cover absolute -z-10' />
        <div className='w-2/3 text-center mx-auto text-white py-16 md:py-28 lg:py-32'>
            <p className='text-xl md:text-2xl font-[Poppins] py-1'>Kuat Elastis Anti Sobek</p>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-[gugi] py-1'>SNEAKER'S</h1>
            <p className='text-xl md:text-2xl lg:text-3xl font-[Poppins] py-1'>Gaya Baru Tampil Baru Dan Beda</p>
            <button className='px-3 bg-black text-white rounded-lg font-[Poppins] py-1 md:px-4 md:py-2 md:text-2xl lg:text-3xl hover:scale-105 duration-500 ease-out'>PESAN SEKARANG</button>
        </div>
    </div>
  )
}

export default Hero
