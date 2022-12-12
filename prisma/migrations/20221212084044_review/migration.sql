-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cafeteriaId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "cafeteriaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "restaurantId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_cafeteriaId_fkey" FOREIGN KEY ("cafeteriaId") REFERENCES "Cafeteria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
