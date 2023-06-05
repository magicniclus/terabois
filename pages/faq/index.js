import React from "react";
import Global from "../../layouts/Global";
import Faq from "../../components/organisms/faq/Faq";
import Cta from "../../components/organisms/cta/Cta";
const index = () => {
  return (
    <Global
      title="FAQ Terabois : Réponses à vos Questions sur l'Isolation et la Rénovation"
      description="Découvrez notre FAQ pour toutes vos questions sur les services d'isolation et de rénovation de Terabois à Bordeaux et en Gironde. Informez-vous ici."
      tags="FAQ Terabois, Isolation, Rénovation, Questions, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <Faq />
      <Cta />
    </Global>
  );
};

export default index;
