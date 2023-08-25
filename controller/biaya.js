/** @type {typeof import('sequelize').Model} */
const Biaya = require("../models").biaya_detail;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getBiaya = async (req, res) => {
  const order_id = req.params.orderId;

  const data = await Biaya.findAll({
    attributes: ["item", "price"],
    where: { order_id },
  });

  res.json({ message: "Get Biaya Detail Success", data });
};

module.exports = {getBiaya};