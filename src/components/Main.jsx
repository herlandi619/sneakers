import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div>

      <div  className='text-2xl font-[Poppins] w-3/4 md:w-3/4 mx-auto py-28 md:py-40 lg:mt-48 lg:w-1/2 xl:w-3/4 xl:mt-80'>
        <p data-aos="fade-left" className='md:w-2/2 xl:w-2/4 md:mx-auto md:py-10'>“Product Terpopuler dengan bahan yang bagus kuat awet dan terpercaya untuk semua kalangan anak muda maupun dewasa remaja kakek dan nenek"</p>


        <p data-aos="fade-right" className='my-20 md:mx-auto md:w-2/2 xl:w-2/4 '>“kualitas terbaik se asia tenggara dan sangant diminati oleh anak-anak remaja”    </p>
      </div>

       

       <div className='text-2xl font-[Poppins] p-10 grid gap-20 md:p-20 md:w-4/4 md:grid md:grid-cols-2 md:gap-40 xl:gap-20   '>

        <img data-aos="fade-left" className="mx-auto  md:w-2/2 lg:w-3/4 md:col-start-2 md:row-start-1 hover:scale-110 duration-500" src={dua} alt="dua" />

        <p data-aos="fade-right" className=' md:w-2/2 xl:w-3/4 '>“Desain menarik dan unik untuk dilihat ,dan sangat ramah untuk semua kalangan remaja maupun orang dewasa”</p>

        <img data-aos="fade-left" className="mx-auto hover:scale-110 duration-500 ease-out md:w-2/2 lg:w-3/4  " src={tiga} alt="dummy3"  />



        <p data-aos="fade-right" className=' md:w-2/2 xl:w-3/4 '>“Teruji dan mendapatkan lisensi dan diakui sangat dominan dengan style”</p>

        <img data-aos="fade-left" className="mx-auto hover:scale-110 duration-500 ease-out md:w-2/2 md:col-start-2 md:row-start-3 lg:w-3/4 " src={empat} alt="empat" />

      

        <p data-aos="fade-right" className=' text-center md:w-2/2 md:py-16 xl:w-3/4  '>“gaya tampil unik dan sangat elegant”</p>

        <img data-aos="fade-left" className="mx-auto hover:scale-110 duration-500 ease-out md:w-2/2 lg:w-3/4 " src={lima} alt="lma" />

          <p data-aos="fade-right" className='md:w-2/2 xl:w-3/4 '>“Bubble Gummers adalah merk internasional yang memiliki focus di bidang alas kaki anak-anak, menawar
          an kualitas terbaik di setiap produknya”</p>

          <img data-aos="fade-left" className="mx-auto hover:scale-110 duration-500 ease-out md:w-2/2 md:col-start-2 md:row-start-5 lg:w-3/4  " src={satu} alt="stu" />



          <p data-aos="fade-right" className=' md:w-2/2  md:mx-auto md:text-center  xl:w-3/4  '>“Produk Bubble Gummers dibuat dengan kasih sayang, keamanan, dan menyenangkan”</p>

         

        </div>

        <div data-aos="fade-left" className='text-2xl font-[Poppins] w-3/4 md:w-3/4 mx-auto py-28 md:py-40'>
          <p className=' md:w-2/2 md:mx-auto md:text-center xl:w-2/4
          '>“Aroma Bubble pada merk Bubble Gummers identic dengan aroma yang special, Tapak kaki dengan aroma buah-buahan menjadi identitas merk ini”</p>
        </div>

    </div>

  )
}

export default Main
