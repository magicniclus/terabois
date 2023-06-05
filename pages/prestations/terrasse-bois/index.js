import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog
      title="RDV pour Création de Terrasse en Bois avec Terabois"
      description="Prenez RDV pour l'installation de votre terrasse en bois. Terabois, expert en amélioration de l'habitat à Bordeaux et en Gironde. Embellissez votre extérieur."
      tags="RDV Terrasse Bois, Création Terrasse, Aménagement Extérieur, Terabois, Isolation, Couverture, Charpente, Terrasse bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        title="Terrasse bois"
        description="Confiez à Terabois la réalisation de votre terrasse en bois pour un espace extérieur chaleureux et durable. Nos experts garantissent une finition impeccable pour un véritable coin de paradis."
        avantages={[
          "L'entreprise n°1 en Gironde pour les terrasses bois",
          "Travaillez avec nos charpentier reconnus",
          "Plus de 90% de nos clients satisfaits",
          "Plus de 3000 réalisations",
        ]}
        prestations={["Terrasse bois"]}
        image="/img/prestations/terrasse.jpeg"
        alt="terrasse bois"
        badge={true}
      />
    </Blog>
  );
};

export default index;
