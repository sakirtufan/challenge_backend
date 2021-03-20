import express from "express";
import {
  getProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
