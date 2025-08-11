import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

// Get all gyms
router.get("/", async (req, res) => {
    try {
        const gym = await prisma.gym.findMany();
        res.json(gym);
        console.log(gym)
    }
    catch (error) {
        console.error("Error fetching gyms:", error);
        res.status(500).json({ error: "Failed to fetch gyms" });
    }
})


// Create a new gym
router.post("/", async (req, res) => {
    const { name, address } = req.body;
    try {
        const gym = await prisma.gym.create({
            data: {
                name,
                address
            }
        })
        res.status(201).json(gym);
        console.log("Gym created:", gym);
    }
    catch (error) {
        console.error("Error creating gym:", error);
        res.status(500).json({ error: "Failed to create gym" });
    }
})

export default router;