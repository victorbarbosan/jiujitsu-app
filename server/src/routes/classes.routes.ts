import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Get all classes
router.get("/", async (req, res) => {
    try {
        const classes = await prisma.class.findMany();
        res.json(classes);
        console.log(classes);
    }
    catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ error: "Failed to fetch classes" });
    }
})

// Create a new class
router.post("/", async (req, res) => {
    const { title, description, startTime, endTime, gymId, maxCapacity, currentAttendance, instructorId } = req.body;
    try {
        const newClass = await prisma.class.create({
            data: {
                title,
                description,
                startTime,
                endTime,
                gymId,
                maxCapacity,
                currentAttendance,
                instructorId
            }
        });
        res.status(201).json(newClass);
        console.log(newClass);
    }
    catch (error) {
        console.error("Error creating class:", error);
        res.status(500).json({ error: "Failed to create class" });
    }
})

export default router;