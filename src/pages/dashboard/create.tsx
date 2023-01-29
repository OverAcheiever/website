/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Layout from "@/components/dashboard/Layout";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  getAssociatedTokenAddressSync,
  getMint,
  createTransferCheckedInstruction,
} from "@solana/spl-token";
import { connection, TREASURY_MINT, USDC_MINT } from "@/constants";
import { Transaction } from "@solana/web3.js";
import { toast } from "react-hot-toast";

const Create = () => {
  const perks: {
    name: string;
    description?: string;
  }[] = [
    {
      name: "Soladex.io Review",
    },
    {
      name: "Feedback",
      description:
        "Our signature review and feedback from our team of power users! 2 weeks of community deep diving united into one final document of improvements and feature requests to take your protocol to the next level",
    },
    {
      name: "Extended Feedback",
      description:
        "Extended Feedback for 3 months! Our users continue giving feedback and your team can expect high usage and responsiveness from our dedicated power user team",
    },
    {
      name: "AMA",
      description:
        "AMA with Whale's Friend. A one-on-one interview with Solana's OG influencer, delivered as a YouTube video for high visibility and easy-to-cut sections of interest for your marketing team",
    },
  ];

  const packages: {
    name: string;
    perks: boolean[];
    price: number;
  }[] = [
    {
      name: "Starter Package",
      perks: [true, true, false, false],
      price: 1000,
    },
    {
      name: "The Main Event",
      perks: [true, true, true, false],
      price: 2500,
    },
    {
      name: "Mega Package",
      perks: [true, true, true, true],
      price: 3500,
    },
  ];

  const [selected, setSelected] = useState<number>(1);
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [contact, setContact] = useState<string>();

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const contactHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const { sendTransaction, publicKey } = useWallet();

  const pay = () => {
    console.log(publicKey, packages[selected]!.price);
    (async () => {
      const fromATA = getAssociatedTokenAddressSync(USDC_MINT, publicKey!);
      const toATA = getAssociatedTokenAddressSync(USDC_MINT, TREASURY_MINT);

      const mint = await getMint(connection, USDC_MINT);

      console.log(mint.decimals);

      const blockhash = await connection.getLatestBlockhash("confirmed");
      const transaction = new Transaction({
        recentBlockhash: blockhash.blockhash,
      }).add(
        createTransferCheckedInstruction(
          fromATA,
          USDC_MINT,
          toATA,
          publicKey!,
          packages[selected]!.price * 10 ** mint.decimals,
          mint.decimals
        )
      );

      await sendTransaction(transaction, connection);
    })().catch((err) => {
      console.log(err);
      toast.error("An Error Occoured");
    });
  };

  return (
    <Layout>
      <div className="flex w-full justify-center font-space font-medium">
        <div className="flex w-full max-w-screen-xl flex-col items-center pt-16">
          <div className="text-center font-tt text-5xl uppercase">
            feedback <br /> request
          </div>

          <div className="mt-16 flex w-full max-w-md flex-col gap-y-5">
            <div>
              <div className="m-1 mb-1.5">Project Name</div>
              <input
                type="text"
                className="h-12 w-full rounded border-2 border-[#222] bg-[#111] px-3 text-gray-100 outline-none transition-all hover:border-[#333]"
                value={name}
                onChange={nameHandler}
              />
            </div>

            <div>
              <div className="m-1 mb-1.5">Description</div>
              <textarea
                className="h-28 w-full rounded border-2 border-[#222] bg-[#111] p-3 text-gray-100 outline-none transition-all hover:border-[#333]"
                value={description}
                onChange={descriptionHandler}
              />
            </div>

            <div>
              <div className="m-1 mb-1.5">
                Contact <span className="ml-1 text-gray-500"></span>
              </div>
              <input
                type="text"
                placeholder="Dean#1234, Hanko#5678"
                className="h-12 w-full rounded border-2 border-[#222] bg-[#111] px-3 text-gray-100 outline-none transition-all placeholder:text-gray-500 hover:border-[#333]"
                value={contact}
                onChange={contactHandler}
              />
            </div>
          </div>
          <div className="mt-24">
            <div className="flex">
              <div className="rounded-lg border-2 border-[#333] bg-[#111]">
                <table>
                  <thead className="">
                    <tr className="border-b-2 border-[#333]">
                      <th className="w-max border-r-2 border-[#333]"></th>

                      {packages.map((_package, key) => (
                        <th
                          className={`relative cursor-pointer border-l-2 border-[#333] px-6 py-3 ${
                            selected === key ? "bg-white text-black" : ""
                          }`}
                          key={key}
                          onClick={() => {
                            setSelected(key);
                          }}
                        >
                          {selected === key && (
                            <div className="absolute -top-10 left-0 flex h-10 w-full items-center justify-center rounded-t border-b-2 border-black bg-white text-sm text-black">
                              SELECTED
                            </div>
                          )}
                          {_package.name} <br />
                          [${_package.price.toLocaleString()}]
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {perks.map((perk, key) => (
                      <tr className="border-t-2 border-[#333]" key={key}>
                        <td className="border-r-2 border-[#333] px-5 py-3">
                          <div>{perk.name}</div>
                          <div className="mt-1 max-w-xs text-xs text-gray-300">
                            {perk?.description}
                          </div>
                        </td>
                        {packages.map((_package, index) => (
                          <td
                            className={`flex-grow cursor-pointer  border-l-2 border-[#333] text-center ${
                              selected === index ? "bg-white" : ""
                            }`}
                            key={index}
                            onClick={() => {
                              setSelected(index);
                            }}
                          >
                            <div className="flex w-full items-center justify-center">
                              {_package.perks[key] === true ? (
                                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                              ) : (
                                <XCircleIcon className="h-6 w-6 text-red-500" />
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tr></tr>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-14 w-full max-w-md">
            <button
              className={`h-12 w-full rounded bg-white font-tt text-lg uppercase text-black disabled:cursor-not-allowed`}
              disabled={name && description && contact ? false : true}
              onClick={pay}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
