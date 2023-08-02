import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AbuotPage from './AbuotPage';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import { UserProvider } from './context/UserProvider';

const MainApp = () => {
    return (
        <>
            <h1>main app</h1>

            <Navbar/>
            <hr/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AbuotPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/*'  element={<Navigate to={'/about'}/>}/>


            </Routes>
        </>
    );
}

export default MainApp;
