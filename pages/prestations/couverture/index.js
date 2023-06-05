import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV Couverture Terabois : Expert en Couverture à Bordeaux"
      description="Programmez un RDV pour votre projet de couverture avec Terabois, expert en amélioration de l'habitat à Bordeaux et Gironde. Protégez votre maison efficacement."
      tags="RDV Couverture Terabois, Expert Couverture, Amélioration Habitat, Isolation, Rénovation, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
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
        image="https://images.unsplash.com/photo-1472342139520-1aa49517fed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHx0b2l0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        alt="Couverture en tuiles"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
