import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV Isolation Murs Intérieurs Terabois : Confort Bordeaux"
      description="Prenez un RDV pour l'isolation des murs intérieurs avec Terabois, leader en amélioration de l'habitat à Bordeaux et Gironde. Confort et économie d'énergie."
      tags="RDV Isolation Murs Intérieurs Terabois, Isolation Murs Intérieurs, Expert Isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        title="Isolation des murs interieurs"
        description="Terabois garantit une isolation intérieure et extérieure de qualité pour plus de confort et d'économies d'énergie. Bénéficiez des aides de l'État pour un habitat performant et écologique."
        avantages={[
          "L'entreprise n°1 en Gironde pour l'isolation des murs exterieurs",
          "Jusqu'à 80% d'aide de l'état sur vos travaux d'isolation",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={["Isolation des murs exterieurs (ITE)"]}
        image="/img/prestations/iti.jpeg"
        alt="Isolation des murs interieurs"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
