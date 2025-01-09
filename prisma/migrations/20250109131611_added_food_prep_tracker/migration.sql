-- CreateEnum
CREATE TYPE "PrepStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'FINISHED');

-- CreateTable
CREATE TABLE "FoodPreparationTracker" (
    "id" SERIAL NOT NULL,
    "status" "PrepStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "staffId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "dietChartId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FoodPreparationTracker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FoodPreparationTracker" ADD CONSTRAINT "FoodPreparationTracker_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPreparationTracker" ADD CONSTRAINT "FoodPreparationTracker_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPreparationTracker" ADD CONSTRAINT "FoodPreparationTracker_dietChartId_fkey" FOREIGN KEY ("dietChartId") REFERENCES "DietChart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
