import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersPage from '../pages/users/UsersPage';

// Lazy load the components
const HomePage = lazy(() => import('../pages/home/HomePage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={<UsersPage />} />
        </Routes>
    )
}

export default AppRoutes;