/*
  Warnings:

  - You are about to drop the column `movieId` on the `favorited_movies` table. All the data in the column will be lost.
  - You are about to drop the `favorited_characters` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `FavoritedId` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FavoritedTitle` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favorited_characters" DROP CONSTRAINT "favorited_characters_userId_fkey";

-- AlterTable
ALTER TABLE "favorited_movies" DROP COLUMN "movieId",
ADD COLUMN     "FavoritedId" INTEGER NOT NULL,
ADD COLUMN     "FavoritedTitle" TEXT NOT NULL;

-- DropTable
DROP TABLE "favorited_characters";
