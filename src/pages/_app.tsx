import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import WalletProvider from "@/components/wallet/Provider";

require("@solana/wallet-adapter-react-ui/styles.css");

import localFont from "@next/font/local";
import { Space_Grotesk } from "@next/font/google";
import { api } from "@/utils/api";

const tt = localFont({
  src: "../styles/fonts/tt.woff2",
  variable: "--font-tt",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${tt.variable} ${space.variable}`}>
      <Toaster />
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
