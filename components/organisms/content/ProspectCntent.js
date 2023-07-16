import React, { useState } from "react";
import List from "../../atoms/lists/list";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { updateCommentByPhone } from "../../../firebase/getData";

const ProspectCntent = (props) => {
  const data = props.data;
  const [selectComment, setSelectComment] = useState(false);
  const [comment, setComment] = useState();
  const closeComment = (e) => {
    e.preventDefault();
    setSelectComment(false);
  };
  const updateComment = (e) => {
    e.preventDefault();
    setSelectComment(true);
  };
  const saveComment = (e) => {
    e.preventDefault();
    setSelectComment(false);
    updateCommentByPhone(data.phone, comment)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Détail et information du prospect
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nom/Prénom
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              {data.name}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                Edit
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Date
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.date ? new Date(data.date).toLocaleString("fr-FR") : "N/A"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Statut
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <List
                options={["Prospect", "Client"]}
                status={data.status ? data.status : null}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Téléphone
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              <a href="#" className="mr-5">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
              </a>
              {data.phone}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                Edit
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Adresse email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              <a href={`mailto:${data.email}`} className="mr-5">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </a>
              {data.email}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                Edit
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Code postal
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.zipCode}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                Edit
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Prestations demandées
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {[
                data.isolation ? "Isolation" : null,
                data.fenetre ? "Menuiserie" : null,
                data.vmc ? "Vmc" : null,
                data.chauffage ? "Chauffage" : null,
                data.pompeAChaleurClim ? "Pompe à chaleur" : null,
                data.solaireChauffeEau ? "chauffe-eau solaire" : null,
              ]
                .filter(Boolean)
                .join(", ")}

              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                Edit
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Commantaires
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              {selectComment ? (
                <textarea
                  className="w-full"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              ) : (
                <p className="w-full">{data.comment || "Aucun commentaire"}</p>
              )}
              {selectComment ? (
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 ml-5 mr-5"
                  onClick={closeComment}
                >
                  Annuler
                </a>
              ) : null}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 ml-5"
                onClick={selectComment ? saveComment : updateComment}
              >
                {selectComment ? "Valider" : "Modifier"}
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nombre d'appel
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <List
                options={["A contacter", "1", "2", "3", "4", "5", "+5"]}
                status={data.nbrPhone ? data.nbrPhone : "A contacter"}
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProspectCntent;
