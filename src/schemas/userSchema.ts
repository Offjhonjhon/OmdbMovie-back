import Joi from "joi";

import { UserCreateData } from "../services/authService.js";

export const signUpSchema = Joi.object<UserCreateData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    name: Joi.string().required(),
    image: Joi.string().uri().required()
});

export const signInSchema = Joi.object<UserCreateData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});