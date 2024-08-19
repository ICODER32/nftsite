const { getOurCollections } = require("../utils/sdk_helper");

const getCollections = async (req, res) => {
  try {
    const collections = await getOurCollections();

    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCollections,
};
