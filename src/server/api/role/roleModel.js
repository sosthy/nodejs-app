import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: { type: String },
  authorities: [{ type: String }],
  description: { type: String },
});

export default mongoose.model("role", RoleSchema);
