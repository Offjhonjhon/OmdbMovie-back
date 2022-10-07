import Joi from "joi";

import { UserCreateData } from "../services/authService.js";

export const signUpSchema = Joi.object<UserCreateData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
});

export const signInSchema = Joi.object<UserCreateData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
