import path from "path"

export default {
  port: process.env.PORT ?? 8080,
  viewPath: path.resolve("./views"),
  eta: {
    useWith: true,
    views: path.resolve("./views"),
    cache: process.env.NODE_ENV === "production"
  }
}
