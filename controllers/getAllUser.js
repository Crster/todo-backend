import * as userDb from "../models/user"

export default async function () {
  return await userDb.getUsers()
}
