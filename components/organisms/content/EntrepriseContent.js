import React from "react";

const EntrepriseContent = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1634586621169-93e12e0bd604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ciVDMyVBOW5vdmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="renovation"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Terabois, l'expert de la rénovation à Bordeaux
            </h1>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-800">
              Plus de 30 ans d'expérience dans la rénovation
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Terabois, notre entreprise basée à Bordeaux, est le spécialiste
              dans le domaine de la rénovation. Avec plus de 30 ans d'expérience
              dans le secteur, notre créateur a mené à bien plus de 3000
              chantiers. Cette expérience riche et variée nous permet de mener à
              bien tous les projets de rénovation, quelles que soient leurs
              spécificités.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Chez Terabois, nous proposons une gamme complète de services de
                rénovation. Notre expertise s'étend à plusieurs domaines :
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  Isolation des combles et des murs : Nous rendons votre maison
                  plus éco-énergétique et confortable.
                </li>
                <li className="flex gap-x-3">
                  Réalisation de terrasses en bois : Nous apportons une touche
                  esthétique à votre extérieur pour des moments de détente en
                  plein air.
                </li>
                <li className="flex gap-x-3">
                  Travaux de charpente et de couverture : Nous assurons la
                  stabilité et la durabilité de votre toiture.
                </li>
                <li className="flex gap-x-3">
                  Construction d'ossature bois : Nous offrons une solution
                  durable et respectueuse de l'environnement pour votre nouvelle
                  construction.
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-800">
                La qualité au cœur de nos rénovations à Bordeaux
              </h2>
              <p className="mt-8">
                Chez Terabois, chaque projet de rénovation à Bordeaux est mené
                avec le souci du détail et la quête de la qualité. Nous
                utilisons des matériaux de premier choix pour garantir des
                résultats durables. Notre équipe de professionnels qualifiés
                veille à respecter les normes en vigueur et à vous livrer des
                travaux conformes à vos attentes.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-800">
                Rénovation à Bordeaux : choisissez Terabois, votre partenaire de
                confiance
              </h2>
              <p className="mt-6">
                Si vous avez un projet de rénovation à Bordeaux, n'hésitez pas à
                faire appel à Terabois. Nous vous offrons un devis gratuit et
                nous nous engageons à réaliser votre projet dans le respect des
                délais. Avec Terabois, vous avez l'assurance de travaux de
                qualité, réalisés par une équipe d'experts passionnés et dévoués
                à leur métier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseContent;
