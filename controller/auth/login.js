const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

/** @type {typeof import('sequelize').Model} */
const user = require("../../models").User;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const userLogin = async (req, res) => {
  /** @type {{usernameOrEmail:string|null, password:string}} */
  const data = req.body;
  console.log(data);
  try {
    const result = await user.findOne({
      attributes: ["password"], 
      where: {
        [Op.or] : [
          {username: data.usernameOrEmail},
          {email: data.usernameOrEmail}
        ]
      } 
    });
    if(result != null){
      const hashedPass = result.dataValues.password;
      if(await bcrypt.compare(data.password, hashedPass)){
        res.status(200).send();
      } else {
        res.status(400).send("wrong password");
      }
    } else {
      res.status(400).send("username/email not found")
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = { userLogin };
