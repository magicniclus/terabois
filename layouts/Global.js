import React from "react";
import Head from "next/head";
import Footer from "../components/organisms/footer/Footer";
import GlobalNav from "../components/organisms/nav/GlobalNav";
import Cookie from "../components/organisms/cookie/Cookie";

const Global = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const canonical = props.canonical || "";
  const robots = props.robots || "follow";
  const tags = props.tags || null;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={"index, " + robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        <link rel="canonical" href={"https://www.terabois.fr/" + canonical} />
        <meta name="keywords" content={tags} />
      </Head>
      <GlobalNav />
      <main className="bg-white min-h-[100vh] relative">{props.children}</main>
      <Footer />
      <Cookie />
    </>
  );
};

export default Global;
