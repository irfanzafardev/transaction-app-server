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

export const getAllProduct = async (req, res) => {
  try {
    const productData = await Product.find();
    const allProducts = productData.map((data) => {
      return {
        id: data._id,
        product_name: data.product_name,
        category: data.category,
        price: data.price,
      };
    });

    res.status(200).send(allProducts)
  } catch (error) {
    console.log(error)
  }
}