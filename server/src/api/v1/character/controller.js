// custom
const { listService, detailService } = require("./service");

// list
exports.list = async (req, res) => {
  const { status, code, message, data } = await listService({
    ...req.query,
  });

  if (Object.keys(data).length > 0) {
    return res.status(code).json({ code, status, message, data });
  }
  res.status(code).json({ code, status, message });
};

// detailed
exports.detail = async (req, res) => {
  const { status, code, message, data } = await detailService({
    ...req.params,
  });

  if (Object.keys(data).length > 0) {
    return res.status(code).json({ code, status, message, data });
  }
  res.status(code).json({ code, status, message });
};
