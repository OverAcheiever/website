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
  }, [publicKey]);

  return (
    <Layout>
      <div className="w-full max-w-screen-xl">
        <div className="grid grid-cols-3 gap-x-5 px-5 pt-12">
          {data
            ? data.projects.map((project, key) => (
                <div
                  key={key}
                  className="h-48 w-full cursor-pointer rounded-xl border-2 border-[#222] px-5"
                >
                  <div className="pl-2 pt-6 font-space text-2xl font-bold">
                    {project.name}
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
