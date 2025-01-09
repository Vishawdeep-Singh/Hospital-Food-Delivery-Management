/*
  Warnings:

  - You are about to drop the column `eveningId` on the `DietChart` table. All the data in the column will be lost.
  - You are about to drop the column `morningId` on the `DietChart` table. All the data in the column will be lost.
  - You are about to drop the column `nightId` on the `DietChart` table. All the data in the column will be lost.
  - You are about to drop the `Meal` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eveningIngredients` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eveningName` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `morningIngredients` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `morningName` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nightIngredients` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nightName` to the `DietChart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DietChart" DROP CONSTRAINT "DietChart_eveningId_fkey";

-- DropForeignKey
ALTER TABLE "DietChart" DROP CONSTRAINT "DietChart_morningId_fkey";

-- DropForeignKey
ALTER TABLE "DietChart" DROP CONSTRAINT "DietChart_nightId_fkey";

-- AlterTable
ALTER TABLE "DietChart" DROP COLUMN "eveningId",
DROP COLUMN "morningId",
DROP COLUMN "nightId",
ADD COLUMN     "eveningIngredients" TEXT NOT NULL,
ADD COLUMN     "eveningName" TEXT NOT NULL,
ADD COLUMN     "morningIngredients" TEXT NOT NULL,
ADD COLUMN     "morningName" TEXT NOT NULL,
ADD COLUMN     "nightIngredients" TEXT NOT NULL,
ADD COLUMN     "nightName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Meal";
