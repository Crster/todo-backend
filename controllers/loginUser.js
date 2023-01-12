import { verify } from "argon2"
import { getUserByUsername } from "../models/user"
import validator from "../services/validator"

export default async function (username, password) {
  validator({ username, password }).exists("username").exists("password").exec()
  
  const user = await getUserByUsername(username)

  if (!user || !(await verify(user.password, password))) {
    throw new Error("invalid credential")
  }

  return user
}
