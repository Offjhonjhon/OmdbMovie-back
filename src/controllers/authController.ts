import { Request, Response } from 'express';
import { User } from '../repositories/authRepository.js';

import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const user: authService.UserCreateData = req.body;

    await authService.signUp(user);

    res.sendStatus(200);
}

export async function signIn(req: Request, res: Response) {
    const user = req.body;

    const result = await authService.signIn(user);

    res.status(200).send(result);
}