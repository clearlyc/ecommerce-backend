const jwt = require("jsonwebtoken")
const User = require("../models/User");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  try {
    const user = await User.findOne({where:{email: req.body.email}})

    if(!user) return res.json({msg: "Invalid credentials"})
    const match = await bcrypt.compare( req.body.password, user.password)
    if(!match) return res.json({msg: "Invalid credentials"})
    const token = jwt.sign({sub: user.id}, process.env.JWT_SECRET)
    return res.status(200).json({token, user})
  } catch (err) {
    console.error(err)
    res.json(err)
  }
}

module.exports = {
  login,
};
