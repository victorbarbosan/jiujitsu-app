import { Router } from 'express';


const router = Router();

// Get authentication
router.get('/', (req, res) => {
    res.json({ message: "You are authenticated" });
    console.log(`GET request received at /api/auth from ${req.ip}`);
}
);

export default router;