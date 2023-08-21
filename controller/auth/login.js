const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** @type {typeof import('sequelize').Model} */
const user = require("../../models").user;
const bengkel = require("../../models").bengkel;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await user.findOne({
      attributes: ["id", "role", "password"],
      include: [
        {
          model: bengkel,
          attributes: ["id"],
        },
      ],
      where: {
        email,
      },
    });
    console.log(result.dataValues);
    if (result != null) {
      if (await bcrypt.compare(password, result.dataValues.password)) {
        const tokenData = {
          id: result.dataValues.id,
          role: result.dataValues.role,
          bengkel_id: result.dataValues.bengkel?.id,
        };
        const token = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "7d",
        });
        res.status(200).json({ tokenData, token });
      } else {
        res.status(401).json({ error: "Wrong password" });
      }
    } else {
      res.status(401).json({ error: "email not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userLogin };
