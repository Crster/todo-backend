import db from "../modules/database"

export async function getUsers() {
  return await db("user").find().toArray()
}

export async function getUser(filter) {
  return await db("user").findOne(filter)
}

export async function addUser(user) {
  const result = await db("user").insertOne(user)
  return result.insertedId
}
