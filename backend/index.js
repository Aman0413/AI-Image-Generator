const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

const apiKey =
  "key-41RgojpeqZ3RKYeIHeJ1cUJnLeOQxO37aj6itXz8JySwwRxkMvUAIUFHbWOuYWiAnhO15RvmNWHCHjNa4YeLWzkWkRfj7FO0";

app.post("/api/genimage", async (req, res) => {
  try {
    const { prompt } = req.body;
    const url = "https://api.getimg.ai/v1/stable-diffusion/text-to-image";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt,
        steps: 20,
        seed: 2,
        height: 512,
        width: 512,
        output_format: "jpeg",
        model: "stable-diffusion-v1-5",
      }),
    };

    fetch(url, options)
      .then((res) => res.json(res))
      .then((json) => res.json(json))
      .catch((err) => res.json("error:" + err));
  } catch (error) {
    console.error("Error making API request", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
