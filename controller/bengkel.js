/** @type {typeof import('sequelize').Model} */
const Bengkel = require('../models').bengkel;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getBengkel = async (req, res) => {
  
  try {

    const result = await Bengkel.findAll(
      {
        where:{
          isOpen:true
        }
      }
    )
    res.status(201).json({ message: 'Get Bengkel successfully', result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/** @type {typeof import('sequelize').Model} */
const User = require('../models').user;
/** Function to create bengkel data
 * @type {(req: import('express').Request, res: import('express').Response)=>void} 
 */
const createBengkel = async (req, res) => {
  /**
   * @type {{
   *  name: String,
   *  address: String,
   *  user_id: Number,
   *  isOpen: Boolean,
   *  latitude: Number,
   *  longitude: Number
   * }}
   */
  const data = req.body;
  try {
    const updateRoleUser = User.update({role:'b'}, {where: {id: data.user_id}});
    const createData = Bengkel.create(data);
    const result = Promise.all([updateRoleUser,createData]);
    res.status(201).json({ message: 'Create Bengkel successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getBengkel, createBengkel
};
