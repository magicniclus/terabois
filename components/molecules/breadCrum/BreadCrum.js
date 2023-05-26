import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const BreadCrum = (props) => {
  const slug = props.slug;
  const pages = [
    { name: "Articles", href: "/articles", current: false },
    {
      name: "Conseils-travaux",
      href: "/articles/conseils-travaux",
      current: false,
    },
    { name: slug, href: "/articles/conseils-travaux/" + slug, current: true },
  ];
  return (
    <div
      className="flex w-full mx-auto max-w-7xl px-6 lg:px-8 py-5"
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrum;
