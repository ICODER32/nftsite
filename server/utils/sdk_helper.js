const sdk = require("@api/opensea");
const dotenv = require("dotenv");
dotenv.config();
sdk.auth(process.env.OPENSEA_API_KEY);
sdk.server("https://api.opensea.io");

const getOurCollections = async () => {
  try {
    const collections = await sdk.list_collections({
      chain: "ethereum",
      creator_username: "Roohoof-Rascals",
    });

    return collections;
  } catch (error) {
    throw new Error(error);
  }
};
const getOurNfts = async () => {
  try {
    const nfts = await sdk.list_nfts_by_collection({
      collection_slug: "roohoof-rascals",
    });

    return nfts;
  } catch (error) {
    throw new Error(error);
  }
};

const getNftPrice = async (id) => {

  try {
    const result = await sdk.get_best_listing_on_nft_v2({
      collection_slug: "roohoof-rascals",
      identifier: id,
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  getOurCollections,
  getOurNfts,
  getNftPrice,
};
