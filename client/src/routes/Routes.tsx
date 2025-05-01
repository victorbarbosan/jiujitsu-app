import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load the components
const HomePage = lazy(() => import('../pages/home/HomePage'));

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes;