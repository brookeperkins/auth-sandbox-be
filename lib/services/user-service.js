const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signUp = async({ email, password }) => {
  const passwordHash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

  return User.insert({
    email, 
    passwordHash
  });
};

const authToken = user => {
  const token = jwt.sign({
    payload: user.toJSON()
  }, process.env.APP_SECRET, {
    expiresIn: '24h'
  });

  return token;
};

module.exports = {
  signUp,
  authToken
};
