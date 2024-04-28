import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import Loader from 'src/modules/Loader';
import NotFound from 'src/pages/404';
import AdminPage from 'src/pages/AdminPage';
import AuthPage from 'src/pages/AuthPage';
import DashboardPage from 'src/pages/DashboardPage';
import HomePage from 'src/pages/HomePage';
import { getProfileUser } from 'src/services/user';

const Routers = () => {
    const {data,isLoading,error}=useQuery(["profile"],getProfileUser)
    console.log('data',data,isLoading);
    if(isLoading) return (<div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}><Loader /></div>)
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="auth" element={data? <Navigate to="/dashboard" /> : <AuthPage />} />
                <Route path="admin" element={data && data.data.role=='ADMIN' ? (<AdminPage />) : (<Navigate to="/" />)} />
                <Route path="dashboard" element={data? <DashboardPage /> : <Navigate to="/auth" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Routers;