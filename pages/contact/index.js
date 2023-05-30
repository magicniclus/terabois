import React from "react";
import Blog from "../../layouts/Blog";
import FormContent from "../../components/organisms/formContent/FormContent";
const index = () => {
  return (
    <Blog>
      <FormContent
        title="Rénovez avec sérénité"
        description="Choisir Terabois expert en rénovation en gironde, pour un confort optimal et des économies d'énergie. Profitez des aides de l'État pour un investissement malin et éco-responsable."
        avantages={[
          "L'entreprise n°1 en Gironde dans la rénovation de l'habitat",
          "Jusqu'à 80% d'aide de l'état sur vos travaux",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "isolation des combles perdues",
          "Isolation sous rampant",
          "Isolation sous toiture",
          "Charpente",
          "Couverture",
          "Zinguerie",
          "Ossature bois",
          "Bardage",
          "Terrasse bois",
        ]}
        image="photo-iti.jpg"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
