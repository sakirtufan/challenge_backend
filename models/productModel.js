import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    image: String,    
    tag: Number,
    createdAt: { type: Date, default: new Date(), },
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
