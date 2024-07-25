import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

    <Router>
      
      <Routes>
   

        <Route path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      
      </Routes>
    </Router>
    </>
  );
}

export default App
