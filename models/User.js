
import mongoose from "mongoose";
import inc from 'mongoose-sequence';
const autoIncrement = inc(mongoose);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(autoIncrement, { inc_field: "userId" });
export default mongoose.model("User", userSchema);
