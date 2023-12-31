const bcrypt = require('bcrypt');

/** @type {typeof import('sequelize').Model} */
const user = require('../../models').user;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const userSignup = async (req, res) => {
  /** 
   * @type {{
   * fullname:string, 
   * phoneNumber:string,
   * email:string, 
   * is_verified:boolean,
   * password:string,
   * role:string
   * }} 
   */
  const data = {...req.body, role:"U"};

  try {
    // hashing password
    data.password = await bcrypt.hash(data.password,10);

    // insert data
    await user.create(data);
    res.status(200).json({message: "signup successfully"});
  } catch (e) {
    // console.log(e);
    if(e.errors) res.status(400).json({message : e.errors[0].message, error : e.original.sqlMessage});
    else res.status(500).json({message : "internal server error", error: e.original.sqlMessage})
  }
}

module.exports = {userSignup}