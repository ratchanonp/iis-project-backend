/*
  Warnings:

  - Added the required column `imageUrl` to the `Cafeteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `about` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `open` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafeteria" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "open" TEXT NOT NULL,
ADD COLUMN     "tel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "price" INTEGER NOT NULL;
