import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const[name , setName]= useState("")
    const [email ,setEmail] =useState("");
    const [password , setPassword]= useState("");

    function handleName(e){
        setName(e.target.value);
        console.log(name)
        
    }
    function handleEmail(e){
        setEmail(e.target.value);
        console.log(email)
    }
    function handlePassword(e){
        setPassword(e.target.value);
        console.log(password)
    }

    function handleSignup(e){
        console.log(name);
        console.log(email);
        console.log(password);
        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));
        // var name = localStorage.getItem('name');
        // var email = localStorage.getItem('email');
        // var password = localStorage.getItem('password');

    }


  return (
    <div className='bg-purple-600 w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className=' absolute right-2 top-2 border  border-white  rounded-lg p-1 text-white'><Link to={"/"} >Home</Link> </div> 
    <div className='bg-white w-96 h-96 p-10 rounded-lg flex flex-col space-y-7'>
<div className='text-center text-5xl '>Sign Up </div>
<div className='border-2 rounded-lg p-1 '>
    <input type='text' placeholder='Name' className='w-full p-1'  onChange={handleName} ></input>

</div>

<div className='border-2 rounded-lg p-1 '>
    <input type='email' placeholder='Email id' className='w-full p-1' onChange={handleEmail}  ></input>
</div>
<div className='border-2 rounded-lg p-1'>
    <input type='password' placeholder='Password' className='w-full p-1' onChange={handlePassword}></input>
</div>

<div className='flex space-x-10 ml-14'>
<button className=' border rounded-lg p-1 bg-purple-600 text-white w-20 text-center' onClick={handleSignup}>Sign Up</button>
<Link  to={"/login"} className=' border  rounded-lg p-1 bg-purple-600 text-white w-20 text-center'>Login</Link>
</div>
</div>
          
</div>
  )
}

export default SignUp
