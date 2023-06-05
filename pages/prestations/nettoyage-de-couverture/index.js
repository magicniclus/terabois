import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV Nettoyage & Démoussage Couverture Terabois, Bordeaux"
      descritpion="Demandez un RDV pour nettoyage et démoussage de votre couverture avec Terabois, votre expert en rénovation à Bordeaux et en Gironde. Renouvelez votre toit."
      tags="RDV Nettoyage Couverture, Démoussage Couverture, Rénovation Toit, Terabois, Isolation, Couverture, Charpente, Terrasse bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        title="Nettoyage de couverture en gironde"
        description="eraBois est votre spécialiste pour le nettoyage de couverture. Nous combinons des techniques de nettoyage efficaces et respectueuses pour préserver la qualité et prolonger la durabilité de votre couverture. Faites confiance à TeraBois pour un nettoyage de couverture minutieux qui redonne à votre toiture toute son esthétique et sa performance"
        avantages={[
          "L'entreprise n°1 en Gironde en nettoyage de couverture",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "Nettoyage de couverture en tuiles",
          "Nettoyage de couverture en ardoises",
          "Nettoyage de couverture en zinc",
          "Entretien de toiture",
        ]}
        image="/img/prestations/traitement.jpeg"
        alt="Nettoyage de couverture"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
