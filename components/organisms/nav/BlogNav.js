import React from "react";
import { PhoneIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const BlogNav = (props) => {
  const title =
    props.title || "Notre savoir-faire au service de votre bien-être.";
  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-6 lg:pl-8 lg:pr-0">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between py-6"
          aria-label="Global"
        >
          <div className="flex items-center">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Terabois</span>
              <img
                className="h-8 w-auto"
                src="/img/logos/logo.png"
                alt="terabois"
              />
            </a>
            <h2 className="text-gray-600 text-sm lg:text-xl ml-10">{title}</h2>
          </div>
          <div className="top-5 right-11 text-white hidden lg:flex">
            <a
              href="tel:0649231380"
              className="lg:flex items-center text-lg font-bold leading-6 bg-blue hover:bg-blueClear  px-4 py-2 rounded-lg"
            >
              <PhoneIcon className="h-5 w-5 flex-none text-white mr-2" />
              06 49 23 13 80
            </a>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-5">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-800"
              >
                <UserCircleIcon className="h-9 w-9 flex-none text-blue" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BlogNav;
