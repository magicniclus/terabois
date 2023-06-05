import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV Isolation Combles Terabois : Expert à Bordeaux et Gironde"
      description="Programmez votre RDV pour l'isolation des combles avec Terabois, le spécialiste de l'habitat à Bordeaux et Gironde. Economisez l'énergie et gagnez en confort."
      tags="RDV Isolation Combles Terabois, Isolation Combles, Expert Isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        description="Choisir Terabois expert en isolation durable, pour un confort optimal et des économies d'énergie. Profitez des aides de l'État pour un investissement malin et éco-responsable."
        avantages={[
          "L'entreprise n°1 en Gironde pour l'isolation des combles",
          "Jusqu'à 80% d'aide de l'état sur vos travaux d'isolation",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "isolation des combles perdues",
          "Isolation sous rampant",
          "Isolation sous toiture",
        ]}
        image="/img/prestations/isolation.jpeg"
        alt="Isolation des combles"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
