import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog>
      <FormContent
        title="Charpentier en gironde"
        description="TeraBois est votre partenaire de confiance pour des charpentes robustes et de qualité supérieure. Nous combinons techniques traditionnelles et innovations modernes pour assurer une structure solide et durable à votre maison. Choisissez TeraBois pour une habitation alliant stabilité, performance et esthétisme."
        avantages={[
          "L'entreprise n°1 en Gironde en charpente",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "Charpente traditionnelle",
          "Charpente américaine",
          "Ossature bois",
          "Traitement bois",
        ]}
        image="https://images.pexels.com/photos/8817834/pexels-photo-8817834.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Charpente traditionnelle"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
