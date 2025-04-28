/*
  Warnings:

  - You are about to drop the column `question` on the `Assessment` table. All the data in the column will be lost.
  - You are about to drop the column `SalaryRanges` on the `IndustryInsight` table. All the data in the column will be lost.
  - You are about to drop the column `nextUpdated` on the `IndustryInsight` table. All the data in the column will be lost.
  - The `topSkills` column on the `IndustryInsight` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `resume` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nextUpdate` to the `IndustryInsight` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `demandLevel` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `marketOutlook` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "resume" DROP CONSTRAINT "resume_userId_fkey";

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "question",
ADD COLUMN     "questions" JSONB[];

-- AlterTable
ALTER TABLE "CoverLetter" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft';

-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "SalaryRanges",
DROP COLUMN "nextUpdated",
ADD COLUMN     "nextUpdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "salaryRanges" JSONB[],
DROP COLUMN "demandLevel",
ADD COLUMN     "demandLevel" TEXT NOT NULL,
DROP COLUMN "topSkills",
ADD COLUMN     "topSkills" TEXT[],
DROP COLUMN "marketOutlook",
ADD COLUMN     "marketOutlook" TEXT NOT NULL;

-- DropTable
DROP TABLE "resume";

-- DropEnum
DROP TYPE "DemandLevel";

-- DropEnum
DROP TYPE "MarketOutlook";

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "atsScore" DOUBLE PRECISION,
    "feedback" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resume_userId_key" ON "Resume"("userId");

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
