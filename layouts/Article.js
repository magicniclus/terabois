import React from "react";
import Footer from "../components/organisms/footer/Footer";
import Head from "next/head";
import posts from "../datas/posts";
import GlobalNav from "../components/organisms/nav/GlobalNav";
import ArticleContant from "../components/organisms/content/ArticleContant";

const Article = (props) => {
  const data = posts.conseilsTravaux[1];
  const robots = props.robots || "follow";
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content={"index, " + robots} />
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
      <main className="bg-white relative">
        <div className="mx-auto flex lg:flex-col max-w-7xl">
          <div className="w-4/6">
            <ArticleContant data={data} />
          </div>
          <div className="bg-logoOne w-2/6">
            <h1>ok</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              numquam a totam, dolore qui accusantium laborum corporis nam ipsam
              hic nisi eaque ratione, illo similique ut, eum molestiae repellat
              modi sequi non deleniti quod. Neque voluptatibus excepturi alias
              iusto esse quo earum dolor dignissimos odit, possimus delectus,
              praesentium voluptatem ipsum, modi corporis reprehenderit
              molestias similique fuga sunt commodi voluptas doloremque.
              Praesentium consequatur maxime aliquam ratione illo accusamus ex
              neque. Optio reprehenderit, beatae illum numquam sed qui ab
              repellendus ipsum corrupti accusamus maxime! Expedita vitae,
              incidunt nobis repellendus, culpa eligendi quia dignissimos iusto
              qui rerum, praesentium non? Aliquid mollitia, itaque, nulla
              assumenda quia beatae aliquam nobis nam tempora distinctio est
              porro harum, quas et. Eum voluptatem id ducimus rerum ex possimus
              sunt, ad, repellat numquam nam aperiam deleniti nemo corporis vel
              sed voluptate ipsa porro, cum cupiditate eveniet accusantium.
              Explicabo natus dolores vero delectus error! Nemo excepturi
              nostrum eveniet reprehenderit natus earum quisquam explicabo dolor
              quos asperiores, fugit impedit vitae voluptas illo accusantium
              quas esse. Ad quasi perspiciatis odio amet porro reiciendis quod
              eius, vel doloremque dicta nihil quidem minus dolor. Dolorum
              totam, in id expedita ipsa et commodi? Sed blanditiis beatae porro
              nam sapiente, ratione voluptates tenetur. Accusantium dolore
              repellendus commodi! Tempore cumque quam vero velit dicta saepe
              excepturi ut tempora voluptate deleniti iusto, nemo quas nobis,
              hic officiis, ab tenetur quod dolor itaque sint? Rerum quisquam
              laboriosam recusandae ex dolor minus sint sequi eaque!
              Consequatur, molestias veniam, rem ipsa labore blanditiis expedita
              maiores rerum placeat eaque doloribus saepe totam id quia unde
              odit ipsum. Distinctio pariatur nostrum harum quidem ex quasi at
              nulla? Cupiditate dolor hic distinctio natus commodi error. Sequi,
              deleniti facilis consequatur qui doloribus illo nobis aspernatur
              quam voluptates deserunt voluptatum quis soluta magni repudiandae
              quasi officiis. Voluptate expedita animi eius quidem sed
              accusantium labore quisquam deleniti.
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Article;
