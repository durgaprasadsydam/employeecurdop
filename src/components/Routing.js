import React from 'react';
import "react-router-dom";
import Products from './Products';
import Slider from './Slider';
import {Routes, Route} from 'react-router-dom'
import Contact from './Contact';
import Register from './Register';
import About from './About';
import BasicFunc from '../functionalComp/BasicFunc';
import NoPage from './NoPage';
import AdminLogin from './Admin/AdminLogin';
import DashBoard from './Admin/DashBoard';

const Routing = () => {
  return (
    <div>
      <Routes>
       <Route index element={<Slider />} />
       <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/register" element={<Register /> } />
       <Route path="/basicfunc" element={<BasicFunc />} />
       <Route path="*" element={<NoPage />} />
       <Route path="/admin" element={<AdminLogin />} />
       <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default Routing;
