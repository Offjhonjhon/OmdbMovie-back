import { User } from "../repositories/authRepository.js";
import * as authRepository from '../repositories/authRepository.js';
import { notFoundError } from "./errorUtils.js";

export default async function verifyUserExistsById(id: number): Promise<User> {
    const user = await authRepository.verifyUserId(id);

    if(!user) {
        throw notFoundError("User not found");
    }

    return user;
}