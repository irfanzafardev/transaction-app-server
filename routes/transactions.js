import express from "express";
import { createNewTransaction } from "../controllers/transaction.js";


const router = express.Router();
router.post("/create", createNewTransaction)



export default router;