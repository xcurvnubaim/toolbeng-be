/** @type {typeof import('sequelize').Model} */
const user = require("../models").user;
const { compare, hash } = require("bcrypt");

const changePassword = async (req, res) => {
  /**
   * @type {{
   *  currentPassword : string,
   *  newPassword : string
   * }}
   */
  const data = req.body;
  try {
    const {password} = await user.findOne({
      attributes: ["password"],
      where: {
        id: req.user.id,
      },
    });
    if(await compare(data.currentPassword,password )){
      await user.update({password: await hash(data.newPassword,10)}, {
        where: {
          id: req.user.id,
        },
      });
      res.status(200).json({ message: "Update user data success" });
    } else {
      res.status(401).json({ error: "Wrong password" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Update user data failed" });
  }
};

const changeProfile = async (req, res) => {
  const data = req.body;
  try {
    await user.update(data, {
      where: {
        id: req.user.id,
      },
    });
    res.status(200).json({ message: "Update user data success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Update user data failed" });
  }
};

module.exports = { changeProfile, changePassword };
