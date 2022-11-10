const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      "Please Enter mail",
    ],
  },
  dateofentry: {
    type: Date,
    default: Date.now(),
  },
  roles: [
    {
      type: String,
    },
  ],
  versionKey: Number,
});

module.exports = mongoose.model("User", UserSchema);
