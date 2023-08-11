
/** @type {typeof import('sequelize').Model} */
const Order = require('../../models').order;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const chooseBengkel = async (req, res) => {
  
  try {
    const { user_id, bengkel_id } = req.body;

    const order = await Order.create({
      user_id,
      bengkel_id,
      additional_info,
      // ada lagikah? 
    });

    res.status(201).json({ message: 'Bengkel chosen successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  chooseBengkel,
};
