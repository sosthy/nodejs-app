import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // don't store the password as plain text
  password: {
    type: String,
    required: true,
  },
  address: {
    state: String,
  },
  photo: { type: String },
  role: { type: Schema.Types.ObjectId, required: true, ref: "role" },
  lang: { type: String, required: true },
});

// middleware that will run before a document is created
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = this.encryptPassword(this.password);
  next();
});

UserSchema.methods = {
  // check the passwords on signin
  authenticate: function (plainTextPword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },

  // hash the passwords
  encryptPassword: function (plainTextPword) {
    if (!plainTextPword) {
      return "";
    } else {
      let salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
  },

  toJson: function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
  },
};

export default mongoose.model("user", UserSchema);
