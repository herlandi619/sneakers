import React from 'react'


//gambarw
import fb from '../img/fb.png'
import ig from '../img/ig.png'
import tw from '../img/tw.png'

const Footer = () => {
  return (
    <div className='bg-black p-20'>
        <div>
            <h1 className='text-white text-5xl font-bold'>SNEAKER'S</h1>
        </div>
    
    <div className='flex gap-3'>
            <img src={fb} alt="fb" width={30} />
            <img src={ig} alt="ig" width={30} />
            <img src={tw} alt="tw" width={30} />
      </div>

      <div className='md:flex'>
        <div className='text-white py-10 text-center md:w-1/2'>
            <h1 className='text-2xl'>Sub Menu 1</h1>
            <p className='text-md  py-3'>Isi Content 1</p> 
            <p className='text-md  py-3'>Isi Content 2</p> 
            <p className='text-md py-3 '>Isi Content 3</p> 
            
        </div>

        <div className='text-white py-10 text-center md:w-1/2'>
            <h1 className='text-2xl'>Sub Menu 2</h1>
            <p className='text-md  py-3'>Isi Content 1</p> 
            <p className='text-md  py-3'>Isi Content 2</p> 
            <p className='text-md py-3 '>Isi Content 3</p> 
            
        </div>
      </div>

      <div>
        <p className='text-white text-xs text-center py-3'>Copyright herlandi619 || Reactjs - Tailwindcss 2023</p>
      </div>
    </div>
  )
}

export default Footer
