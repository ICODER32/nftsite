const express = require("express");
const { google } = require("googleapis");
const credentials = require("../utils/service");
const fs = require("fs");
const router = express.Router();
const path = require("path");

const servicefile = path.join(__dirname, "../utils/service.json");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const CREDENTIALS = credentials;


const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

const sheets = google.sheets({ version: "v4", auth });

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  const spreadsheetId = "1rc4A_YwjUiRawpwUkAE_CRrk1TOwuQnK31jYJhCfxP8"; // Replace with your spreadsheet ID
  const range = "Sheet1!A:A"; // Adjust the range as needed

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[email]],
      },
    });

    res.status(200).send("Email subscribed successfully");
  } catch (error) {
    console.error("Error updating the sheet:", error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
