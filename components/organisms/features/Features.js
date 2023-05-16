import React from "react";

const prestations = [
  {
    name: "Isolation des combles",
    description:
      "Nous intervenons rapidement pour tout dépannage informatique.",
    href: "#",
    icon: "./img/prestations/isolationcombles.jpg",
  },
  {
    name: "Isolation des murs exterieurs/intérieurs",
    description:
      "Nous intervenons rapidement pour tout dépannage informatique.",
    href: "#",
    icon: "./img/prestations/ext-two.jpg",
  },
  {
    name: "Ossature bois, bardage",
    description:
      "Nous intervenons rapidement pour tout dépannage informatique.",
    href: "#",
    icon: "./img/prestations/isolationcombles.jpg",
  },
  {
    name: "Terrasse bois",
    description:
      "Nous intervenons rapidement pour tout dépannage informatique.",
    href: "#",
    icon: "./img/prestations/isolationcombles.jpg",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Vous souhaitez
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nos prestations sont adaptées à vos besoins. Nous vous proposons un
            service de qualité, rapide et efficace.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {prestations.map((prestation) => (
            <div className="mt-24 grid grid-cols-1 gap-y-20 gap-x-6 sm:gap-x-8 md:w-5/6 mx-auto hover:bg-gray-50 p-2 rounded-xl">
              <div className="group relative">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-4">
                  <img
                    src={prestation.icon}
                    alt={prestation.name}
                    className="object-cover pointer-events-none w-full h-full"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={prestation.href}>
                    <span className="absolute inset-0" />
                    {prestation.name}
                  </a>
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-800 mb-3">
                  <a href={prestation.href}>{prestation.description}</a>
                </p>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-gray-800"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
