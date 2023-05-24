import React from "react";

const Remerciement = () => {
  return (
    <div className="relative isolate  min-h-[calc(100vh-80px)] flex justify-center items-center">
      <img
        src="/img/houses/top_768.jpg"
        alt="maison ecologique"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 bg-gray-800 bg-opacity-80 w-11/12 lg:w-8/12 p-5 rounded-lg">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Merci
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Nous vous contacterons dans les 24/48h.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Remerciement;
