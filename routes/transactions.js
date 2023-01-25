import express from "express";
import { createNewTransaction, getAllTransaction } from "../controllers/transaction.js";

const router = express.Router();

router.post("/create", createNewTransaction)
router.get("/", getAllTransaction)



export default router;