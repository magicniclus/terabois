import React, { useEffect, useState } from "react";
import posts from "../../../datas/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const BlogProposition = (props) => {
  const state = useSelector((state) => state);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const router = useRouter();

  let secondSegment = null;

  // useEffect(() => {
  //   const pathname = router.asPath;
  //   const segments = pathname.split("/");
  //   if (segments.length > 2) {
  //     secondSegment = segments[2];
  //   }
  // }, [router.asPath]);

  const getRandomNumbers = () => {
    let numbers = [];
    while (numbers.length < 3) {
      let num = Math.floor(Math.random() * posts.conseilsTravaux.length) + 1;
      if (num !== state.postId && !numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  };

  useEffect(() => {
    setRandomNumbers(getRandomNumbers());
  }, [state, posts.conseilsTravaux.length]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Ca pourrait vous intéresser
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.conseilsTravaux
            .filter((post) => randomNumbers.includes(post.id))
            .map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-800/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src="/img/logos/logo.png"
                        alt="terabois"
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={`/articles/conseils-travaux/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogProposition;
