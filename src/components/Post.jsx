import React from 'react'

const Post = (props) => {
  return (
    <div data-aos="flip-up" className=''>
      <div className='bg-gradient-to-r from-blue-400 to-blue-300 rounded-md shadow-md grid gap-5 mb-5'>
            <div className='content grid gap-2'>

              <div  className='text-white font-semibold grid gap-1 mx-auto'>
              <p className='text-2xl font-semibold text-center mb-5'>List</p>
                <p className="title">Nama : {props.data.title}</p>
                <p className="desc">Email : {props.data.body}</p>
                <p className="number">No Tlp : {props.data.number}</p>
              </div>
              
             <div className='flex gap-5 m-auto py-5 '>
              <button onClick={() => props.remove(props.data.id)} className='bg-gradient-to-r from-red-400 to-red-300 w-[100px] h-[50px] rounded-lg shadow-md text-white hover:scale-105 duration-300 ease-in-out'>Remove</button>

              <button onClick={() => props.update(props.data)} className='bg-gradient-to-r from-green-400 to-green-300 w-[100px] h-[50px] rounded-lg shadow-md text-white hover:scale-105 duration-300 ease-in-out'>Edit</button>
             </div>

          

            </div>
        </div>
    </div>
  )
}

export default Post
