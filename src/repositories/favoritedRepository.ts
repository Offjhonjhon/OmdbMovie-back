import { prisma } from "../config/database.js";
import { Favorited } from "@prisma/client";

import { FavoritedCreateData } from "../services/favoritedService.js";

export async function insertFavorited(favorite: FavoritedCreateData) {
    await prisma.favorited.create({
        data: {
            movieTittle: favorite.movieTittle,
            moviePoster: favorite.moviePoster,
            imdbId: favorite.imdbId,
            userId: favorite.userId
        }
    })
}

export async function deleteFavorited(movieId: string) {
    await prisma.favorited.deleteMany({
        where: {
            imdbId: movieId
        }
    })
}

export async function getFavoriteds(userId: number) {
    return await prisma.favorited.findMany({
        where: {
            userId: userId
        }
            
    })
}