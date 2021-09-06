import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//Connect to the API and get missions data on the server
app.get("/missions", async (request, response) => {
  const API_URL =
    "https://www.haloapi.com/metadata/h5/metadata/campaign-missions";
  const API_KEY = process.env.API_KEY;
  const fetch_response = await fetch(API_URL, {
    headers: {
      "Ocp-Apim-Subscription-Key": API_KEY,
    },
  });
  const missions = await fetch_response.json();
  response.json(missions);
});
