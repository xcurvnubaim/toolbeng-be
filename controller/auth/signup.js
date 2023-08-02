const bcrypt = require('bcrypt');

/** @type {typeof import('sequelize').Model} */
const user = require('../../models').user;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const userSignup = async (req, res) => {
  /** 
   * @type {{
   * username:string, 
   * phoneNumber:string,
   * email:string, 
   * is_verified:boolean,
   * password:string, 
   * role:string
   * fullname:string, 
   * }} 
   */
  const data = req.body;

  // hashing password
  const hashedPass = await bcrypt.hash(data.password,10);

  data.password = hashedPass;

  try {
    await user.create(data);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    if(e.errors) res.status(400).send(e.errors[0].message);
    else res.status(500).send(e)
  }
}

module.exports = {userSignup}