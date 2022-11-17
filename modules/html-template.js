import fs from "fs"
import replace from "@stdlib/string-replace"

function evalInContext(scr, context) {
  // execute script in private context
  // eslint-disable-next-line no-new-func
  return new Function("with(this) { return " + scr + "}").call(context)
}

export default function htmlTemplate(filePath, options, callback) {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const output = replace(content.toString(), /\{(.+)\}/g, (match, value) => {
        const words = match.match(/(\w+)/g)

        const defaultOption = {};
        for (const word of words) {
            defaultOption[word] = ""
        }

      return evalInContext(value, {
        ...defaultOption,
        ...options,
      })
    })

    return callback(null, output)
  })
}
