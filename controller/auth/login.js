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
    if (result != null) {
      if (await bcrypt.compare(password, result.password)) {
        const tokenData = {
          id: result.id,
          role: result.role,
          bengkel_id: result.bengkel?.id,
        };
        const MAX_AGE = 7 * 24 * 3600 * 1000;
        const token = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: MAX_AGE,
        });
        res
          .cookie("jwt-access", token, {
            maxAge: MAX_AGE,
            // secure: true,
            sameSite: "none",
            httpOnly: true,
          })
          .status(200)
          .json({ tokenData });
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
