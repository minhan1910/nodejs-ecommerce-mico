"use strict";

const {
  StatusCodes,
  ReasonPhrases,
} = require("../constants/HttpStatusCode/httpStatusCode");

class ErrorResponse extends Error {
  constructor({ message, statusCode }) {
    super(message);
    this.statusCode = statusCode;
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor({
    message = ReasonPhrases.CONFLICT,
    statusCode = StatusCodes.CONFLICT,
  }) {
    super({ message, statusCode });
  }
}

class BadRequestError extends ErrorResponse {
  constructor({
    message = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST,
  }) {
    super({ message, statusCode });
  }
}

class AuthFailureError extends ErrorResponse {
  constructor({
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED,
  }) {
    super({ message, statusCode });
  }
}

module.exports = {
  ConflictRequestError,
  BadRequestError,
  AuthFailureError,
};
