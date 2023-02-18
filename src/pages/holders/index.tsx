// React
import { useState, useEffect } from "react";
// Solana SDK
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
// Components
import Layout from "@/components/dashboard/Layout";
import Spinner from "@/components/spinner/Spinner";
import GatedExample from "@/components/gated-example";
// Utils
import { fetchBalances } from "@/utils/holders.utils";
// Types
import type { NextPage } from "next";
import { HolderEnum } from "@/utils/types/types.utils";

const tokenPublicKey: PublicKey = new PublicKey(
  "FMzPfHa9rpbhtZrYriyF4k8EhZNzAyWWjFMvSKcdDiwt"
);

const Holders: NextPage = () => {
  // Solana
  const wallet = useWallet();
  const { connection } = useConnection();
  // States
  const [loading, setLoading] = useState(true);
  const [holder, setHolder] = useState<HolderEnum>(HolderEnum.Undefined);

  useEffect(() => {
    if (wallet.publicKey) {
      //   console.log(wallet.publicKey.toBase58());
      checkHoldings({
        ownerAddress: wallet.publicKey,
        tokenAddress: tokenPublicKey,
      })
        .then((res) => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [wallet.publicKey, connection, holder]);

  async function checkHoldings({
    ownerAddress,
  }: {
    ownerAddress: PublicKey;
    tokenAddress: PublicKey;
  }) {
    await fetchBalances({ ownerAddress, tokenPublicKey }).then((res) => {
      if (res == HolderEnum.Holder) {
        console.log("we did it !");
        setHolder(HolderEnum.Holder);
      } else if (res == HolderEnum.NonHolder) {
        setHolder(HolderEnum.NonHolder);
      } else if (res == HolderEnum.Undefined) {
        setHolder(HolderEnum.Undefined);
      }
    });
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="relative top-0">
          <h1>Holders</h1>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {holder == HolderEnum.Undefined ? (
              <div className="md:hero mx-auto p-4">
                <WalletMultiButton className="btn z-[999] mx-2" />
              </div>
            ) : holder == HolderEnum.Holder ? (
              <div className="md:hero mx-auto p-4">
                <GatedExample />
              </div>
            ) : holder == HolderEnum.NonHolder ? (
              <div className="md:hero mx-auto p-4">
                <p>You don&apos;t hodl any $DEAN 😔</p>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Holders;
