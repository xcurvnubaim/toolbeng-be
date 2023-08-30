/** @type {typeof import('sequelize').Model} */
const {user, bengkel} = require("../../models");

const jwt = require("jsonwebtoken");

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const gAuth = async (req, res) => {
  const data = req.body;
  const newUser = {
    external_type: "GOOGLE",
    external_id: data.id,
    fullname: data.name,
    role: "U",
  };
  let result = {};
  try {
    const isExist = await user.findOne({
      attributes: ["id", "role"],
      include: [
        {
          model: bengkel,
          attributes: ["id"],
        },
      ],
      where: {
        external_type: "GOOGLE",
        external_id: newUser.external_id,
      },
    });
    if (isExist) {
      result = {
        id: isExist.id,
        role: isExist.role,
      };
    } else {
      const res = await user.create(newUser);
      result = {
        id: res.id,
        name: res.fullname,
        role: res.role,
        bengkel_id: res.bengkel?.id,
      };
    }
    const MAX_AGE = 7 * 24 * 3600 * 1000;
    const token = jwt.sign(result, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: MAX_AGE,
    });
    res.status(200).json({ message: "success", result : {...result, token} });
  } catch (e) {
    console.log(e);
    if (e.errors) res.status(400).json({ error: e.errors[0].message });
    else res.status(500).json({ error: e });
  }
};

module.exports = { gAuth };
