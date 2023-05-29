import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Quels services Terabois offre-t-il ?",
    answer:
      "Terabois est spécialisé dans plusieurs domaines dont l'isolation des combles et des murs, la réalisation de terrasses en bois, les travaux de charpente et de couverture, et la construction d'ossature bois.",
  },
  {
    question: "Où se situe Terabois ?",
    answer:
      "Terabois est situé en Gironde. Cependant, nous couvrons une large zone autour de cette région, veuillez nous contacter pour confirmer la couverture de votre emplacement.",
  },
  {
    question: "Quelle est l'expérience de l'équipe de Terabois ?",
    answer:
      "Le créateur de Terabois a plus de 30 ans d'expérience dans le domaine et a réalisé plus de 3000 chantiers. Notre équipe est composée de professionnels qualifiés et expérimentés dans chaque service que nous offrons.",
  },
  {
    question: "Quels types de matériaux utilisez-vous pour vos services ?",
    answer:
      "Nous utilisons principalement du bois pour nos constructions et nos travaux d'isolation. Cependant, nous nous adaptons en fonction des spécificités de chaque projet. N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer:
      "Oui, nous offrons des devis gratuits. Vous pouvez nous contacter par téléphone ou par e-mail, ou remplir le formulaire de contact sur notre site web.",
  },
  {
    question: "Quel est le délai moyen pour un chantier ?",
    answer:
      "Le délai dépend de la taille et de la complexité du projet. Une fois que nous aurons discuté de vos besoins spécifiques, nous serons en mesure de vous fournir une estimation plus précise.",
  },
  {
    question:
      "Vos travaux d'isolation sont-ils éligibles aux crédits d'impôts ?",
    answer:
      "Oui, certains de nos travaux d'isolation peuvent être éligibles aux crédits d'impôts pour la transition énergétique. Nous pouvons vous fournir plus d'informations à ce sujet lors de la discussion de votre projet.",
  },
  {
    question: "Quelle est la durée de vie moyenne d'une terrasse en bois ?",
    answer:
      "La durée de vie d'une terrasse en bois dépend de nombreux facteurs, dont le type de bois utilisé et l'entretien régulier. En général, une terrasse bien entretenue peut durer entre 15 et 25 ans.",
  },
  {
    question: "Proposez-vous des garanties sur vos travaux ?",
    answer:
      "Oui, tous nos travaux sont sous garantis décénale. Nous fournirons des détails spécifiques lors de la rédaction du devis.",
  },
  {
    question: "Terabois est-il assuré et agréé ?",
    answer:
      "Oui, Terabois est pleinement assuré et agréé (RGE qualibat etc... ). Nous respectons toutes les réglementations en vigueur dans notre domaine.",
  },
  {
    question:
      "Quel type de maintenance requiert une structure en ossature bois ?",
    answer:
      "Une structure en ossature bois nécessite un entretien minimal, principalement lié à la protection contre les insectes et l'humidité. Un contrôle régulier et des traitements préventifs sont recommandés.",
  },
  {
    question: "Pouvez-vous travailler sur des bâtiments historiques ?",
    answer:
      "Oui, nous avons l'expérience et les compétences nécessaires pour travailler sur des bâtiments historiques. Nous respectons les réglementations et les contraintes spécifiques à ces types de projets afin de préserver l'intégrité architecturale tout en assurant une rénovation de qualité.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h1 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Questions fréquentes
          </h1>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
