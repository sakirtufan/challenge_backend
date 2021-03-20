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
    author: "sakir tufan",
    message: "Codding Challenge...",
  });
});

app.use("/products", productRoutes);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URL || "mongodb://localhost/coddingChannel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
  })
  .catch((err) => {
    console.error(err.message);
  });
