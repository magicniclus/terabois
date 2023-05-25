import { useRouter } from "next/router";
import posts from "../../../datas/posts";
import Article from "../../../layouts/Article";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Chargement...</div>;
  }

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return (
    <>
      <Article data={post} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.conseilsTravaux.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = posts.conseilsTravaux.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
