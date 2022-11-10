const User = require("./modals/User");
const bycrypt = require("bcrypt");

async function insert(user) {
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;

  console.log("Saving user to db");

  return await new User(user).save();
}
module.exports = { insert };
