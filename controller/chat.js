/** @type {typeof import('sequelize').Model} */
const Chat = require("../models").chat;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getChat = async (req, res) => {
  const order_id = req.params.orderId;

  const data = await Chat.findAll({
    attributes: ["message", "sendByCust"],
    where: { order_id },
  });

  res.json({ message: "Get Chat Success", data });
};

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const createChat = async (req, res) => {
  const data = req.body;
  try {
    const result = await Chat.create(data);
    res.status(200).json({ message: "Send chat success", result });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "send chat failed" });
  }
};

module.exports = { getChat, createChat };
