/*
  Warnings:

  - Added the required column `cafeteriaId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "cafeteriaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_cafeteriaId_fkey" FOREIGN KEY ("cafeteriaId") REFERENCES "Cafeteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
