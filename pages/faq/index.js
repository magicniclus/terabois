import React from "react";
import Global from "../../layouts/Global";
import Faq from "../../components/organisms/faq/Faq";
import Cta from "../../components/organisms/cta/Cta";
const index = () => {
  return (
    <Global>
      <Faq />
      <Cta />
    </Global>
  );
};

export default index;
