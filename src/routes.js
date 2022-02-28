import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Welcome from './pages/Welcome';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';



export default function MainRoutes(){
    return(
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Welcome' element={<Welcome/>}/> 
    </Routes>
    );
}