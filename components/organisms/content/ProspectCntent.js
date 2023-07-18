import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { updateElementByPhone } from "../../../firebase/getData";

const ProspectCntent = (props) => {
  const data = props.data;
  const fields = ["comment", "phone", "email", "name", "zipCode"];

  const initialFieldState = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: { selected: false, value: data[field] || "" },
    }),
    {}
  );

  const [fieldState, setFieldState] = useState(initialFieldState);

  const closeField = (field) => (e) => {
    e.preventDefault();
    setFieldState({
      ...fieldState,
      [field]: { ...fieldState[field], selected: false },
    });
  };

  const updateField = (field) => (e) => {
    e.preventDefault();
    setFieldState({
      ...fieldState,
      [field]: { ...fieldState[field], selected: true },
    });
  };
  const saveField = (field) => (e) => {
    e.preventDefault();
    setFieldState({
      ...fieldState,
      [field]: { ...fieldState[field], selected: false },
    });
    updateElementByPhone(data.phone, field, fieldState[field].value)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setFieldValue = (field) => (e) => {
    setFieldState({
      ...fieldState,
      [field]: { ...fieldState[field], value: e.target.value },
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
              {fieldState["name"].selected ? (
                <input
                  type="text"
                  value={fieldState["name"].value}
                  onChange={setFieldValue("name")}
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  required
                />
              ) : (
                <p>{fieldState["name"].value || "Nom non renseigné"}</p>
              )}
              {fieldState["name"].selected ? (
                <a
                  href="#"
                  onClick={closeField("name")}
                  className="text-red-400 hover:text-red-300 ml-5"
                >
                  Annuler
                </a>
              ) : null}
              <a
                href="#"
                onClick={
                  fieldState["name"].selected
                    ? saveField("name")
                    : updateField("name")
                }
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                {fieldState["name"].selected ? "Valider" : "Modifier"}
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
              Status
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.status}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Téléphone
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              <a href="#" className=" flex">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2 mr-5" />
                {data.phone}
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Adresse email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              {fieldState["email"].selected ? (
                <input
                  type="email"
                  value={fieldState["email"].value}
                  onChange={setFieldValue("email")}
                  className="block w-min rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                />
              ) : (
                <>
                  <a
                    href={`mailto:${fieldState["email"].value}`}
                    className="flex"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-5" />
                    <p>{fieldState["email"].value || "Email non renseigné"}</p>
                  </a>
                </>
              )}
              {fieldState["email"].selected ? (
                <a
                  href="#"
                  onClick={closeField("email")}
                  className="text-red-400 hover:text-red-300 ml-5"
                >
                  Annuler
                </a>
              ) : null}
              <a
                href="#"
                onClick={
                  fieldState["email"].selected
                    ? saveField("email")
                    : updateField("email")
                }
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                {fieldState["email"].selected ? "Valider" : "Modifier"}
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Code postal
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              {fieldState["zipCode"].selected ? (
                <input
                  type="text"
                  value={fieldState["zipCode"].value}
                  onChange={setFieldValue("zipCode")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  required
                />
              ) : (
                <p>
                  {fieldState["zipCode"].value || "Code postal non renseigné"}
                </p>
              )}
              {fieldState["zipCode"].selected ? (
                <a
                  href="#"
                  onClick={closeField("zipCode")}
                  className="text-red-400 hover:text-red-300 ml-5"
                >
                  Annuler
                </a>
              ) : null}
              <a
                href="#"
                onClick={
                  fieldState["zipCode"].selected
                    ? saveField("zipCode")
                    : updateField("zipCode")
                }
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                {fieldState["zipCode"].selected ? "Valider" : "Modifier"}
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
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Commantaires
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
              {fieldState["comment"].selected ? (
                <textarea
                  value={fieldState["comment"].value}
                  onChange={setFieldValue("comment")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              ) : (
                <p>{fieldState["comment"].value || "Aucun commentaire"}</p>
              )}
              {fieldState["comment"].selected ? (
                <a
                  href="#"
                  onClick={closeField("comment")}
                  className="text-red-400 hover:text-red-300 ml-5"
                >
                  Annuler
                </a>
              ) : null}
              <a
                href="#"
                onClick={
                  fieldState["comment"].selected
                    ? saveField("comment")
                    : updateField("comment")
                }
                className="text-indigo-400 hover:text-indigo-300 ml-5"
              >
                {fieldState["comment"].selected ? "Valider" : "Modifier"}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProspectCntent;
