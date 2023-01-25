import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";

// import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'
import transactionRoutes from './routes/transactions.js'

const app = express()

const connect = () => {
  mongoose.connect("mongodb+srv://irfanzafar:irfanzafar@cluster0.tmmsx79.mongodb.net/transaction?retryWrites=true&w=majority").then(() => {
    console.log('connected to database!')
  }).catch(err => {
    throw err
  })
}
app.use(cors());

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/transaction", transactionRoutes)

app.listen(8800, () => {
  connect()
  console.log("connected to server!")
})
