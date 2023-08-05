const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
      attributes: ["id", "username", "password"], 
      where: {
        [Op.or]: [
          { username: data.usernameOrEmail },
          { email: data.usernameOrEmail },
        ],
      },
    });
    if (result != null) {
      const hashedPass = result.dataValues.password;
      if (await bcrypt.compare(data.password, hashedPass)) {
        const tokenData = {
          id: result.dataValues.id,
          username: result.dataValues.username,
        };
        const token = jwt.sign(tokenData, "secret_key"); 
        res.status(200).json({ token }); 
      } else {
        res.status(401).json({ error: "Wrong password" });
      }
    } else {
      res.status(401).json({ error: "Username/email not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userLogin };