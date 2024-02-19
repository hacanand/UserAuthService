const AppErrors = require("./errorHandler");
const {StatusCodes } = require("http-status-codes");
class ValidationError extends AppErrors {
  constructor(error) {
    let errorName = error.name;
    let explanation=[];
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });
    super(
      errorName,
      "not able to validate the data in the request ",
      explanation,
      StatusCodes.BAD_REQUEST,
    );
  }
}
module.exports = ValidationError;
