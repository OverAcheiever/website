import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

import { HolderEnum } from "./types/types.utils";

export const fetchBalances = async ({
  ownerAddress,
  tokenPublicKey,
}: {
  ownerAddress: PublicKey;
  tokenPublicKey: PublicKey;
}): Promise<HolderEnum> => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const ownerPublicKey = new PublicKey(ownerAddress);

  // Fetch the balance of a single token
  const balance = await connection.getParsedTokenAccountsByOwner(
    ownerPublicKey,
    {
      mint: tokenPublicKey,
    }
  );
  // Debugging console.log
  console.log(balance);

  // if user hold at least 1 token, return HolderEnum.Holder
  if (balance.value.length == 1) {
    return HolderEnum.Holder;
    // if user hold at least 1 token, return HolderEnum.NonHolder
  } else if (balance.value.length == 0) {
    return HolderEnum.NonHolder;
  } else {
    return HolderEnum.Undefined;
  }
};
