import Features from "../components/organisms/features/Features";
import Basic from "../layouts/Basic";
import Content from "../components/organisms/content/Content";
import Faq from "../components/organisms/faq/Faq";
import Testamonials from "../components/organisms/testamonial/Testamonials";
import Cta from "../components/organisms/cta/Cta";

export default function Home() {
  return (
    <Basic>
      <Features />
      {/* <Content /> */}
      <Testamonials />
      <Cta />
    </Basic>
  );
}
