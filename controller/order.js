/** @type {typeof import('sequelize').Model} */
const Order = require("../models").order;
const { user, bengkel } = require("../models");

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const createOrder = async (req, res) => {
  try {
    /**
     * data from request body
     * @type {{
     *  user_id: Number,
     *  bengkel_id: Number,
     *  location: String,
     *  customer_latitude: Number,
     *  customer_longitude: Number,
     *  category: Boolean,
     *  tipe_kendaraan: String,
     *  nomor_polisi: String,
     *  kondisi: String,
     *  keterangan: String,
     *  ban_bocor: Boolean,
     *  status: String
     * }}
     */
    // const data = { ...req.body, user_id: req.user.id, status: "Pending" };
    const data = { ...req.body, status: "Pending" };


    const result = await Order.create(data);

    res.status(201).json({ message: "Bengkel chosen successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getOrder = async (req, res) => {
  try {
    if (req.user.role == "U") {
      const result = await Order.findAll({
        attributes: ['location', 'customer_latitude', 'customer_longitude',
                      'category', 'tipe_kendaraan', 'nomor_polisi', 'kondisi', 'keterangan',
                      'ban_bocor', 'status', 'createdAt'],
        include: {
          model: bengkel,
          required: true,
          attributes: ['name', 'address', 'latitude', 'longitude']
        },
        where: { user_id: req.user.id },
      });
      if (result.length) res.status(200).json({ result });
      else res.status(404).json({ message: "order not found" });
    } else if (req.user.role == "B") {
      const result = await Order.findAll({
        attributes: ['location', 'customer_latitude', 'customer_longitude',
                      'category', 'tipe_kendaraan', 'nomor_polisi', 'kondisi', 'keterangan',
                      'ban_bocor', 'status', 'createdAt'],
        include: {
          model: user,
          required: true,
          attributes: ['fullname', 'phonenumber', 'email']
        }, 
        where: { bengkel_id: req.user.bengkel_id },
      });
      if (result.length) res.status(200).json({ result });
      else res.status(404).json({ message: "order not found" });
    } 
    else res.sendStatus(400);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrder,
  getOrder,
};
