import { Router } from 'express';


const router = Router();

// Get all users
router.get('/', (req, res) => {
    res.json({ message: "User 1, User 2, User 3" });
    console.log(`GET request received at /api/users from ${req.ip}`);
}
);

export default router;