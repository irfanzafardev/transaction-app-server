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

export const getAllTransaction = async (req, res) => {
  try {
    const transactiontData = await Transaction.find();
    const allTransaction = transactiontData.map((data) => {
      return {
        id: data._id,
        userId: data.user_id,
        quantity: data.quantity,
        transactionDate: data.transaction_date,
      };
    });

    res.status(200).send(allTransaction)
  } catch (error) {
    console.log(error)
  }
}