/** @type {typeof import('sequelize').Model} */
const Order = require('../models').order;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const createOrder = async (req, res) => {
  
  try {
    /**
    * @type {{
    *  user_id: Number,
    *  bengkel_id: Number,
    *  location: String,
    *  customer_latitude: Number,
    *  customer_longitude: Number,
    *  categery: Boolean,
    *  tipe_kendaraan: String,
    *  nomor_polisi: String,
    *  kondisi: String,
    *  keterangan: String,
    *  ban_bocor: Boolean,
    *  status: String
    * }}
    */
    const data = req.body;

    const result = await Order.create(data);

    res.status(201).json({ message: 'Bengkel chosen successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createOrder,
};
