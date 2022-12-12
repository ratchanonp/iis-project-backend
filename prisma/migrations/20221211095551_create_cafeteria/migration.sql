-- CreateTable
CREATE TABLE "Cafeteria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cafeteria_pkey" PRIMARY KEY ("id")
);
