/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
// Next
import Head from "next/head";
// Components
import Hero from "@/components/home/Hero";
import Customers from "@/components/home/Customers";
import Testimonials from "@/components/home/Testimonials";
import Joinus from "@/components/home/Joinus";
import Footer from "@/components/home/Footer";
// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expert Web3 Feedback Service | Dean&apos;s List</title>
        <meta name="description" content="Dean's List" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="theme-color" content="dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="keywords"
          content="web3 feedback, solana power users, crypto project feedback, help with crypto project, better feedback solutions"
        />
        <meta name="author" content="Dean's List DAO" />
        <meta
          name="description"
          content="A Service DAO for Web3 power users providing feedback sessions."
        />
        <meta
          property="og:description"
          content="A Service DAO for Web3 power users providing feedback sessions."
        />
        <meta property="og:title" content="Dean's List - Web3 Power Experts" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@deanslistDAO" />
        <meta name="twitter:title" content="Dean's List - Web3 Power Experts" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:site" content="@deanslistDAO" />
        <meta
          name="twitter:description"
          content="A Service DAO for Web3 power users providing feedback sessions."
        />
      </Head>

      <div className="text-white">
        <Hero />
        <Customers />
        <Testimonials />
        <Joinus />
        <Footer />
      </div>
    </>
  );
};

export default Home;
