// Next
import { NextPage } from "next";
import Link from "next/link";
// React
import { ReactNode, useEffect } from "react";
// Solana SDK
import { useWallet } from "@solana/wallet-adapter-react";
// Components
import Wallet from "@/components/wallet";
// Utils
import { api } from "@/utils/api";

const Layout = ({ children }: { children: ReactNode }) => {
  const { publicKey } = useWallet();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-white">
      <div className="flex h-20 w-full items-center justify-between border-b border-[#111] px-8 font-tt text-3xl">
        DEAN&apos;S LIST
      </div>
      {!publicKey ? (
        <div className="flex w-full flex-grow items-center justify-center">
          <Wallet />
        </div>
      ) : (
        <div className="flex w-full flex-grow justify-center">{children}</div>
      )}
    </div>
  );
};

export default Layout;
