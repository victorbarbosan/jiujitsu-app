import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
        console.log(users)
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}
);

// Create a new user
router.post('/', async (req, res) => {
    const { name, email, password, role, belt, ageCategory, gymId } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role,
                belt,
                ageCategory,
                gymId
            }
        })
        res.status(201).json(newUser);
        console.log("User created:", newUser);
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
})

export default router;