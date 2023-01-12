import { MongoClient } from "mongodb"
import config from "./config"

export const client = new MongoClient(config.dbUri)

export default function collection(name) {
  return client.db(config.dbName).collection(name)
}
