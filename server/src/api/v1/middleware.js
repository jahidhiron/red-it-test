// not found
exports.notFound = (req, res, next) => {
  return res
    .status(404)
    .json({ code: 404, status: "failed", message: "API route not found" });
};

// error handling
exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.code === 200 ? 500 : res.code;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "prod" ? null : err.stack,
  });
};
