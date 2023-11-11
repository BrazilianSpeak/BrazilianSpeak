-- AlterTable
ALTER TABLE "students" ALTER COLUMN "lastLogin" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "teachers" ALTER COLUMN "lastLogin" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
