import { prisma } from "../config/database.js"
import { UserCreateData } from "../services/authService.js";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string;
}


export async function insert(UserCreateData: UserCreateData, hashedPassword: string) {
    await prisma.users.create({
        data: {
            name: UserCreateData.name,
            email: UserCreateData.email,
            password: hashedPassword,
            image: UserCreateData.image
        }
    })
}

export async function verifyEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    })
}

