import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const response = await fetch(process.env.THIRD_PARTY_API, {
      headers: {
        "x-api-key": process.env.SECRET_API_KEY,
      },
    });

    const data = await response.json();

    res.json({
      status: "success",
      count: data.products.length,
      products: data.products,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
