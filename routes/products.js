import express from "express";
import { createNewProduct, deleteProduct, getAllProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/create", createNewProduct)
router.get("/", getAllProduct)
router.delete("/:id", deleteProduct)



export default router;