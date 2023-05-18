import React from "react";

const Cta = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
          Et si on discutait de votre projet ?
          <br />
          Nous sommes les spécialistes que vous cherchez.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueClear"
          >
            Prendre rendez-vous
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-800">
            Nos préstations <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
