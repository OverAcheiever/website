/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content='text/html; charset=utf-8' http-equiv='Content-Type'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes">

        <meta name="theme-color" content="dark" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <meta name="keywords" content="web3 feedback, solana power users, crypto project feedback, help with crypto project, better feedback solutions">
        <meta name="author" content="Dean&apos;s List DAO" />
        <meta name="description" content="A Service DAO for Web3 power users providing feedback sessions.">

        <meta property="og:description" content="A Service DAO for Web3 power users providing feedback sessions."/>
        <meta property="og:title" content="Dean&apos;s List - Web3 Power Experts" />
        <meta property="og:image" content="/images/logo.png"/>
        <meta property="og:url" content="" />

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:creator" content="@deanslistDAO">
        <meta name="twitter:title" content="Dean&apos;s List - Web3 Power Experts">
        <meta name="twitter:image" content="/images/logo.png">
        <meta name="twitter:site" content="@deanslistDAO">
        <meta name="twitter:description" content="A Service DAO for Web3 power users providing feedback sessions.">

        <link rel="shortcut icon" type="image/png" href="/images/logo.png"/>
        <link rel="icon" href="/images/logo.png" />

        <title>Expert Web3 Feedback Service | Dean&apos;s List</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/tt.woff2" />
      </Head>

      <div className="text-white">
        <Hero />
        <Customers />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
