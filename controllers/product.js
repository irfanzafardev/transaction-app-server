import mongoose from "mongoose";
import Product from "../models/Product.js"
export const createNewProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(200).send("Product has been created!")
  } catch (error) {

  }
}