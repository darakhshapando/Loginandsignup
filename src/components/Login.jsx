import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='bg-purple-600 w-[100vw] h-[100vh] flex justify-center items-center'>
       <div className=' absolute right-2 top-2 border  border-white  rounded-lg p-1 text-white'><Link to={"/"} >Home</Link> </div> 
        <div className='bg-white w-96 h-96 p-10 rounded-lg flex flex-col space-y-7'>
    <div className='text-center text-5xl '>Login </div>
    <div className='border-2 rounded-lg p-2 '>
        <input type='email' placeholder='Email id' className='w-full p-1' ></input>
    </div>
    <div className='border-2 rounded-lg p-2'>
        <input type='password' placeholder='Password' className='w-full p-1'></input>
    </div>
    <div className='text-black'>new user ? create account</div>
   <div className='flex space-x-10 ml-14 '>
    <Link  to={"/signup"} className=' border rounded-lg p-1 bg-purple-600 text-white w-20 text-center' >Sign Up</Link>
    <button className=' border  rounded-lg p-1 bg-purple-600 text-white w-20 text-center'>Login</button>
   </div>
   </div>
              
    </div>
  )
}

export default Login
