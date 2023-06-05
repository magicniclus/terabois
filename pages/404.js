import React from "react";
import Global from "../layouts/Global";

const Custome404 = () => {
  return (
    <Global
      title="Erreur 404 : Page introuvable - Terabois"
      description="La page que vous recherchez n'existe pas ou a été déplacée. Revenez à la page d'accueil pour trouver ce que vous cherchez. Terabois."
      tags="404, Page introuvable, Terabois, Rénovation Habitat, Isolation des combles, Isolation sous toiture, Isolation des murs, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
      canonical="404"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 min-h-screen">
        <p className="text-base font-semibold leading-8 text-gray-800">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Oups!!! Page introuvable...
        </h1>
        <p className="mt-4 text-base text-gray-800/70 sm:mt-6">
          Nous sommes désolés, mais la page que vous recherchez n'existe pas.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm font-semibold leading-7 text-gray-800">
            <span aria-hidden="true">&larr;</span> Retour à l'accueil
          </a>
        </div>
      </div>
    </Global>
  );
};

export default Custome404;
