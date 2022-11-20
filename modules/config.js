import "dotenv/config"
import path from "path"

export default {
  port: process.env.PORT ?? 8080,
  viewPath: path.resolve("./views"),
  dbUri: process.env.MONGO_URI,
  dbName: process.env.DB_NAME ?? "sampledb",
  eta: {
    useWith: true,
    views: path.resolve("./views"),
    cache: process.env.NODE_ENV === "production",
  },
}
