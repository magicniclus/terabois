import React from "react";
import Head from "next/head";
import Hero from "../components/organisms/hero/Hero";
import Footer from "../components/organisms/footer/Footer";
import BlogNav from "../components/organisms/nav/BlogNav";

const Basic = (props) => {
  const description = props.description || null;
  const title = props.title || null;
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
      </Head>
      <BlogNav />
      <main className="bg-white min-h-[100vh] relative">{props.children}</main>
    </>
  );
};

export default Basic;
