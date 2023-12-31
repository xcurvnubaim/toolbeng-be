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
    const data = { ...req.body, user_id: req.user.id, status: "Pending" };

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
        attributes: [
          "id",
          "location",
          "customer_latitude",
          "customer_longitude",
          "category",
          "tipe_kendaraan",
          "nomor_polisi",
          "kondisi",
          "keterangan",
          "ban_bocor",
          "status",
          "createdAt",
        ],
        include: {
          model: bengkel,
          required: true,
          attributes: ["name", "address", "latitude", "longitude"],
        },
        where: { user_id: req.user.id },
      });
      if (result.length) res.status(200).json({ result });
      else res.status(404).json({ message: "order not found" });
    } else if (req.user.role == "B") {
      const result = await Order.findAll({
        attributes: [
          "id",
          "location",
          "customer_latitude",
          "customer_longitude",
          "category",
          "tipe_kendaraan",
          "nomor_polisi",
          "kondisi",
          "keterangan",
          "ban_bocor",
          "status",
          "createdAt",
        ],
        include: {
          model: user,
          required: true,
          attributes: ["fullname", "phonenumber", "email"],
        },
        where: { bengkel_id: req.user.bengkel_id },
        order: [["id", "DESC"]],
      });
      if (result.length) res.status(200).json({ result });
      else res.status(404).json({ message: "order not found" });
    } else res.sendStatus(400);
  } catch (error) {
    console.log(error);
  }
};

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getOrderById = async (req, res) => {
  try {
    const result = await Order.findOne({
      attributes: [
        "id",
        "location",
        "customer_latitude",
        "customer_longitude",
        "category",
        "tipe_kendaraan",
        "nomor_polisi",
        "kondisi",
        "keterangan",
        "ban_bocor",
        "status",
        "createdAt",
      ],
      include: [
        {
          model: user,
          required: true,
          attributes: ["fullname", "phonenumber", "email"],
        },
        {
          model: bengkel,
          required: true,
          attributes: ["name", "address"],
        }
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Get Order successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

const updateStatusOrder = async (req, res) => {
  try {
    await user.update(
      { status: req.body.status },
      {
        where: {
          id: req.user.id,
        },
      }
    );
    res.status(200).json({ message: "Update user data success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Update user data failed" });
  }
};

module.exports = {
  createOrder,
  getOrder,
  getOrderById
};
