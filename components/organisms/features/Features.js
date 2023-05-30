import React from "react";

const prestations = [
  {
    name: "Isolation des combles",
    href: "/prestations/isolation-des-combles",
    icon: "./img/prestations/isolationcombles.jpg",
  },
  {
    name: "Isolation des murs exterieurs (ITE)",
    href: "/prestations/isolation-des-murs-exterieurs",
    icon: "./img/prestations/ext-two.jpg",
  },
  {
    name: "Isolation des murs interieurs (ITI)",
    href: "/prestations/isolation-des-murs-interieurs",
    icon: "./img/prestations/iti.jpeg",
  },
  {
    name: "Ossature bois, bardage",
    href: "/prestations/ossature-bois",
    icon: "https://images.unsplash.com/photo-1603439810849-5e013dc3ce73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    name: "Terrasse bois",
    href: "/prestations/terrasse-bois",
    icon: "./img/prestations/terrasse.jpeg",
  },
  {
    name: "Couverture",
    href: "/prestations/couverture",
    icon: "https://images.unsplash.com/photo-1586633699106-4f37b4f46cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Nettoyage de couverture",
    href: "/prestations/nettoyage-de-couverture",
    icon: "./img/prestations/traitement.jpeg",
  },
  {
    name: "Charpente",
    href: "/prestations/charpente",
    icon: "https://images.pexels.com/photos/8817834/pexels-photo-8817834.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Features = () => {
  return (
    <div className="bg-white px-10 pt-3" id="prestations">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10">
          {prestations.map((prestation) => (
            <div className="mt:-5 grid grid-cols-1 gap-y-20 gap-x-6 sm:gap-x-8 w-full mx-auto p-4 hover:bg-gray-50 rounded-xl">
              <div className="group relative flex flex-col justify-between">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-4 relative h-48">
                  <img
                    src={prestation.icon}
                    alt={prestation.name}
                    className="object-cover pointer-events-none w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                </div>
                <h3 className="mt-6 text-lg text-gray-800 p-2">
                  <a href={prestation.href}>
                    <span className="absolute inset-0" />
                    {prestation.name}
                  </a>
                </h3>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-gray-800 p-2"
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
