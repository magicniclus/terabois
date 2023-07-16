import React, { useEffect } from "react";
import BackOffice from "../../../layouts/BackOffice";
import { getDataByPhone } from "../../../firebase/getData";
import { useRouter } from "next/router";
import ProspectCntent from "../../../components/organisms/content/ProspectCntent";

const Prospect = ({ data }) => {
  const user = data[0];

  return (
    <BackOffice userName={user.name}>
      <ProspectCntent data={user} />
    </BackOffice>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.slug; // Extraire l'ID du chemin
  const data = await getDataByPhone(id);

  return {
    props: {
      data: data || [], // Retourner un tableau vide si les données sont indéfinies
    },
  };
}

export default Prospect;
