import { Router } from 'express';
import attendanceRoutes from './attendance.routes.js';
import authRoutes from './auth.routes.js';
import userRoutes from './users.routes.js';
import gymRoutes from './gyms.routes.js';
import classesRoutes from './classes.routes.js';

const router = Router();

router.use('/attendance', attendanceRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/gyms', gymRoutes);
router.use('/classes', classesRoutes);

export default router;