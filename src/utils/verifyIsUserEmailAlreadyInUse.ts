import { User } from "../repositories/authRepository.js";
import * as authRepository from "../repositories/authRepository.js";
import { conflictError } from "./errorUtils.js";

export default async function verifyIsUserEmailAlreadyInUse(email: string): Promise<User> {
    const isEmailAlreadyInUse = await authRepository.verifyEmail(email);

    if (isEmailAlreadyInUse) {
        throw conflictError("Email already in use");
    }

    return
}