const express = require("express");
const { getCollections } = require("../controllers/characters");

const router = express.Router();

router.get("/get-collections", getCollections);

module.exports = router;
