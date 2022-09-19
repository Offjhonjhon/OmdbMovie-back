import { Router } from "express";
import authRouter from "./authRouter.js";
import favoritedRouter from "./favoriteRouter.js";


const router = Router();
router.use(authRouter);
router.use(favoritedRouter);

export default router;
