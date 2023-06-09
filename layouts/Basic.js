import React from "react";
import Head from "next/head";
import Hero from "../components/organisms/hero/Hero";
import Footer from "../components/organisms/footer/Footer";
import Cookie from "../components/organisms/cookie/Cookie";

const Basic = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const tags = props.tags || null;
  const canonical = props.canonical || "";
  const robots = props.robots || "follow";
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
        <link rel="icon" href="/img/logos/logo.png" />
      </Head>
      <Hero />
      <main className="bg-white min-h-[100vh] relative">{props.children}</main>
      <Footer />
      <Cookie />
    </>
  );
};

export default Basic;
