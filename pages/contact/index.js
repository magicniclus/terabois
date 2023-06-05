import React from "react";
import Blog from "../../layouts/Blog";
import FormContent from "../../components/organisms/formContent/FormContent";
const index = () => {
  return (
    <Blog
      title="Contact Terabois : Experts en Isolation & Rénovation en Gironde"
      description="Contactez Terabois, votre partenaire en amélioration de l'habitat à Bordeaux et en Gironde. Parlons de vos projets d'isolation et de rénovation dès maintenant."
      tags="Contact Terabois, Amélioration Habitat, Services d'isolation, Rénovation, Couverture, Charpente, Terrasse en bois, Extension ossature, Bordeaux, Gironde"
    >
      <FormContent
        title="Rénovez avec sérénité"
        description="Choisir Terabois expert en rénovation en gironde, pour un confort optimal et des économies d'énergie. Profitez des aides de l'État pour un investissement malin et éco-responsable."
        avantages={[
          "L'entreprise n°1 en Gironde dans la rénovation de l'habitat",
          "Jusqu'à 80% d'aide de l'état sur vos travaux",
          "Plus de 90% de nos clients satisfaits sur +3000 réalisations",
          "Entreprise certifiée RGE Qualibat",
        ]}
        prestations={[
          "isolation des combles perdues",
          "Isolation sous rampant",
          "Isolation sous toiture",
          "Isolation des murs intérieurs (ITI)",
          "Isolation des murs extérieurs (ITE)",
          "Charpente",
          "Couverture",
          "Nettoyage de toiture",
          "Zinguerie",
          "Ossature bois",
          "Bardage",
          "Terrasse bois",
          "Rénovation globale",
        ]}
        image="https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Rénovation de maison"
        badge={true}
        badgeChantier={false}
      />
    </Blog>
  );
};

export default index;
