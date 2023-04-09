import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../router/Router.css';
import Home from '../views/Home';
import Details from '../views/Details';


const Router = () => {

return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Details  />} />
    </Routes>
    </BrowserRouter>
);
}

export default Router;