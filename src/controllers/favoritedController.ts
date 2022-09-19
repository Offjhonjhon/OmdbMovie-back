import { Request, Response } from 'express';
import { Favorited } from '@prisma/client';

import * as favoritedService from "../services/favoritedService.js";

export async function setFavorited(req: Request, res: Response) {
    const movieInfo = req.body;

    await favoritedService.setFavorited(movieInfo);

    res.sendStatus(200);
}

export async function unsetFavorited(req: Request, res: Response) {
    const movieId = req.body.imdbId;

    await favoritedService.deleteFavoriteds(movieId);

    res.sendStatus(200);
}

export async function getFavoriteds(req: Request, res:Response) {
    const userId = req.body.userId;

    const favoriteds = await favoritedService.getFavoriteds(userId);

    res.status(200).send(favoriteds);
}