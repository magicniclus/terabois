import React from "react";
import Global from "../../layouts/Global";
import EntrepriseContent from "../../components/organisms/content/EntrepriseContent";
import Cta from "../../components/organisms/cta/Cta";
const index = () => {
  return (
    <Global
      description="Découvrez Terabois, spécialiste de la rénovation à Bordeaux. Plus de 30 ans d'expérience dans l'isolation des combles, la réalisation de terrasses en bois, les travaux de charpente et la construction d'ossature bois. Contactez-nous pour un devis gratuit."
      titre="Rénovation à Bordeaux : Terabois, votre expert en travaux d'isolation et construction bois"
    >
      <EntrepriseContent />
      <Cta />
    </Global>
  );
};

export default index;
