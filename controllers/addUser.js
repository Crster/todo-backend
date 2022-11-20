import validate from "validate.js"
import * as userDb from "../models/user"

export default async function (user) {
  const err = validate(user, {
    name: { length: { minimum: 2 } },
    email: { email: true },
  })

  if (err) throw new Error(err)

  const userId = await userDb.addUser(user)
  return await userDb.getUser({ id: userId })
}
