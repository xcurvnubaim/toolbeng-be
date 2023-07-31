const bcrypt = require('bcrypt');

/** @type {typeof import('sequelize').Model} */
const user = require('../../models').User;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const userSignup = async (req, res) => {
  /** @type {{username:string, password:string, fullname:string, email:string, roles:string}} */
  const data = req.body;
  console.log(data);

  // hashing password
  const hashedPass = await bcrypt.hash(data.password,10);

  data.password = hashedPass;

  try {
    await user.create(data);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
}

module.exports = {userSignup}