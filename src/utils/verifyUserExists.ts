import { User } from "../repositories/authRepository.js";
import * as authRepository from "../repositories/authRepository.js";
import { notFoundError } from "./errorUtils.js";

export default async function verifyUserExistsByEmail(email: string): Promise<User> {
    const user = await authRepository.verifyEmail(email);

    if (!user) {
        throw notFoundError("User not found")
    }

    return user;
}
