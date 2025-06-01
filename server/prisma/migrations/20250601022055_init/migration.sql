-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'INSTRUCTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "Belt" AS ENUM ('WHITE', 'GREY', 'GREY_WHITE', 'GREY_BLACK', 'YELLOW', 'YELLOW_WHITE', 'YELLOW_BLACK', 'ORANGE', 'ORANGE_WHITE', 'ORANGE_BLACK', 'GREEN', 'GREEN_WHITE', 'GREEN_BLACK', 'BLUE', 'PURPLE', 'BROWN', 'BLACK');

-- CreateEnum
CREATE TYPE "AgeCategory" AS ENUM ('KID', 'TEEN', 'ADULT', 'MASTER1', 'MASTER2', 'MASTER3', 'MASTER4');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "belt" "Belt" NOT NULL DEFAULT 'WHITE',
    "ageCategory" "AgeCategory" NOT NULL DEFAULT 'ADULT',
    "gymId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "maxCapacity" INTEGER NOT NULL DEFAULT 20,
    "currentAttendance" INTEGER NOT NULL DEFAULT 0,
    "instructorId" TEXT NOT NULL,
    "gymId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "checkInTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'present',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "belt_changes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "oldBelt" "Belt" NOT NULL,
    "newBelt" "Belt" NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "belt_changes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gyms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_name_idx" ON "users"("name");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- CreateIndex
CREATE INDEX "users_belt_idx" ON "users"("belt");

-- CreateIndex
CREATE INDEX "users_gymId_idx" ON "users"("gymId");

-- CreateIndex
CREATE INDEX "users_ageCategory_idx" ON "users"("ageCategory");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE INDEX "classes_startTime_idx" ON "classes"("startTime");

-- CreateIndex
CREATE INDEX "classes_endTime_idx" ON "classes"("endTime");

-- CreateIndex
CREATE INDEX "classes_instructorId_idx" ON "classes"("instructorId");

-- CreateIndex
CREATE INDEX "classes_gymId_idx" ON "classes"("gymId");

-- CreateIndex
CREATE INDEX "classes_startTime_gymId_idx" ON "classes"("startTime", "gymId");

-- CreateIndex
CREATE INDEX "classes_currentAttendance_idx" ON "classes"("currentAttendance");

-- CreateIndex
CREATE INDEX "classes_createdAt_idx" ON "classes"("createdAt");

-- CreateIndex
CREATE INDEX "attendances_userId_idx" ON "attendances"("userId");

-- CreateIndex
CREATE INDEX "attendances_classId_idx" ON "attendances"("classId");

-- CreateIndex
CREATE INDEX "attendances_checkInTime_idx" ON "attendances"("checkInTime");

-- CreateIndex
CREATE INDEX "attendances_userId_classId_idx" ON "attendances"("userId", "classId");

-- CreateIndex
CREATE INDEX "attendances_status_idx" ON "attendances"("status");

-- CreateIndex
CREATE INDEX "belt_changes_userId_idx" ON "belt_changes"("userId");

-- CreateIndex
CREATE INDEX "belt_changes_changedAt_idx" ON "belt_changes"("changedAt");

-- CreateIndex
CREATE INDEX "belt_changes_newBelt_idx" ON "belt_changes"("newBelt");

-- CreateIndex
CREATE INDEX "belt_changes_userId_changedAt_idx" ON "belt_changes"("userId", "changedAt");

-- CreateIndex
CREATE INDEX "gyms_name_idx" ON "gyms"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "belt_changes" ADD CONSTRAINT "belt_changes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
