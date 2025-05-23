import express from "express";
import { getProducts, updateProduct, createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

export default router;

router.get("/", getProducts)

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);