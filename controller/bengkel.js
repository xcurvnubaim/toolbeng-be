
/** @type {typeof import('sequelize').Model} */
const order = require('../../models').order;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const chooseBengkel = async (req, res) => {
  
  try {
    const { user_id, bengkel_id, latitude, longitude, additional_info, biaya } = req.body;

    const order = await Order.create({
      user_id,
      bengkel_id,
      latitude,
      longitude,
      additional_info,
      biaya,
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
