import db from "../services/database"

class User {
  constructor(user) {
    this.id = user._id
    this.name = user.name
    this.username = user.username
    this.email = user.email
    this.password = user.password
  }
}

export async function getUserByUsername(username) {
  let ret = null;

  const row = await db("users").findOne({ username })
  if (row) {
    ret = new User(row)
  }

  return ret
}
