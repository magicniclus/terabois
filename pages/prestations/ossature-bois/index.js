import React from "react";
import Blog from "../../../layouts/Blog";
import FormContent from "../../../components/organisms/formContent/FormContent";

const index = () => {
  return (
    <Blog>
      <FormContent
        description="Avec Terabois, donnez vie à vos projets de bardage, extension ou agrandissement en bois, alliant esthétique et durabilité. Nous vous garantissons un travail de qualité pour un habitat qui vous ressemble."
        avantages={[
          "L'entreprise n°1 en Gironde pour les extensions bois",
          "Travaillez avec nos charpentier reconnus",
          "Plus de 90% de nos clients satisfaits",
          "Plus de 3000 réalisations",
        ]}
        title="Ossature bois"
        prestations={[
          "Surélévation bois",
          "Agrandissement bois",
          "Bardage bois",
        ]}
        image="ossature.jpeg"
        badge={true}
      />
    </Blog>
  );
};

export default index;
