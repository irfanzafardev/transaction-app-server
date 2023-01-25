import express from "express";
import { createNewProduct, getAllProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/create", createNewProduct)
router.get("/", getAllProduct)



export default router;