import validate from "validate.js"
import * as userDb from "../models/user"

export default async function (filter) {
  const err = validate(filter, {
    id: { presence: true },
    name: { length: { minimum: 2 } },
    email: { email: true },
  })

  if (err) throw new Error(err)

  return await userDb.getUser(filter)
}
