class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //add "message" property
    this.code = errorCode; // Adds a "code " property
  }
}

module.exports = HttpError;
