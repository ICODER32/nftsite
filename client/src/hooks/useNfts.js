import { useState } from "react";

export default function useNfts() {
  const [nfts, setNFTs] = useState([
    {
      identifier: "6",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Sly",
      description:
        "Sly is the confident and witty member of Roohool Rascals. With his striking green mane and cool demeanor, Sly is known for his quick comebacks and clever ideas. He's the strategist who always stays one step ahead.",
      image_url:
        "https://ipfs.io/ipfs/bafybeielbfhssvq3fvgppoxgfcv4ptewkp6x4k4bzrrah2upy5clphjreu/6",
      display_image_url:
        "https://i.seadn.io/s/raw/files/386a3839c6565c74c04ce682aaaac336.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/6",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/6",
      updated_at: "2024-05-22T12:26:10.584081",
      is_disabled: false,
      is_nsfw: false,
    },
    {
      identifier: "5",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Swagger",
      description:
        "Swagger is the stylish and trendy member of the Roohool Rascals. With his elegant posture and a hint of flair, Swagger knows how to turn heads and make a statement. He's always on point with his fashion and style.",
      image_url:
        "https://ipfs.io/ipfs/bafybeidlshdvmdoholvt26q3h4j66eh3l4rnhp3agzlu5h3g2s3ux3cl3i/5",
      display_image_url:
        "https://i.seadn.io/s/raw/files/b57aee50590d5bf046bc5f2ebc10d67c.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/5",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/5",
      updated_at: "2024-05-22T12:26:10.962933",
      is_disabled: false,
      is_nsfw: false,
    },
    {
      identifier: "4",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Jigsaw",
      description:
        "Jigsaw is the brainiac of the group, always thinking outside the box. With puzzle pieces adorning his body, Jigsaw's sharp mind and clever strategies help the Roohool Rascals navigate through any complex situation they face.",
      image_url:
        "https://ipfs.io/ipfs/bafybeigq67pmpxomrkxokzi272fespwacjrqswd3miabw7preevdk5tufy/4",
      display_image_url:
        "https://i.seadn.io/s/raw/files/16a7da1d87c588939ca43ccb6395174a.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/4",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/4",
      updated_at: "2024-05-22T12:26:10.839066",
      is_disabled: false,
      is_nsfw: false,
    },
    {
      identifier: "3",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Buff",
      description:
        "Buff is the strong and dependable powerhouse of the Roohool Rascals. With his impressive physique and unwavering determination, Buff is always ready to protect his friends and take on any physical challenge that comes their way.",
      image_url:
        "https://ipfs.io/ipfs/bafybeieigll55btdxfm4dm3apxve34r7aimlqgjra47up6clbmhr3ohoie/3",
      display_image_url:
        "https://i.seadn.io/s/raw/files/891496d4f3de5306db92dafd68f1da2c.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/3",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/3",
      updated_at: "2024-05-22T12:26:10.816220",
      is_disabled: false,
      is_nsfw: false,
    },
    {
      identifier: "2",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Groovy",
      description:
        "Groovy is the fun-loving, energetic member of the Roohool Rascals. His wild green mane and expressive face make him the life of the party.\nGroovy's infectious laughter and positive vibes keep the group's spirits high.",
      image_url:
        "https://ipfs.io/ipfs/bafybeibzjx7yeeq37cwvppssu57ry7nh3zgauql6ai3cenm54gnqup55ay/2",
      display_image_url:
        "https://i.seadn.io/s/raw/files/3a2f71cf9be1577a3c2cfb5f9e1dbbdf.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/2",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/2",
      updated_at: "2024-05-22T12:26:10.775697",
      is_disabled: false,
      is_nsfw: false,
    },
    {
      identifier: "1",
      collection: "roohoof-rascals",
      contract: "0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2",
      token_standard: "erc1155",
      name: "Blaze",
      description:
        "Blaze is the fiery leader of the Roohool Rascals. With a mane that resembles flames and a grin that lights up any room, Blaze is always ready to take on challenges and lead the pack with confidence and charisma",
      image_url:
        "https://ipfs.io/ipfs/bafybeigifholpqgm6qeav4bhvtjyd7qxhc3anjj3mv27bs574ydduhuh3e/1",
      display_image_url:
        "https://i.seadn.io/s/raw/files/6b2e610bb2bc945128c31bd200b796b6.jpg?w=500&auto=format",
      display_animation_url: null,
      metadata_url:
        "https://ipfs.io/ipfs/bafybeiflpvcaatmegss25mywlkvtaqbdrqslfbnkqiwwe7vqmiifilq3xu/1",
      opensea_url:
        "https://opensea.io/assets/ethereum/0x2a7b95e9b91c6840227ed16617b9c7c7977ae5f2/1",
      updated_at: "2024-05-22T12:26:10.892777",
      is_disabled: false,
      is_nsfw: false,
    },
  ]);

  return { nfts };
}
