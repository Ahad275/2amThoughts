//authController.js
const jwt = require("jsonwebtoken");
const { expressjwt: expressjwt } = require("express-jwt");


exports.login = (req, res) => {
  //data of username, password
  const { username, password } = req.body;
  if (password === process.env.PASSWORD) {
    //Login
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({
      token,
      username,
    });
  } else {
    return res.status(400).json({
      error: "Invalid Password!",
    });
  }
};

// Token  validation
exports.requireLogin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
