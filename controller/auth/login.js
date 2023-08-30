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
      attributes: ["id", "role", "password", "fullname"],
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
    if (result != null) {
      if (await bcrypt.compare(password, result.password)) {
        const tokenData = {
          id: result.id,
          role: result.role,
          name: result.fullname,
          bengkel_id: result.bengkel?.id,
        };
        const MAX_AGE = 7 * 24 * 3600 * 1000;
        const token = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: MAX_AGE,
        });
        res
          .status(200)
          .json({message:"Login Credentials success", result: {...tokenData, token} });
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
