const { sequelize } = require("../models");

/** @type {typeof import('sequelize').Model} */
const bengkel = require("../models").bengkel;
const user = require("../models").user;

/** @type {(req: import('express').Request, res: import('express').Response)=>void} */
const getBengkel = async (req, res) => {
  try {
    const result = await bengkel.findAll({
      attributes: ["id","name", "address", "latitude", "longitude"],
      include: [
        {
          model: user,
          required: true,
          attributes: ["fullname", "phonenumber"],
        },
      ],
      where: {
        isOpen: true,
      },
    });
    res.status(201).json({ message: "Get Bengkel successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

/** @type {typeof import('sequelize').Model} */
const User = require("../models").user;
/** Function to create bengkel data
 * @type {(req: import('express').Request, res: import('express').Response)=>void}
 */
const createBengkel = async (req, res) => {
  /**
   * @type {{
   *  name: String,
   *  address: String,
   *  user_id: Number,
   *  isOpen: Boolean,
   *  latitude: Number,
   *  longitude: Number
   * }}
   */
  const data = req.body;
  const t = await sequelize.transaction();
  try {
    const updateRoleUser = await User.update(
      { role: "B" },
      { where: { id: data.user_id }, transaction: t }
    );
    console.log(updateRoleUser);

    const createDataBengkel = await bengkel.create(data, { transaction: t });
    console.log(createDataBengkel);
    await t.commit();
    res.status(201).json({ message: "Create Bengkel successfully" });
  } catch (error) {
    await t.rollback();
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  getBengkel,
  createBengkel,
};
