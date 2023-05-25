import React from "react";
import Footer from "../components/organisms/footer/Footer";
import Head from "next/head";
import GlobalNav from "../components/organisms/nav/GlobalNav";

const Article = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const canonical = props.canonical || "";
  const robots = props.robots || "follow";
  content = props.content;
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
      <GlobalNav />
      <main className="bg-white min-h-[100vh] relative"></main>
      <Footer />
    </>
  );
};

export default Article;
