import React from "react";
import Global from "../../layouts/Global";
import EntrepriseContent from "../../components/organisms/content/EntrepriseContent";
import Cta from "../../components/organisms/cta/Cta";
const index = () => {
  return (
    <Global
      description="Apprenez-en plus sur Terabois, votre expert local en services d'isolation, de rénovation et plus à Bordeaux et en Gironde. Découvrez nos valeurs et notre expertise.Apprenez-en plus sur Terabois, votre expert local en services d'isolation, de rénovation et plus à Bordeaux et en Gironde. Découvrez nos valeurs et notre expertise.Apprenez-en plus sur Terabois, votre expert local en services d'isolation, de rénovation et plus à Bordeaux et en Gironde. Découvrez nos valeurs et notre expertise."
      title="Terabois : Votre Expert Habitat en Isolation & Rénovation en Gironde"
      tags="Terabois, Expert Habitat, Isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <EntrepriseContent />
      <Cta />
    </Global>
  );
};

export default index;
