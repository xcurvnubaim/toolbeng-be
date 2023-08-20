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
  const data = {...req.body, is_verified:false, role:'U'};

  try {
    // hashing password
    data.password = await bcrypt.hash(data.password,10);

    // insert data
    await user.create(data);
    res.status(200).json({message: "signup successfully"});
  } catch (e) {
    console.log(e);
    if(e.errors) res.status(400).json({error : e.errors[0].message});
    else res.status(500).json({error : e})
  }
}

module.exports = {userSignup}