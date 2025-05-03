import { Router } from 'express';
import attendanceRoutes from './attendance.routes.js';
import authRoutes from './auth.routes.js';
import userRoutes from './users.routes.js';


const router = Router();

router.use('/attendance', attendanceRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);


export default router;