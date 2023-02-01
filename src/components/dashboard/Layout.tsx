import Wallet from "@/components/wallet";
import { useWallet } from "@solana/wallet-adapter-react";
import { api } from "@/utils/api";
import { NextPage } from "next";
import { ReactNode, useEffect } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  const { publicKey } = useWallet();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-white">
      <div className="flex h-20 w-full items-center justify-between border-b border-[#111] px-8 font-tt text-3xl">
        DEAN&apos;S LIST
        <Link href="/dashboard/create">
          <button className="font-font-space h-10 rounded bg-white px-5 text-lg font-bold text-black">
            create
          </button>
        </Link>
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
