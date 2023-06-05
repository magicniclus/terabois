import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV Isolation Murs Extérieurs Terabois : Expert Bordeaux"
      description="Fixez un RDV pour l'isolation des murs extérieurs avec Terabois, l'expert en rénovation à Bordeaux et Gironde. Optimisez votre efficacité énergétique."
      tags="RDV Isolation Murs Extérieurs Terabois, Isolation Murs Extérieurs, Expert Isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        title="Isolation des murs exterieurs"
        description="Terabois garantit une isolation des murs intérieurs et extérieurs de qualité pour plus de confort et d'économies d'énergie. Bénéficiez des aides de l'État pour un habitat performant et écologique."
        avantages={[
          "L'entreprise n°1 en Gironde pour l'isolation des murs exterieurs",
          "Jusqu'à 80% d'aide de l'état sur vos travaux d'isolation",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={["Isolation des murs exterieurs (ITE)"]}
        image="/img/prestations/ite.jpeg"
        alt="Isolation des murs exterieurs"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
