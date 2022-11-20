import db from "../modules/database"

const userDb = db("user")

export async function getUsers() {
  return await userDb.find().toArray()
}

export async function getUser(filter) {
  return await userDb.findOne(filter)
}

export async function addUser(user) {
  const result = await userDb.insertOne(user)
  return result.insertedId
}
