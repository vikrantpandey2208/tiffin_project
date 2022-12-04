const mongoose = require("mongoose");
const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("UserSession", UserSessionSchema);
