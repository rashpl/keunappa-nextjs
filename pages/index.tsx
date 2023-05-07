import Head from "next/head";
import Script from "next/script";
import HomePageContent from "../components/HomePageContent";
import { getAllPosts } from "./api/api";

export default function Home({ allPosts }) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageContent {...{ allPosts }} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "price",
    "stars",
    "reviews",
    "image_url",
  ]);

  return {
    props: { allPosts },
  };
};
