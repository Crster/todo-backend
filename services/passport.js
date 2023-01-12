import * as passport from "passport"
import LocalStrategy from "passport-local"
import { loginUser } from "../controllers"

passport.use(
  "local",
  new LocalStrategy(function (username, password, done) {
    loginUser(username, password)
      .then((user) => done(null, user))
      .catch((err) => done(err))
  }),
)

export default passport
