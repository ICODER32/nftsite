const { getOurNfts, getNftPrice } = require("../utils/sdk_helper");

const getNfts = async (req, res) => {
  try {
    const nfts = await getOurNfts();

    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getNftPriceController = async (req, res) => {
  const { id } = req.params;

  try {
    const nftPrice = await getNftPrice(id);
    res.status(200).json(nftPrice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNfts,
  getNftPriceController,
};
