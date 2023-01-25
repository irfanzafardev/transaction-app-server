import express from "express";
import { createNewProduct } from "../controllers/product.js";


const router = express.Router();
router.post("/create", createNewProduct)



export default router;