import Features from "../components/organisms/features/Features";
import Basic from "../layouts/Basic";
import Testamonials from "../components/organisms/testamonial/Testamonials";
import Cta from "../components/organisms/cta/Cta";
import BlogContent from "../components/organisms/content/BlogContent";

export default function Home() {
  return (
    <Basic>
      <Features />
      <BlogContent />
      <Testamonials />
      <Cta />
    </Basic>
  );
}
