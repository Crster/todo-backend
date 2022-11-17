import path from "path"

export default {
  port: process.env.PORT ?? 8080,
  viewPath: path.resolve("./views"),
}
