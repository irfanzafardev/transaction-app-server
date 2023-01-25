import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
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
