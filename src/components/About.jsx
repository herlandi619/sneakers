import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

//gambar
import gambar1 from '../img/gambar1.jpg'
import gambar2 from '../img/gambar2.jpg'
import gambar3 from '../img/gambar3.jpg'
import gambar4 from '../img/gambar4.JPG'
import gambar5 from '../img/gambar5.jpg'
import gambar6 from '../img/gambar6.jpg'
import kantor1 from '../img/kantor1.jpg'
import kantor2 from '../img/kantor2.jpeg'

const About = () => {

    AOS.init({
        duration: 1000
      });

  return (

    <div className='p-10 '>
      <div className='grid gap-10 md:grid-cols-2 md:gap-10 mt-10'>
        
            <div data-aos="fade-left" className=''>
                <h1 className='text-2xl font-semibold my-3 lg:text-3xl'>FIRST SOUTHEAST ASIAN SHOES NEW RETAIL UNICORN</h1>
                <p className='font-[Poppins] text-sm lg:text-base'>Sneaker's is one of the fastest growing grab-and-go Shoes chain in Indonesia. The idea of Sneaker's started because the founders have the mission to spread their passion for Indonesian Shoes as a local brand from Indonesia to the rest of the world.</p>
                
            </div>
            <div className='hover:scale-110 cursor-pointer duration-300 shadow-lg'>
                <img data-aos="fade-right" src={gambar1} alt="gambar 1" />
            </div>
      </div>

      <div>
        <p data-aos="fade-left" className='text-xl my-32 font-bold text-center lg:text-2xl'>We started operation in 2017, and todate:</p>
      </div>

      <div className='md:grid md:grid-cols-2 md:gap-5 '>
            <div className='md:grid md:grid-cols-2 md:gap-1 '>
                <div data-aos="fade-right" className='my-10 text-center self-center lg:text-xl  '>
                    <h3 className='font-bold x '>
                    Our Team
                    </h3>
                    <p className='text-sm font-[Poppins] '>International experience
                    and exposure</p>
                </div>

                <div data-aos="fade-left" className='my-10'>
                    <img src={gambar2} alt="gambar2"  className='hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg' />
                </div>
                
                <div data-aos="fade-right" className='my-10'>
                    <img src={gambar3} alt="gambar3" className='hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg' />
                </div>

                <div data-aos="fade-left" className='my-10 text-center self-end lg:text-xl'>
                    <h3 className='font-bold'>Shoes Sold</h3>
                    <p className='text-sm font-[Poppins]'>30 million shoes in year 2020</p>
                </div>

            </div>

            <div data-aos="fade-right" className='my-10'>
                <img src={gambar4} alt="gambaar4" className='w-full hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg '  />
            </div>

            <div data-aos="fade-left" className='my-10 text-center'>
                <img src={gambar5} alt="awed" className='my-5 w-full hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg ' />
                <p className='font-bold lg:text-xl'>Employes</p>
                <p className='text-sm font-[Poppins] '>More Than 5000</p>
            </div>

            <div data-aos="fade-right" className='my-10 text-center'>
                <img src={gambar6} alt="gambar6" className='my-5 w-full hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg ' />
                <p className='font-bold lg:text-xl'>Our Footprints</p>
                <p className='text-sm font-[Poppins] '>More than 800 stores across 45 cities in Indonesia</p>
            </div>
      </div>

      <div data-aos="fade-left" className='my-32'>
        <p className='text-3xl font-semibold text-center uppercase lg:text-4xl'>Our Leadership</p>
      </div>

      <div data-aos="fade-right" className='grid gap-5 md:grid-cols-6 md:gap-2 md:text-center lg:text-xl '>
        <div className='text-center'>
            <p className='text-base '>EDWARD TIRTANATA</p>
            <p className='text-sm font-thin'>Co-Founder and</p>
            <p className='font-thin'>Chief Executive Officer</p>
        </div>
        <div className='text-center'>
            <p className='text-base '>JAMES
PRANANTO</p>
            <p className='text-sm font-thin'>Co-Founder and</p>
            <p className='font-thin'>Chief Business Development Officer</p>
        </div>
        <div className='text-center'>
            <p className='text-base '>CYNTHIA
CHAERUNISSA</p>
            <p className='text-sm font-thin'>Co-Founder and</p>
            <p className='font-thin'>Chief Marketing Officer</p>
        </div>
        <div className='text-center'>
            <p className='text-base '>GOH CHIN HOU</p>
            <p className='text-sm font-thin'>Chief</p>
            <p className='font-thin'>Operating Officer</p>
        </div>
        <div className='text-center'>
            <p className='text-base '>ZENG
FENGPING</p>
            <p className='text-sm font-thin'>Chief</p>
            <p className='font-thin'>Technology Officer</p>
        </div>
        <div className='text-center'>
            <p className='text-base '>RAHMAT
BUDIARDJO</p>
            
            <p className='font-thin'>Group Chief Financial Officer</p>
        </div>
      </div>

        <div data-aos="fade-left" className='my-32'>
            <p className='text-3xl font-semibold text-center uppercase lg:text-4xl'>Sneaker's Offices</p>
        </div>

        <div className='grid gap-5 md:grid-cols-2 md:gap-10 md:mb-32 '>
            <div data-aos="fade-right" className=''>
                <img src={kantor1} className="w-full hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg" alt="kantor1"  />
                <h3 className='font-semibold my-1 lg:text-xl'>HEADQUARTERS (INDONESIA)</h3>
                <p className='text-lg'>Menara Sentraya, Lantai 15, Jl. Iskandarsyah Raya No.1A, RT.3/RW.1, Kel. Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta – 12160</p>
            </div>

            <div data-aos="fade-left" className=''>
                <img src={kantor2} className="w-full hover:scale-105 cursor-pointer duration-300 ease-out shadow-lg" alt="kantor1" />
                <h3 className='font-semibold my-1 lg:text-xl uppercase'>Sneaker's ACADEMY</h3>
                <p className='text-lg'>Jl. Pakubuwono VI No.105, RW.2, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan,  Daerah Khusus Ibukota Jakarta 12120</p>
            </div>
        </div>

    </div>
    
  )
}

export default About
