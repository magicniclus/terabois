import React from "react";
import Global from "../../layouts/Global";

const index = () => {
  return (
    <Global
      title="Connexion Terabois : Accédez à Vos Services d'Amélioration de l'Habitat"
      descritpion="Connectez-vous à Terabois pour gérer vos projets d'isolation, de rénovation, et plus encore. Expertise en amélioration de l'habitat à Bordeaux et Gironde."
      tags="Connexion Terabois, Amélioration Habitat, Services d'isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <div className="flex min-h-[calc(100vh-80px)] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/img/logos/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
            Connectez-vous à votre espace
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-800"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-800"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue hover:text-blueClear"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </Global>
  );
};

export default index;
