import * as passport from "passport"
import LocalStrategy from "passport-local"
import { getUserByUsernameAndPassword } from "../services/user"

passport.use(
  "local",
  new LocalStrategy(function (username, password, done) {
    getUserByUsernameAndPassword(username, password)
      .then((user) => {
        done(null, user)
      })
      .catch((err) => {
        done(err)
      })
  }),
)

export default passport
