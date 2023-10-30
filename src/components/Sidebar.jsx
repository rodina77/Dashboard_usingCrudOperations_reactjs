import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className='Sidebar shadow-lg'>
      <img src="/assets/images/747891.png" width={100} alt="" /><br></br>
      <Link to="/" className='text-decoration-none text-white'>home</Link><br></br>
       <Link to="/products" className='text-decoration-none text-white'>get all products</Link><br></br>
    </div>
      
    </>
  );
}

export default Sidebar;
