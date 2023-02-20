// React
import { useEffect } from "react";
// Api
import { api } from "@/utils/api";
// Solana SDK
import { useWallet } from "@solana/wallet-adapter-react";
// Components
import Layout from "@/components/dashboard/Layout";
import Wallet from "@/components/wallet";
import Spinner from "@/components/spinner/Spinner";

// Types
import type { NextPage } from "next";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const { publicKey } = useWallet();

  const { data, mutate } = api.client.getProjects.useMutation();

  useEffect(() => {
    if (publicKey && !data) {
      mutate({
        publicKey: publicKey.toBase58(),
      });
    }
  }, [publicKey, data, mutate]);

  return (
    <Layout>
      <div className="w-full max-w-screen-xl">
        <div className="pl-5 pt-10 font-tt text-4xl">FEEDBACK REQUESTS</div>
        {data ? (
          <div className="grid grid-cols-3 gap-5 px-5 pt-12">
            {data.projects.map((project, key) => {
              console.log(project, key);
              return (
                <div
                  key={key}
                  className="font-font-space flex h-48 w-full cursor-pointer flex-col justify-between rounded-xl border-2 border-[#222] px-5 pt-6 pb-5 transition-all  hover:border-[#333]"
                >
                  <div className="pl-2 text-2xl font-bold">{project.name}</div>
                  <div className="flex gap-x-3">
                    <div className="w-max rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black">
                      {project.package} PACKAGE
                    </div>
                    <div className="w-max rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black">
                      {project.status}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/dashboard/create">
              <div
                className="font-font-space flex h-48 w-full cursor-pointer flex-col items-center justify-center
             rounded-xl border-2 border-[#222] px-5 pt-10 pb-5 transition-all  hover:border-[#333]"
              >
                <PlusCircleIcon className="h-10 w-10" />
                <div className="mt-3 text-center font-space text-lg font-semibold ">
                  REQUEST <br /> FEEDBACK
                </div>
              </div>
            </Link>
          </div>
        ) : // TODO: impliment spinner
        null}
      </div>
    </Layout>
  );
};

export default Dashboard;
