import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'src/pages/404';
import AdminPage from 'src/pages/AdminPage';
import AuthPage from 'src/pages/AuthPage';
import DashboardPage from 'src/pages/DashboardPage';
import HomePage from 'src/pages/HomePage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          
        </>
    );
};

export default Router;