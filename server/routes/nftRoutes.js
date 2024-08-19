const express = require("express");
const {
  getNfts,
  getNftPriceController,
} = require("../controllers/nft.controller");

const router = express.Router();
router.get("/get-nfts", getNfts);
router.get("/get-nft/:id", getNftPriceController);
module.exports = router;
