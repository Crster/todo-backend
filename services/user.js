import { verify } from "argon2";
import db from "../modules/database";

export async function getUserByUsernameAndPassword(username, password) {
    const user = await db("users").findOne({ username }, {
        projection: {
            name: 1,
            username: 1,
            email: 1,
            password: 1
        }
    })

    if (!user || !(await verify(user.password, password))) throw new Error("User not found")

    return {
        name: user.name,
        username: user.username,
        email: user.email
    }
}