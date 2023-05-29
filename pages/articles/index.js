import React from "react";
import posts from "../../datas/posts";
import Global from "../../layouts/Global";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const index = () => {
  return (
    <Global
      description="Terabois, voici nos articles sur la rénovation de l'habitat à Bordeaux et ses alentours"
      title="Terabois | Articles rénovation"
    >
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos articles
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Tous ce que vous devez savoir la rénovation de votre habitat
            </p>
          </div>
          <div className="flex items-center mt-16">
            <h2 className=" text-xl font-bold tracking-tight text-blue sm:text-2xl">
              Nos Conseils Travaux
            </h2>
            <ArrowRightIcon className="h-5 w-5 text-blue ml-3 text-center" />
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.conseilsTravaux.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
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
                        src="./img/logos/logo.png"
                        alt="terabois"
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
          {posts.aidesTravaux > 0 ? (
            <>
              <div className="flex items-center mt-16">
                <h2 className=" text-xl font-bold tracking-tight text-blue sm:text-2xl">
                  Les aides travaux
                </h2>
                <ArrowRightIcon className="h-5 w-5 text-blue ml-3 text-center" />
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.aidesTravaux.map((post) => (
                  <article
                    key={post.id}
                    className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                  >
                    <img
                      src={post.image.url}
                      alt={post.image.alt}
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
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
                            src="./img/logos/logo.png"
                            alt="terabois"
                            className="h-6 w-6 flex-none rounded-full bg-white/10"
                          />
                          {post.author.name}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a href={post}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                  </article>
                ))}
              </div>
            </>
          ) : null}
          {posts.divers > 0 ? (
            <>
              <div className="flex items-center mt-16">
                <h2 className=" text-xl font-bold tracking-tight text-blue sm:text-2xl">
                  Divers
                </h2>
                <ArrowRightIcon className="h-5 w-5 text-blue ml-3 text-center" />
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.divers.map((post) => (
                  <article
                    key={post.id}
                    className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                  >
                    <img
                      src={post.image.url}
                      alt={post.image.alt}
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
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
                            src="./img/logos/logo.png"
                            alt="terabois"
                            className="h-6 w-6 flex-none rounded-full bg-white/10"
                          />
                          {post.author.name}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a href={post}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                  </article>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Global>
  );
};

export default index;
