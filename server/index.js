const express = require("express");

const collectionRoutes = require("./routes/collectionRoutes");
const nftRoutes = require("./routes/nftRoutes");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const staticPath = path.join(__dirname, "../client/dist");

const app = express();
const PORT = process.env.PORT;

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1/collections", collectionRoutes);
app.use("/api/v1/nfts", nftRoutes);
app.use("/api/v1/mail_col", require("./routes/mailCollection"));

app.get("*", (req, res) => {
  res.sendFile
  (path.join(staticPath, "index.html"));
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
