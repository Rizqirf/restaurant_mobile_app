const errorHandler = (err, req, res, next) => {
  let name = err.name;
  let code;
  let message;
  console.log(err);
  switch (name) {
    case "bad_request":
      code = 400;
      message = "Please fill in the requiered fields";
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      code = 400;
      message = err.errors[0].message;
      // message = err.errors.map((el) => el.message);
      break;
    case "invalid_credentials":
      code = 401;
      message = "Invalid email or password";
      break;
    case "unauthorized":
    case "JsonWebTokenError":
      code = 401;
      message = "Please login first";
      break;
    case "forbidden":
      code = 403;
      message = "You have no access!";
      break;
    case "data_not_found":
      code = 404;
      message = `Cannot find data`;
      break;
    default:
      code = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
