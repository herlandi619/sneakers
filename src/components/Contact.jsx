import React from 'react'
import { RiWhatsappFill, RiInstagramFill, RiGithubFill} from 'react-icons/ri';
import { FcCustomerSupport, FcHome, FcIphone, FcSms } from "react-icons/fc";
import Typed from 'react-typed';

import c1 from '../img/c1.png'
import c2 from '../img/c2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    AOS.init({
        duration: 1000
      });

  return (
<div className='grid gap-10 lg:gap-20 lg:p-20 '>

    <div className='text-2xl w-full text-center  bg-gradient-to-r from-cyan-500 to-blue-200 text-white font-[gugi] md:text-xl lg:text-2xl'>
    <Typed
            strings={["100% UANG KEMBALI"]}
            typeSpeed={400}
            loop
            className="text-xl md:text-6xl lg:text-7xl font-bold font-[gugi] py-1"
        />
    </div>

    <div className='p-10 grid gap-20'>
        


        <div className='w-full grid gap-2 grid-cols-2 '>
           <div data-aos="fade-right" className=' w-full'>
            <h1 className='text-2xl font-semibold w-full md:text-3xl lg:text-4xl '>HUBUNGI KAMI</h1>
                <h3 className='text-sm font-[Poppins]'>Apakah anda membutuhkan bantuan?
                ﻿Jika ya anda di tempat yang tepat!
                Kami membuat bagian ini untuk membantu anda dengan semua bantuan yang anda butuhkan.</h3>
           </div>
           <div data-aos="fade-left" className='  mx-auto my-auto'>
            <p className='text-9xl  '><FcCustomerSupport className='hover:scale-110 duration-300' /></p>
           </div>
        </div>

        <div className='grid gap-20 '>

            <div  className='grid gap-2 grid-cols-2'>
                <div data-aos="fade-left">
                    <p className='font-semibold md:text-2xl lg:text-3xl'>ALAMAT</p>
                    <p className='text-sm font-[Poppins]'>PT Sepatu Online.Jl. RA. Kartini Kav. 28, Cilandak Barat, RT.8/RW.8, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>
                </div>

                <div data-aos="fade-right"  className='mx-auto my-auto col-start-1 row-start-1'>
                    <p className='text-9xl mx-auto'><FcHome className='hover:scale-110 duration-300' /></p>
                </div>
                
            </div>

            <div className='grid gap-2 grid-cols-2 '>
                <div data-aos="fade-right" className='col-start-1 row-start-1'>
                    <p className='font-semibold md:text-2xl lg:text-3xl'>TELEPON</p>
                    <p className='text-sm font-[Poppins]'>+622150864211 Call or Whatsapp Monday to Friday 09:00 ~ 17:00</p>
                </div>

               <div  data-aos="fade-left" className='mx-auto my-auto'>
                    <p className='text-9xl mx-auto'><FcIphone className='hover:scale-110 duration-300' /></p>
               </div>
            </div>


            <div className='grid gap-2 grid-cols-2'>
                <div data-aos="fade-left">
                    <p className='font-semibold md:text-2xl lg:text-3xl'>EMAIL</p>
                    <p className='text-sm font-[Poppins]'>Layanan Pelanggan id.customerservice@bata.com Ecommerce fa2a.id@bata.com</p>
                </div> 

                <div data-aos="fade-right" className='mx-auto my-auto
                 col-start-1 row-start-1'>
                    <p className='text-9xl mx-auto '><FcSms className='hover:scale-110 duration-300' /></p>
                </div>
            </div>
            
        </div>

        <div className='grid grid-cols-3 h-14 '>
            <h3 data-aos="fade-right" className='text-5xl mx-auto lg:text-7xl '> <RiWhatsappFill className='hover:scale-105 hover:text-blue-300 duration-300 ease-in ' /> </h3>
            <h3 data-aos="fade-bottom" className='text-5xl mx-auto lg:text-7xl '> <RiInstagramFill className='hover:scale-105 hover:text-blue-300 duration-300 ease-in ' /> </h3>
            <h3 data-aos="fade-left" className='text-5xl mx-auto lg:text-7xl'> <RiGithubFill className='hover:scale-105 hover:text-blue-300 duration-300 ease-in ' /> </h3>

        </div>
    </div>

    <div className='text-2xl w-full h-auto text-center  bg-gradient-to-r from-cyan-500 to-blue-200 text-white font-[gugi]'>
    <Typed
            strings={["JANGAN SAMPAI KEHABISAN!!"]}
            typeSpeed={400}
            loop
            className="text-xl md:text-6xl lg:text-7xl font-bold font-[gugi] py-1"
        />
    </div>
</div>
  )
}

export default Contact
