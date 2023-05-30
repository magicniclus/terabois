import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog>
      <FormContent
        title="Couvreur en gironde"
        description="TeraBois est votre expert de confiance pour toutes vos exigences en matière de couverture. Nous combinons expertise technique et savoir-faire pour fournir des solutions de couverture durables et de qualité supérieure. Faites confiance à TeraBois pour une couverture résistante qui protègera efficacement votre maison."
        avantages={[
          "L'entreprise de couverture n°1 en Gironde",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "Couverture en tuiles",
          "Couverture en ardoises",
          "Couverture en zinc",
          "Entretien de toiture",
          "Réparation de toiture",
          "Nettoyage de toiture",
        ]}
        image="ite.jpeg"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
