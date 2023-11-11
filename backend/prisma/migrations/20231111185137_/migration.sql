/*
  Warnings:

  - Made the column `lastLogin` on table `students` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastLogin` on table `teachers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "students" ALTER COLUMN "lastLogin" SET NOT NULL;

-- AlterTable
ALTER TABLE "teachers" ALTER COLUMN "lastLogin" SET NOT NULL;
