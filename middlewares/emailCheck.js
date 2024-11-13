// const { User } = require("../models");

// async function emailCheck(req, res, next) {
//   const user = await User.findOne({ where: { email: req.body.email } });
//   if (user != null) {
//     req.user = user;
    
//     return next();
//   } else {
//     return res.json("Wrong credentials");
//   }
// }

// module.exports = emailCheck;
