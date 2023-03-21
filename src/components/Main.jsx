import React from 'react'


//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//tilt js
import Tilt from 'react-tilt'

//gambaar
import satu from '../img/1.png'
import dua from '../img/2.png'
import tiga from '../img/3.png'
import empat from '../img/4.png'
import lima from '../img/5.png'




const Main = () => {

  AOS.init({
    duration: 1000
  });

  return (
    <div className='dark:bg-slate-700 dark:text-white'>

      <div  className='text-2xl font-[Poppins] w-3/4 md:w-3/4 mx-auto py-28 md:py-40 lg:w-1/2 xl:w-3/4 '>
        <p data-aos="fade-left" className='md:w-2/2 xl:w-2/4 md:mx-auto md:py-10'>“Product Terpopuler dengan bahan yang bagus kuat awet dan terpercaya untuk semua kalangan anak muda maupun dewasa remaja kakek dan nenek"</p>


        <p data-aos="fade-right" className='my-20 md:mx-auto md:w-2/2 xl:w-2/4 '>“kualitas terbaik se asia tenggara dan sangant diminati oleh anak-anak remaja”</p>
      </div>

       

       <div className='text-2xl font-[Poppins] p-10 grid gap-20 md:p-20 md:w-4/4 md:grid md:grid-cols-2 md:gap-30 '>

        <Tilt className="Tilt mx-auto hover:scale-105 duration-100" >
        <img options={{ maxTilt: 20, perspective: 1000, easing:     "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: true, disableAxis: null, reset: true, glare: false, maxGlare: 1  }}  style={{ height: 250, width: 250 }}  data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 " src={dua} alt="dua" />
        </Tilt>

        <p data-aos="fade-right" className=' md:w-2/2 xl:w-3/4 lg:self-center align-end '>“Desain menarik dan unik untuk dilihat ,dan sangat ramah untuk semua kalangan remaja maupun orang dewasa”</p>

        <Tilt className="Tilt mx-auto md:col-start-2 row-start-2 hover:scale-105 duration-100" >
        <img options={{ maxTilt: 20, perspective: 1000, easing:     "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: true, disableAxis: null, reset: true, glare: false, maxGlare: 1  }}  style={{ height: 250, width: 250 }}  data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 " src={tiga} alt="tiga" />
        </Tilt>



        <p data-aos="fade-right" className=' md:w-2/2 xl:w-3/4 lg:self-center '>“Teruji dan mendapatkan lisensi dan diakui sangat dominan dengan style”</p>

        <Tilt className="Tilt mx-auto hover:scale-105 duration-200" >
        <img options={{ maxTilt: 20, perspective: 1000, easing:     "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: true, disableAxis: null, reset: true, glare: false, maxGlare: 1  }}  style={{ height: 250, width: 250 }}  data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 " src={empat} alt="empat" />
        </Tilt>

      

        <p data-aos="fade-right" className=' text-center md:w-2/2 md:py-16 xl:w-3/4 lg:self-center  '>“gaya tampil unik dan sangat elegant”</p>

        <Tilt className="Tilt mx-auto md:col-start-2 md:row-start-4 hover:scale-105 duration-200" >
        <img options={{ maxTilt: 20, perspective: 1000, easing:     "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: true, disableAxis: null, reset: true, glare: false, maxGlare: 1  }}  style={{ height: 250, width: 250 }}  data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 " src={lima} alt="lima" />
        </Tilt>

          <p data-aos="fade-right" className='md:w-2/2 xl:w-3/4 lg:self-center '>“Bubble Gummers adalah merk internasional yang memiliki focus di bidang alas kaki anak-anak, menawar
          an kualitas terbaik di setiap produknya”</p>

          <Tilt className="Tilt mx-auto hover:scale-105 duration-200" >
        <img options={{ maxTilt: 20, perspective: 1000, easing:     "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: true, disableAxis: null, reset: true, glare: false, maxGlare: 1  }}  style={{ height: 250, width: 250 }}  data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 " src={satu} alt="satu" />
        </Tilt>



          <p data-aos="fade-right" className=' md:w-2/2  md:mx-auto md:text-center  xl:w-3/4 lg:self-center  '>“Produk Bubble Gummers dibuat dengan kasih sayang, keamanan, dan menyenangkan”</p>

         

        </div>

        <div data-aos="fade-left" className='text-2xl font-[Poppins] w-3/4 md:w-3/4 mx-auto py-28 md:py-40'>
          <p className=' md:w-2/2 md:mx-auto md:text-center xl:w-2/4
          '>“Aroma Bubble pada merk Bubble Gummers identic dengan aroma yang special, Tapak kaki dengan aroma buah-buahan menjadi identitas merk ini”</p>
        </div>

    </div>

  )
}

export default Main
