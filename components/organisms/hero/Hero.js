import React from "react";
import { useState } from "react";
import Nav from "../nav/Nav";
import { PhoneIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <Nav
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </div>
        <div className="fixed top-10 right-11 text-white hidden lg:flex">
          <a
            href="#"
            className="lg:flex items-center text-lg font-bold leading-6 bg-blue hover:bg-blueClear  px-4 py-2 rounded-lg"
          >
            <PhoneIcon className="h-5 w-5 flex-none text-white mr-2" />
            +33631420045
          </a>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-5">
            <a
              href="/connexion"
              className="text-sm font-semibold leading-6 text-gray-800"
            >
              <UserCircleIcon className="h-9 w-9 flex-none text-blue" />
            </a>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-20 sm:py-24 lg:px-8 lg:py-26 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-800/10 hover:ring-gray-800/20">
                    L'histoire de l'entreprise et de son fondateur{" "}
                    <a
                      href="/entreprise"
                      className="whitespace-nowrap font-semibold text-blue"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      En savoir plus <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                  <span className="text-logoOne">Tera</span>
                  <span className="text-logoTwo">Bois</span>
                </h1>
                <h2 className="mt-6 text-xl leading-8 text-gray-600">
                  Notre savoir-faire au service de votre bien-être.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Isolation des combles | Isolation murs interieurs/exterieurs |
                  Ossature bois | Terrasse bois | Bardage | Couverture |
                  Charpente
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Prendre rendez-vous
                  </a>
                  <a
                    href="#prestations"
                    className="text-sm font-semibold leading-6 text-gray-800"
                  >
                    Nos préstations <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="flex items-center mt-10">
                  <img src="/img/logos/logoRGE.png" className="h-10 w-10" />
                  <h3 className="text-sm font-normal ml-3">
                    {" "}
                    Entreprise certifiée RGE
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto h-full w-full relative"
            src="/img/houses/top_768.jpg"
            alt="maison"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 hidden lg:flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
