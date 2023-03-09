import React from 'react'


//gambaar
import satu from '../img/1.png'
import dua from '../img/2.png'
import tiga from '../img/3.png'
import empat from '../img/4.png'
import lima from '../img/5.png'

//bg
import bg2 from '../img/w1.jpg'
import bg3 from '../img/w3.jpg'


const Main = () => {
  return (
    <div>

        <div className='text-xl p-28 md:p-20 lg:p-36 bg-[#d9d9d9] lg:text-2xl  '>
        
        <p className='md:w-1/2 md:mx-auto md:text-center md:py-10'>“Product Terpopuler dengan bahan yang bagus kuat awet dan terpercaya untuk semua kalangan anak muda maupun dewasa remaja kakek dan nenek"</p>

        <div className='md:flex md:gap-10 md:py-28
        '>
        <p className='my-24 md:w-1/2 '>“kualitas terbaik se asia tenggara dan sangant diminati oleh anak-anak remaja”    </p>

        <img className="hover:scale-110 duration-500 ease-out md:w-1/2" src={dua} alt="dua" />
        </div>

        <div className='md:flex md:gap-10 md:py-28'>
        <p className='my-24 md:w-1/2'>“Desain menarik dan unik untuk dilihat ,dan sangat ramah untuk semua kalangan remaja maupun orang dewasa”</p>

        <img className="hover:scale-110 duration-500 ease-out md:w-1/2" src={tiga} alt="dummy3"  />
        </div>

        <div className='md:flex md:gap-10 md:py-28'>
        <p className='my-24 md:w-1/2'>“Teruji dan mendapatkan lisensi dan diakui sangat dominan dengan style”</p>

        <img className="hover:scale-110 duration-500 ease-out md:w-1/2" src={empat} alt="empat" />
        </div>


        
      </div>


      <div>
          <img src={bg3} alt="w3" className='grayscale' />
        </div>

      <div className='text-xl p-28 md:p-20 lg:p-36 bg-[#d9d9d9] lg:text-2xl  '>

      <div className='md:flex md:gap-10 md:py-28
        '>
        <p className='my-24 md:w-1/2'>“gaya tampil unik dan sangat elegant”</p>

        <img className="hover:scale-110 duration-500 ease-out md:w-1/2" src={lima} alt="lma" />
        </div> 

        <div className='md:flex md:gap-10 md:py-28
        '>
          <p className='my-24 md:w-1/2'>“Bubble Gummers adalah merk internasional yang memiliki focus di bidang alas kaki anak-anak, menawar
          an kualitas terbaik di setiap produknya”</p>

          <img className="hover:scale-110 duration-500 ease-out md:w-1/2" src={satu} alt="stu" />
        </div>


        <p className='my-24 md:w-1/2  md:mx-auto md:text-center  '>“Produk Bubble Gummers dibuat dengan kasih sayang, keamanan, dan menyenangkan”</p>

        <p className='md:w-1/2 md:mx-auto md:text-center
        '>“Aroma Bubble pada merk Bubble Gummers identic dengan aroma yang special, Tapak kaki dengan aroma buah-buahan menjadi identitas merk ini”</p>
      

      </div>

      <div>
        <img src={bg2} alt="w1" className='grayscale'  />
      </div>

    </div>
    

    
  )
}

export default Main
