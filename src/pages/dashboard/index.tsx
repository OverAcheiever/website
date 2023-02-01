import Wallet from "@/components/wallet";
import { useWallet } from "@solana/wallet-adapter-react";
import { api } from "@/utils/api";
import { NextPage } from "next";
import { useEffect } from "react";
import Layout from "@/components/dashboard/Layout";

const Dashboard: NextPage = () => {
  const { publicKey } = useWallet();

  const { data, mutate } = api.client.getProjects.useMutation();

  console.log(data);

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
        <div className="grid grid-cols-3 gap-5 px-5 pt-12">
          {data
            ? data.projects.map((project, key) => (
                <div
                  key={key}
                  className="flex h-48 w-full cursor-pointer flex-col justify-between rounded-xl border-2 border-[#222] px-5 pt-6 pb-5 font-space transition-all  hover:border-[#333]"
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
              ))
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
