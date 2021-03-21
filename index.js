import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productsRoutes.js";


dotenv.config();
const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.json({
    author: "Sakir Tufan",
    message: "Codding Challenge Backend...",
  });
});

app.use("/products", productRoutes);


mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
  })
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server running on port: ${process.env.PORT || 8000} `)
    );
  })
  .catch((err) => {
    console.error(err.message);
  });
