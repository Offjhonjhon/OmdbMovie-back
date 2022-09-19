import verifyUserExistsById from "../utils/verifyUserExistById.js";
import { Favorited } from "@prisma/client";
import * as favoritedRepository from "../repositories/favoritedRepository.js";
import { notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export type FavoritedCreateData = Omit<Favorited, "id">;

export async function setFavorited(favorited: FavoritedCreateData) {
    await verifyUserExistsById(favorited.userId);

    await favoritedRepository.insertFavorited(favorited);
}

export async function getFavoriteds(userId: number) {
    await verifyUserExistsById(userId);

    return await favoritedRepository.getFavoriteds(userId);
}

export async function deleteFavoriteds(imdbId: string) {
    await favoritedRepository.deleteFavorited(imdbId);
}