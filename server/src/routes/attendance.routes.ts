import { Router } from 'express';


const router = Router();

// Get all attendance records
router.get('/', (req, res) => {
    res.json({ message: "Record 1', 'Record 2', 'Record 3" });
    console.log(`GET request received at /api/attendance from ${req.ip}`);
}
);

export default router;