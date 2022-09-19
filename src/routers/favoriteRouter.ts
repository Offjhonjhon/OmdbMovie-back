import { Router } from "express";
import * as favoritedController from "../controllers/favoritedController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import {setFavoritedSchema, deleteFavoritedSchema, getFavoritedSchema} from "../schemas/favoriteSchema.js";

const favoritedRouter = Router();

favoritedRouter.post("/favorited", validateSchemaMiddleware(setFavoritedSchema), favoritedController.setFavorited);
favoritedRouter.delete("/favorited", validateSchemaMiddleware(deleteFavoritedSchema), favoritedController.unsetFavorited);
favoritedRouter.get("/favorited", validateSchemaMiddleware(getFavoritedSchema), favoritedController.getFavoriteds);

export default favoritedRouter;