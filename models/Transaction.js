import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  transaction_date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Transaction", TransactionSchema);
