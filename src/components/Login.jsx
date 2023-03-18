import React, { Component } from 'react';
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css';

import login from '../img/login2.gif'
import Post from './Post';

class Login extends Component {
 
  state = {
    post: [],

    formBlogPost: {
      title: '',
      body: '',
      number: '',
      id: 1,
      userId: 1,
    },

    isUpdate: false
  }

  getPostAPI = () =>{
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    .then((res) => {
      this.setState({
        post: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  postDataToAPI = () => {
    axios.post('http://localhost:3004/posts', this.state.formBlogPost)
    .then((res) => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          title: '',
          body: '',
          number: '',
          id: 1,
          userId: 1,
    
        },
      })
    }, (err) => {
      console.log(err);
    })
   
  }

  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          title: '',
          body: '',
          number: '',
          id: 1,
          userId: 1,
    
        },
      })
    })
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`)
    .then((res) => {
      console.log(res);
      this.getPostAPI();
    })
  }

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  handleFormChange = (event) => {
    
    let formBlogPostNew= {...this.state.formBlogPost};
    let timestamp = new Date().getTime();

    if(!this.state.isUpdate){
      formBlogPostNew['id'] = timestamp;  
    }

    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew
    })
  }

  handleSubmit = () => {
    alert("Data Telah Tersimpan")
    if(this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
    
  }

  componentDidMount() {
    this.getPostAPI();
  }
    


  
  render() {

    AOS.init({
      duration: 1000
    });

    return (
      <div className='text-white dark:bg-slate-700 dark:text-white'>
            <div className='p-10 grid gap-10 lg:w-2/3 mx-auto  xl:w-2/3'>
          <div data-aos="fade-left">
            <h1  className='text-2xl font-semibold text-center '>DAFTAR PEMESANAN</h1>
            <hr />
          </div>


          <div data-aos="fade-right" className='grid gap-5  pb-20 w-full md:grid-cols-2'>
            <div><img src={login} alt="img" className='' />
          </div>

          <div className='w-full mx-auto md:w-full '>
                <div data-aos="fade-left" className='bg-gradient-to-r from-cyan-500 to-blue-200 rounded-lg shadow-lg p-10 grid gap-5 h-full '>
                  <div className='grid grid-cols-1 gap-2'>
                    <h3 className='text-white text-center font-semibold py-2'>SNEAKER Corps</h3>
                    <label className='text-white' htmlFor="">Nama :</label>
                    <input type="text" name='title' value={this.state.formBlogPost.title} placeholder="Masukan Nama" className='rounded-sm focus:outline-none focus:ring focus:border-blue-500 p-2 text-black ' onChange={this.handleFormChange}/>
                  </div>

                  <div className='grid grid-cols-1 gap-2'>
                    <label className='text-white' htmlFor="">Email :</label>
                    <input type="text" name='body' id='body' value={this.state.formBlogPost.body} placeholder="Masukan Email"  className='rounded-sm focus:outline-none focus:ring focus:border-blue-500 p-2 text-black' onChange={this.handleFormChange}/>
                  </div>

                  <div className='grid grid-cols-1 gap-2'>
                    <label className='text-white' htmlFor="">No Telepon :</label>
                    <input type="text" name='number' id='number' value={this.state.formBlogPost.number} placeholder="Masukan Email"  className='rounded-sm focus:outline-none focus:ring focus:border-blue-500 p-2 text-black' onChange={this.handleFormChange}/>
                  </div>

              
                    
                  <button className="text-white bg-blue-300 backdrop-blur-lg rounded-lg shadow-lg hover:scale-105 duration-300 p-1 hover:ring hover:ring-blue-300 " onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>        
          </div>
        </div>

      <div className='w-2/3 mx-auto grid md:grid-cols-2 gap-5'>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
          })
        }
      </div>
            
      </div>
    );
  }
}

export default Login;
