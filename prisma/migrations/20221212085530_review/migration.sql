/*
  Warnings:

  - Added the required column `comment` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;
