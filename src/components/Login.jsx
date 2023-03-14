import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import login from '../img/login2.gif'

const Login = () => {

  AOS.init({
    duration: 1000
  });

  return (
    <div className='p-10 grid gap-10 lg:w-2/3 mx-auto xl:w-2/3 xl:w-2/3'>
      <div data-aos="fade-left">
        <h1  className='text-2xl font-semibold text-center '>DAFTAR PEMESANAN</h1>
        <hr />
      </div>


      <div data-aos="fade-right" className='grid gap-5  pb-20 w-full md:grid-cols-2'>
        <div><img src={login} alt="img" className='' />
      </div>

      <div className='w-2/3 mx-auto md:w-full '>
            <div data-aos="fade-left" className='bg-gradient-to-r from-cyan-500 to-blue-200 rounded-lg shadow-lg p-10 grid gap-5 h-full '>
              <div className='grid grid-cols-1 gap-2'>
                <h3 className='text-white text-center font-semibold py-2'>SNEAKER Corps</h3>
                <label className='text-white' htmlFor="">Nama :</label>
                <input type="text" className='rounded-sm focus:outline-none focus:ring focus:border-blue-500 '/>
              </div>

               <div className='grid grid-cols-1 gap-2'>
                <label className='text-white' htmlFor="">Email :</label>
                <input type="text" className='rounded-sm focus:outline-none focus:ring focus:border-blue-500  '/>
               </div>

               <div className='grid grid-cols-1 gap-2'>
                <label className='text-white' htmlFor="">No Telepon :</label>
                <input type="text" className='rounded-sm focus:outline-none focus:ring focus:border-blue-500 '/>
               </div>
                
               <button className="text-white bg-blue-300 backdrop-blur-lg rounded-lg shadow-lg hover:scale-105 duration-300 p-1 hover:ring hover:ring-blue-300 ">Submit</button>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Login
