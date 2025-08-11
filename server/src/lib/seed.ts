import { PrismaClient, Role, Belt, AgeCategory } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Create a gym
    const gym = await prisma.gym.create({
        data: {
            name: "Gracie Academy",
            address: "123 Jiu-Jitsu Street, Toronto",
        },
    });

    // Hash passwords (good practice even in seeds)
    const passwordHash = await hash("413575", 10);

    // Create users
    const users = await prisma.user.createMany({
        data: [
            {
                email: "admin2@example.com",
                password: passwordHash,
                name: "Admin User",
                role: Role.ADMIN,
                belt: Belt.BLACK,
                ageCategory: AgeCategory.ADULT,
                gymId: gym.id,
            },
            {
                email: "instructor1@example.com",
                password: passwordHash,
                name: "John Instructor",
                role: Role.INSTRUCTOR,
                belt: Belt.BLACK,
                ageCategory: AgeCategory.ADULT,
                gymId: gym.id,
            },
            {
                email: "instructor2@example.com",
                password: passwordHash,
                name: "Emily Instructor",
                role: Role.INSTRUCTOR,
                belt: Belt.BROWN,
                ageCategory: AgeCategory.ADULT,
                gymId: gym.id,
            },
            {
                email: "member1@example.com",
                password: passwordHash,
                name: "Jane Member",
                role: Role.MEMBER,
                belt: Belt.WHITE,
                ageCategory: AgeCategory.TEEN,
                gymId: gym.id,
            },
            {
                email: "member2@example.com",
                password: passwordHash,
                name: "Mike Member",
                role: Role.MEMBER,
                belt: Belt.GREEN,
                ageCategory: AgeCategory.ADULT,
                gymId: gym.id,
            },
            {
                email: "member3@example.com",
                password: passwordHash,
                name: "Anna Member",
                role: Role.MEMBER,
                belt: Belt.YELLOW,
                ageCategory: AgeCategory.KID,
                gymId: gym.id,
            },
            {
                email: "member4@example.com",
                password: passwordHash,
                name: "Tom Member",
                role: Role.MEMBER,
                belt: Belt.BLUE,
                ageCategory: AgeCategory.MASTER1,
                gymId: gym.id,
            },
            {
                email: "member5@example.com",
                password: passwordHash,
                name: "Sara Member",
                role: Role.MEMBER,
                belt: Belt.PURPLE,
                ageCategory: AgeCategory.ADULT,
                gymId: gym.id,
            }
        ],
    });

    // Create a class
    const instructor = await prisma.user.findFirst({
        where: { role: Role.INSTRUCTOR },
    });

    if (instructor) {
        await prisma.class.create({
            data: {
                title: "Beginner Jiu-Jitsu",
                description: "Introduction to basic techniques",
                startTime: new Date(),
                endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
                instructorId: instructor.id,
                gymId: gym.id,
                maxCapacity: 20,
            },
        });
    }

    console.log("Database has been seeded 🌱");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });