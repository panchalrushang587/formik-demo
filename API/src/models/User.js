const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  userType: { type: String, required: true },
  permissions: {
    type: [String],
    required: function () {
      return this.userType !== "Admin";
    },
  },
});

module.exports = mongoose.model("User", UserSchema);
