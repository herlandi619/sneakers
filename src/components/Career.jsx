import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import carrer1 from '../img/carrer1.jpg'
import carrer2 from '../img/carrer2.jpg'
import carrer3 from '../img/carrer3.jpg'
import carrer4 from '../img/carrer4.jpg'
import carrer5 from '../img/carrer5.jpg'
import carrer6 from '../img/carrer6.jpg'
import carrer7 from '../img/carrer7.jpg'
import carrer8 from '../img/carrer8.jpg'
import carrer9 from '../img/carrer9.jpg'
import carrer10 from '../img/carrer10.jpg'
import carrer11 from '../img/carrer11.jpg'
import carrer12 from '../img/carrer12.jpg'
import carrer13 from '../img/carrer13.jpg'
import carrer14 from '../img/carrer14.jpg'

const Career = () => {

    AOS.init({
        duration: 1000
      });

  return (
    <div className='dark:text-white   '>

      <div  className='p-10 lg:p-12 grid gap-20 md:grid-cols-2 '>

       
        <div data-aos="fade-left" className='grid gap-4 lg:gap-0 '>
            <h1 className='text-3xl lg:text-4xl font-semibold '>ABOUT US</h1>
            <p className='font-semibold text-lg'>Thoughts From Our Team</p>
            <p className='font-normal'>opportunities given to me so that I can push myself; and the trust given to me by the management team; excites me everyday.  </p>
            <p className='font-normal'>The sense of achievement is constant; and I am challenged all the time to bring a simple idea into fruition, be it product development or building a new brand for the company.”</p>
            <p className='text-sm font-medium'>Veronica Sarah, Business Projects and R&D Manager</p>
        </div>


        <div data-aos="fade-right" className='self-center h-full'>
            <img src={carrer1} alt="carrer1" className='md:h-full object-cover md:top-12 shadow-lg hover:scale-105 duration-500 ease-out ' />
        </div>

        <div data-aos="fade-left" className='self-center h-full'>
            <img src={carrer2} alt="carrer2" className='md:h-full object-cover shadow-lg hover:scale-105 duration-500 ease-out  ' />
        </div>

        <div data-aos="fade-right" className='grid gap-4 lg:gap-0'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>OUR MISSION</h1>
            <p className='font-semibold text-lg'>Thoughts From Our Team</p>
            <p className='font-normal'>Sneakers is defined by our culture – one that embrace collaboration, agility, flexibility, constant improvement as well as tolerance to mistake. Our people are result-oriented and customer centric. We work in teams and move fast to respond to market and consumer needs. Together, we bring joy to our consumers by serving quality coffee and delivering better service standards to communities - and we're just getting started.</p>
        </div>
      </div>

      
      <div> 

      <h1 data-aos="fade-left" className='text-3xl lg:text-4xl font-semibold text-center lg:py-10'>OUR TEAM</h1>

      <div className='grid gap-10 p-10 md:grid md:grid-cols-3 lg:grid-cols-4 md:w-6/6 lg:w-8/8'>
        
                
        <div data-aos="fade-right" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'>
            <img src={carrer3} alt="1" className='object-cover h-full  shadow-lg hover:scale-105 duration-500 ease-out' />
            <div>
            <h3 className='text-lg font-semibold'>Accounting, Control, Tax and Treasury</h3>
            <p className='text-sm font-semibold py-3'>It’s more than numbers, we are trusted to ensure our leaders have the most up to date and reliable information to help make the best possible decisions.</p>
            </div>
        </div>


        <div data-aos="fade-left" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer4} alt="2" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Creative</h3>
            <p className='text-sm font-semibold py-3'>We are a visual powerhouse. 
            We are all about nurturing imagination and turning thoughts into the ideas that give our brands the edge. 
            We connect with our customers
            through visual storytelling in-store and/or online experience.</p>
        </div>
        </div>


        <div data-aos="fade-right" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer5} alt="3" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Growth and Product</h3>
            <p className='text-sm font-semibold py-3'>Our legal team is deeply involved in every aspect of Sneakers’s businesses and operations. We provide support from contracting to compliance for existing to new projects and expansion plans.</p>
        </div>
        </div>


        <div data-aos="fade-left" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer6} alt="4" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Operations</h3>
            <p className='text-sm font-semibold py-3'>We constantly push boundaries to improve our consumer experience at our retail outlets. We ensure our team follow standard operating procedures to drive a high standard of service quality.</p>
        </div>
        </div>


        <div data-aos="fade-right" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer7} alt="5" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Supply Chain Management</h3>
            <p className='text-sm font-semibold py-3'>Our team ensures all Sneakers stores across Indonesia has fresh and quality inventory through seamless distribution network.</p>
        </div>
        </div>


        <div data-aos="fade-left" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer8} alt="6" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Business Development</h3>
            <p className='text-sm font-semibold py-3'>We are the driving engine that charter new area of growth in Sneakers; be it retail development, retail experience, product development, or championing new brands</p>
        </div>
        </div>


        <div data-aos="fade-right" className='grid gap-5 grid-cols-2  md:grid-cols-1 md:w-full '><img src={carrer9} alt="7" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out bg-red-300' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Founders’ Office</h3>
            <p className='text-sm font-semibold py-3'>We work closely with the founders and senior management of the company. We are responsible for formulating and executing the long-term strategy of the company performing Corporate Finance function, as well as leading initiatives that shape the future of Sneakers.</p>
        </div>
        </div>


        <div data-aos="fade-left" className='grid gap-5 grid-cols-2 md:grid-cols-1 md:w-full'><img src={carrer10} alt="8" className='object-cover h-full shadow-lg hover:scale-105 duration-500 ease-out' />
        <div className=''>
            <h3 className='text-lg font-semibold'>Human Resource</h3>
            <p className='text-sm font-semibold py-3'>People are our top of mind and we see everyone in Sneakers as one big family. We therefore are constantly innovating to better our employee experience.</p>
        </div></div>
        
            </div>

      </div>
     

      
      </div>


   
  )
}

export default Career
