/*
  Warnings:

  - The primary key for the `Cafeteria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `Cafeteria` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Cafeteria` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Cafeteria` table. All the data in the column will be lost.
  - Added the required column `map` to the `Cafeteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Cafeteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Cafeteria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafeteria" DROP CONSTRAINT "Cafeteria_pkey",
DROP COLUMN "address",
DROP COLUMN "name",
DROP COLUMN "rating",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "map" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cafeteria_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cafeteria_id_seq";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
