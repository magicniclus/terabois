import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog>
      <FormContent
        title="Terrasse bois"
        description="Confiez à Terabois la réalisation de votre terrasse en bois pour un espace extérieur chaleureux et durable. Nos experts garantissent une finition impeccable pour un véritable coin de paradis."
        avantages={[
          "L'entreprise n°1 en Gironde pour les terrasses bois",
          "Travaillez avec nos charpentier reconnus",
          "Plus de 90% de nos clients satisfaits",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={["Terrasse bois"]}
        image="terrasse.jpeg"
      />
    </Blog>
  );
};

export default index;
