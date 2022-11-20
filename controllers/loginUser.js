import validate from "validate.js"
import jwt from "jsonwebtoken"
import * as userDb from "../models/user"
import config from "../modules/config"

export default async function (credential) {
  const err = validate(credential, {
    email: { email: true },
    password: { presence: true },
  })

  if (err) throw new Error(err)

  const user = await userDb.getUser({
    email: credential.email,
    password: credential.password,
  })
  if (user) {
    return jwt.sign({ userId: user.id }, config.jwtToken.secret, {
      expiresIn: config.jwtToken.expiresIn,
    })
  }
}
