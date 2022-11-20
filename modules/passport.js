import * as passport from "passport"
import BearerStrategy from "passport-http-bearer"
import { getUser } from "../controllers"

passport.use(
  new BearerStrategy(function (token, done) {
    getUser({ token })
      .then((user) => done(null, user, { scope: "all" }))
      .catch((err) => done(err))
  }),
)

export default passport
