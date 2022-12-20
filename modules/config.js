import "dotenv/config"
import path from "path"

export default {
  port: process.env.PORT ?? 8080,
  viewPath: path.resolve("./views"),
  dbUri: process.env.MONGO_URI,
  dbName: process.env.DB_NAME ?? "sampledb",
  jwtToken: {
    secret: process.env.JWT_SECRET,
    expiresIn: 60 * 60,
  },
}
