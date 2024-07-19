export default class HttpError extends Error {
  statusCode = 500

  constructor(statusCode, errorMessage) {
    super(errorMessage)
    this.statusCode = statusCode
  }
}
