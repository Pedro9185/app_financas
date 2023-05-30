import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;