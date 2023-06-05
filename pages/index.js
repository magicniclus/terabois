import Features from "../components/organisms/features/Features";
import Basic from "../layouts/Basic";
import Testamonials from "../components/organisms/testamonial/Testamonials";
import Cta from "../components/organisms/cta/Cta";
import BlogContent from "../components/organisms/content/BlogContent";

export default function Home() {
  return (
    <Basic
      title="Terabois Bordeaux : Isolation & Rénovation Maison en Gironde"
      description="Chez Terabois, optimisez votre confort avec nos services d'isolation des combles, murs et toitures, et découvrez nos offres de rénovation et d'extensions en ossature bois à Bordeaux et en Gironde."
      tags="Isolation des combles, Isolation sous toiture, Isolation des murs, Couverture, Charpente, Terrasse en bois, Extension d'ossature, Rénovation de l'habitat, Bordeaux, Gironde"
    >
      <Features />
      <BlogContent />
      {/* <Testamonials /> */}
      <Cta />
    </Basic>
  );
}
