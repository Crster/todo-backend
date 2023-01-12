import validate from "validate.js"

class ValidatorBuilder {
  constructor(data) {
    this.data = data
    this.tester = {}

    for (const key in data) {
      this.tester[key] = {}
    }
  }

  exists(field) {
    Object.assign(this.tester[field], { presence: true })
    return this
  }

  equals(field, field2) {
    Object.assign(this.tester[field], { equality: field2 })
    return this
  }

  isNumber(field) {
    Object.assign(this.tester[field], { type: "number" })
    return this
  }

  isString(field) {
    Object.assign(this.tester[field], { type: "string" })
    return this
  }

  isArray(field) {
    Object.assign(this.tester[field], { type: "array" })
    return this
  }

  isUrl(field) {
    Object.assign(this.tester[field], { url: true })
    return this
  }

  isBetween(field, min, max) {
    Object.assign(this.tester[field], {
      numerically: { greaterThanOrEqualTo: min, lessThanOrEqualTo: max },
    })
    return this
  }

  isDate(field) {
    Object.assign(this.tester[field], { datetime: true })
    return this
  }

  isEmail(field) {
    Object.assign(this.tester[field], { email: true })
    return this
  }

  isValid(field, format) {
    Object.assign(this.tester[field], { format })
    return this
  }

  exec() {
    const invalid = validate(this.data, this.tester)
    if (invalid) {
      for (const key in invalid) {
        const errors = invalid[key]
        if (Array.isArray(errors) && errors.length > 0) {
          throw new Error(errors[0])
        }
      }

      throw new Error("Invalid data")
    }

    return true
  }

  test() {
    try {
      return this.exec()
    } catch {
      return false
    }
  }
}

export default function validator(data) {
  return new ValidatorBuilder(data)
}
