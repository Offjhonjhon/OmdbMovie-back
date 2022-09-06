import { prisma } from "../config/database.js";
import verifyIsUserEmailAlreadyInUse from "../utils/verifyIsUserEmailAlreadyInUse.js";
import { User } from "../repositories/authRepository.js";
import * as authRepository from "../repositories/authRepository.js";
export type UserCreateData = Omit<User, "id">;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyUserExistsByEmail from "../utils/verifyUserExists.js";
import { notFoundError, unauthorizedError } from "../utils/errorUtils.js";


export async function signUp(user: UserCreateData) {
    await verifyIsUserEmailAlreadyInUse(user.email);

    const hashedPassword = await bcrypt.hash(user.password, 10);

    await authRepository.insert(user, hashedPassword);
}

export async function signIn(user: User) {
    const verify = await verifyUserExistsByEmail(user.email);

    if (!verify) {
        throw notFoundError("User not found");
    }

    const isPasswordValid = await bcrypt.compare(user.password, verify.password);

    if (!isPasswordValid) {
        throw unauthorizedError("Invalid password");
    }

    const token = jwt.sign({ id: verify.id, email: verify.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return { token, name: verify.name};
}