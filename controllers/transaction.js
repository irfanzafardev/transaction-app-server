import mongoose from "mongoose";
import Transaction from "../models/Transaction.js"

export const createNewTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body)
    await newTransaction.save()
    return res
      .status(200)
      .send({ message: "Transaction has been created!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}