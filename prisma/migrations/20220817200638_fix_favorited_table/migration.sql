/*
  Warnings:

  - You are about to drop the column `FavoritedId` on the `favorited_movies` table. All the data in the column will be lost.
  - You are about to drop the column `FavoritedTitle` on the `favorited_movies` table. All the data in the column will be lost.
  - Added the required column `imdbId` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moviePoster` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieTitle` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieTittle` to the `favorited_movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "favorited_movies" DROP COLUMN "FavoritedId",
DROP COLUMN "FavoritedTitle",
ADD COLUMN     "imdbId" TEXT NOT NULL,
ADD COLUMN     "moviePoster" TEXT NOT NULL,
ADD COLUMN     "movieTitle" TEXT NOT NULL,
ADD COLUMN     "movieTittle" TEXT NOT NULL;
