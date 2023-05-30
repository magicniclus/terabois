import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CheckIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Isolation des combles",
    description: "Isolez vos combles",
    href: "prestations/isolation-des-combles",
    icon: ArrowRightIcon,
  },
  {
    name: "Isolation thermique par l'exterieur(ITE)",
    description: "Optimisez votre isolation sans perdre de place",
    href: "prestations/isolation-des-murs-exterieurs",
    icon: ArrowRightIcon,
  },
  {
    name: "Isolation thermique par l'interieur(ITI)",
    description: "Redéfinissez votre espace tout en isolant",
    href: "prestations/isolation-des-murs-interieurs",
    icon: ArrowRightIcon,
  },
  {
    name: "Ossature bois, bardage",
    description: "Agrandissez, surélevez ou rénovez votre bien",
    href: "prestations/ossature-bois",
    icon: ArrowRightIcon,
  },
  {
    name: "Terrasse bois",
    description: "Aménagez votre extérieur avec une terrasse en bois",
    href: "prestations/ossature-bois",
    icon: ArrowRightIcon,
  },
  {
    name: "Couverture",
    description: "Création, reprise ou réparation",
    href: "prestations/couverture",
    icon: ArrowRightIcon,
  },
  {
    name: "Nettoyage de couverture",
    description: "Nettoyez votre couverture en profondeur",
    href: "prestations/nettoyage-de-couverture",
    icon: ArrowRightIcon,
  },
  {
    name: "Charpente",
    description: "Faites appel à nos experts charpentiers",
    href: "prestations/charpente",
    icon: ArrowRightIcon,
  },
];

const callsToAction = [
  { name: "Prendre rendez-vous", href: "/contact", icon: CheckIcon },
  { name: "Contact", href: "/contact", icon: PhoneIcon },
];

const company = [
  {
    name: "Tous savoir sur l'isolation des combles",
    href: "/articles/conseils-travaux/isolation-des-combles-a-bordeaux-avec-terabois",
    icon: ArrowRightIcon,
    description:
      "Découvrez comment notre expertise en isolation des combles peut améliorer votre confort.",
  },
  {
    name: "Terrasse en Bois à Bordeaux",
    href: "/articles/conseils-travaux/terrasse-en-bois-a-bordeaux-avec-terabois",
    icon: ArrowRightIcon,
    description: "Comment choisir sa terrasse en bois ?",
  },
  {
    name: "Choisir son couvreur à Bordeaux",
    href: "/articles/conseils-travaux/couvreurs-bordeaux-avec-terabois",
    icon: ArrowRightIcon,
    description: "Pour une toiture durable et de qualité.",
  },
  {
    name: "Isolation des murs à Bordeaux",
    href: "/articles/conseils-travaux/isolation-des-combles-a-bordeaux-avec-terabois",
    icon: ArrowRightIcon,
    description: "Isolation exterieur ou interieur, quelle solution choisir ?",
  },
];
const callsToActionArticle = [
  { name: "Plus d'article", href: "/articles", icon: ArrowUpRightIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Nav = (props) => {
  const mobileMenuOpen = props.mobileMenuOpen;
  const setMobileMenuOpen = props.setMobileMenuOpen;
  const withBg = props.withBg || true;

  return (
    <>
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between py-6 ${
          withBg ? (mobileMenuOpen ? "" : "bg-white") : ""
        }`}
        aria-label="Global"
      >
        <div className={` lg:flex-1 ${mobileMenuOpen ? "hidden" : "flex"}`}>
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Terabois</span>
            <img
              className="h-8 w-auto"
              src="/img/logos/logo.png"
              alt="terabois"
            />
          </a>
        </div>
        <div className={`${mobileMenuOpen ? "hidden" : "flex lg:flex-1"}`}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 lg:hidden" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 outline-none">
              Préstations
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-800/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-blue"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-800"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-800/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-800 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 outline-none">
              Articles
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-800/5">
                {company.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-800"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 divide-x divide-gray-800/5 bg-gray-50">
                  {callsToActionArticle.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/entreprise"
            className="text-sm font-semibold leading-6 text-gray-800"
          >
            L'entreprise
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-100" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 py-7">
              <span className="sr-only">Terabois</span>
              <img
                className="h-8 w-auto"
                src="/img/logos/logo.png"
                alt="terabois"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Préstations
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Articles
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...company].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/entreprise"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  L'entreprise
                </a>

                <a
                  href="#"
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue hover:text-blueClear hover:bg-gray-50 flex items-center"
                >
                  <PhoneIcon
                    className="h-5 w-5 flex-none text-blue hover:text-blueClear mr-2"
                    aria-hidden="true"
                  />
                  0631420045
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/connexion"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Se connecter
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Nav;
