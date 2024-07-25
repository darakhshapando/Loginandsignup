import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='flex bg-purple-600 sticky top-0 w-full h-[6vh] justify-center space-x-10 text-center text-white'>
        <p className='ml-10 mt-4'>Home</p>
        <p className='mt-4'>About</p>
        <p className='mt-4'>Contact</p>
        <Link to={"/login"} className='mt-3 mb-3 border-2 rounded-lg p-1 w-15'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;