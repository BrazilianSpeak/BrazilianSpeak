/*
  Warnings:

  - Added the required column `student_grade` to the `classrooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_grade` to the `classrooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classrooms" ADD COLUMN     "student_grade" INTEGER NOT NULL,
ADD COLUMN     "teacher_grade" INTEGER NOT NULL;
