import "dotenv/config"
import path from "path"

export default {
  port: process.env.PORT ?? 8080,
  viewPath: path.resolve("./views"),
  nodeModule: path.resolve("./node_modules"),
  wwwroot: path.resolve("./public"),
  dbUri: process.env.MONGO_URI,
  dbName: process.env.MONGO_DB ?? "sampledb",
  jwtToken: {
    secret: process.env.JWT_SECRET,
    expiresIn: 60 * 60,
  },
  staticOption: { maxAge: "1d" },
}
