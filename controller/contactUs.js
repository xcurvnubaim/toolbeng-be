/** @type {typeof import('sequelize').Model} */
const contactUs = require('../models').contact_us

const createContactUs = async (req, res) => {
  const data = req.body;
  try {
    const result = await contactUs.create(data);
    res.status(200).json({message: "Create contact us success", result});
  } catch (e) { 
    console.log(e);
    res.status(500).json({message: "Create contact us failed"})
  }
}

module.exports = {createContactUs}