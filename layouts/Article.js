import React from "react";
import Footer from "../components/organisms/footer/Footer";
import Head from "next/head";
import posts from "../datas/posts";
import GlobalNav from "../components/organisms/nav/GlobalNav";
import Cookie from "../components/organisms/cookie/Cookie";

const Article = (props) => {
  const data = props.data;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content={"index, " + data.robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href={
            "https://www.terabois.fr/articles/conseils-travaux/" +
            data.canonical
          }
        />
      </Head>
      <GlobalNav />
      <main className="bg-white min-h-[100vh] relative">{props.children}</main>
      <Footer />
      <Cookie />
    </>
  );
};

export default Article;
