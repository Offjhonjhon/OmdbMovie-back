import Joi from "joi";

import { FavoritedCreateData } from "../services/favoritedService";

export const setFavoritedSchema = Joi.object<FavoritedCreateData>({
  userId: Joi.number().required(),
  movieTittle: Joi.string().required(),
  imdbId: Joi.string().required(),
  moviePoster: Joi.string().required()  
});

export const deleteFavoritedSchema = Joi.object({
    imdbId: Joi.string().required(),
});

export const getFavoritedSchema = Joi.object({
    userId: Joi.number().required(),
});