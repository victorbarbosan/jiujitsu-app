import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load the components
const HomePage = lazy(() => import('../pages/home/HomePage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes;