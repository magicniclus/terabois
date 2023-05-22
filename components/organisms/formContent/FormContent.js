import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import BadgeAide from "../badges/BadgeAide";
import BadgeChantier from "../badges/BadgeChantier";

const FormContent = (props) => {
  const badge = props.badge || false;
  const badgeChantier = props.badgeChantier || false;
  const title = props.title || "Isolation des combles";
  const description =
    props.description ||
    "Proin volutpat consequat porttitor cras nullam gravida at. Orcimolestie a eu arcu. Sed ut tincidunt integer elementum id sem.Arcu sed malesuada et magna.";
  const avantages = props.avantages || [
    "Plus de 90% de nos clients satisfaits",
    "Jusqu'à 80% d'aide de l'état sur vos travaux d'isolation",
    "L'entreprise n°1 en Gironde pour l'isolation des combles",
    "Entreprise certifiée RGE Qualibat",
  ];
  const prestations = props.prestations || [
    "isolation des combles perdues",
    "Isolation sous rampant",
    "Isolation sous toiture",
  ];
  return (
    <div className="relative isolate bg-white min-h-[calc(100vh-80px)] h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 h-full">
        <div className="relative my-auto px-6 pb-7 pt-7 lg:pt-28 lg:static lg:px-8 lg:py-18 h-full">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-800/10 lg:w-1/2">
              <img
                src={`/img/prestations/${
                  props.image || "isolationcombles.jpg"
                }`}
                className="w-full h-full object-cover relative"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 hidden lg:flex"></div>
            </div>
            <div className="bg-white py-16 px-10  rounded-xl bg-opacity-90 relative">
              <h1 className="text-3xl font-bold tracking-tight text-gray-800">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {avantages.map((aventage, index) => (
                  <div key={index} className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Check</span>
                      <CheckCircleIcon
                        className="h-7 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <p>{aventage}</p>
                    </dd>
                  </div>
                ))}
              </dl>
              {badgeChantier ? <BadgeChantier /> : null}
              {badge ? <BadgeAide /> : null}
            </div>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-7 pt-7 lg:pt-28 lg:px-8 lg:py-18 h-full my-auto"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Prenom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Adresse
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="Adresse"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Préstation souhaitée
                </label>
                <div className="mt-2.5">
                  <select
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled selected>
                      Selectionnez une prestation
                    </option>
                    {prestations.map((prestation, index) => (
                      <option key={index} value={prestation}>
                        {prestation}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="w-4/6">
                <input type="checkbox" id="rgpd" name="rgpd" required />
                <label
                  htmlFor="rgpd"
                  className="ml-2 text-sm font-normal text-gray-800"
                >
                  J'accepte les conditions de la politique de confidentialité et
                  RGPD.
                </label>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContent;
