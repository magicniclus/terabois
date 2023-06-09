import React, { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import BadgeAide from "../badges/BadgeAide";
import BadgeChantier from "../badges/BadgeChantier";
import { generateUniqueId } from "../../../utils/utils";
import { writeUserData } from "../../../firebase/database";
import { useRouter } from "next/router";

const FormContent = (props) => {
  const router = useRouter();

  const badge = props.badge || false;
  const badgeChantier = props.badgeChantier || false;
  const title = props.title || "Isolation des combles";

  const description =
    props.description ||
    "Proin volutpat consequat porttitor cras nullam gravida at. Orcimolestie a eu arcu. Sed ut tincidunt integer elementum id sem.Arcu sed malesuada et magna.";
  const avantages = props.avantages || [
    "Plus de 90% de nos clients satisfaits",
    "Jusqu'à 80% d'aide de l'état sur vos travaux d'isolation",
    "L'entreprise n°1 en Gironde pour l'isolation des combles",
    "Entreprise certifiée RGE Qualibat",
  ];
  const prestations = props.prestations || [
    "isolation des combles perdues",
    "Isolation sous rampant",
    "Isolation sous toiture",
  ];

  // Regex pour validation
  const nameRegex = /^[a-z ,.'-]{2,}$/i;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^[0-9]{10}$/;
  const zipCodeRegex = /^[0-9]{5}$/;

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [prestation, setPrestation] = useState("");

  // États pour la validation
  const [isFirstNameValid, setFirstNameValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);
  const [isZipCodeValid, setZipCodeValid] = useState(true);
  const [isPrestationValid, setPrestationValid] = useState(true);
  const [isRgpdValid, setRgpdValid] = useState(true);

  const [isFormValid, setFormValid] = useState(false);

  const [loaderIsActif, setLoaderIsActif] = useState(false);

  useEffect(() => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isZipCodeValid &&
      isPrestationValid &&
      isRgpdValid
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isPhoneValid,
    isZipCodeValid,
    isPrestationValid,
    isRgpdValid,
  ]);

  // Fonctions de validation
  const validateInput = (value, regex, setValidationState, setValue) => {
    switch (setValue) {
      case setName:
        setName(value);
        break;
      case setLastname:
        setLastname(value);
        break;
      case setEmail:
        setEmail(value);
        break;
      case setPhone:
        setPhone(value);
        break;
      case setZipCode:
        setZipCode(value);
        break;

      default:
        return;
    }
    if (!regex.test(value)) {
      setValidationState(false);
    } else {
      setValidationState(true);
    }
  };

  const validateSelector = (value) => {
    if (value === "default") {
      setPrestationValid(false);
    } else {
      setPrestationValid(true);
      setPrestation(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaderIsActif(true);
    const userId = generateUniqueId();
    writeUserData(userId, name, lastname, email, phone, zipCode, prestation)
      .then((success) => {
        console.log(success);
        setLoaderIsActif(false);
        router.push(`${router.asPath}/remerciement`);
      })
      .catch((error) => {
        setLoaderIsActif(false);
        console.log(error);
      });
  };

  return (
    <div className="relative isolate bg-white min-h-[calc(100vh-80px)] h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        <div className="relative my-auto lg:static h-full flex items-center py-10 px-5">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-800/10 lg:w-1/2">
              <img
                priority
                src={props.image}
                alt={props.alt}
                className="w-full h-full object-cover relative"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 hidden lg:flex"></div>
            </div>
            <div className="bg-white py-10 px-10  rounded-xl bg-opacity-90 relative">
              <h2 className="text-lg mt-3 font-semibold tracking-tight text-gray-800">
                Prenons rendez-vous
              </h2>
              <h1 className="text-3xl font-bold tracking-tight text-gray-800">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {avantages.map((aventage, index) => (
                  <div key={index} className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Check</span>
                      <CheckCircleIcon
                        className="h-7 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <p>{aventage}</p>
                    </dd>
                  </div>
                ))}
              </dl>
              {badgeChantier ? <BadgeChantier /> : null}
              {badge ? <BadgeAide /> : null}
            </div>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          type="submit"
          onSubmit={handleSubmit}
          className="relative my-auto lg:static h-full flex justify-end items-center py-10 px-5"
        >
          {
            // Loader
            loaderIsActif ? (
              <div className="absolute top-0 right-0 h-full w-full bg-white bg-opacity-80 flex justify-center items-center">
                <img src="/img/logos/loader.gif" className="w-20 h-20" />
              </div>
            ) : null
          }
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    value={name}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={(event) =>
                      validateInput(
                        event.target.value,
                        nameRegex,
                        setFirstNameValid,
                        setName
                      )
                    }
                    className={`block bg-gray-50 w-full rounded-md px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 border-gray-400 ${
                      !isFirstNameValid ? "ring-red-500" : "ring-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Prenom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    onChange={(event) =>
                      validateInput(
                        event.target.value,
                        nameRegex,
                        setLastNameValid,
                        setLastname
                      )
                    }
                    className={`block bg-gray-50 w-full rounded-md border-gray-400 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 ${
                      !isLastNameValid ? "ring-red-500" : "ring-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    onChange={(event) =>
                      validateInput(
                        event.target.value,
                        emailRegex,
                        setEmailValid,
                        setEmail
                      )
                    }
                    className={`block bg-gray-50 w-full rounded-md px-3.5 py-2 border-gray-400 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 ${
                      !isEmailValid ? "ring-red-500" : "ring-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    onChange={(event) =>
                      validateInput(
                        event.target.value,
                        phoneRegex,
                        setPhoneValid,
                        setPhone
                      )
                    }
                    className={`block bg-gray-50 w-full rounded-md px-3.5 py-2 border-gray-400 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 ${
                      !isPhoneValid ? "ring-red-500" : "ring-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Code postal
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="zipCode"
                    name="zipCode"
                    id="zipCode"
                    autoComplete="Code postal"
                    onChange={(event) =>
                      validateInput(
                        event.target.value,
                        zipCodeRegex,
                        setZipCodeValid,
                        setZipCode
                      )
                    }
                    className={`block bg-gray-50 w-full rounded-md px-3.5 py-2 border-gray-400 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 ${
                      !isZipCodeValid ? "ring-red-500" : "ring-gray-300"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-800"
                >
                  Préstation souhaitée
                </label>
                <div className="mt-2.5">
                  <select
                    required
                    onChange={(event) => validateSelector(event.target.value)}
                    className="block bg-gray-50 w-full rounded-md border-gray-400 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled selected>
                      Selectionnez une prestation
                    </option>
                    {prestations.map((prestation, index) => (
                      <option key={index} value={prestation}>
                        {prestation}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="w-4/6">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  required
                  onChange={(e) =>
                    setRgpdValid(e.target.checked ? true : false)
                  }
                />
                <label
                  htmlFor="rgpd"
                  className="ml-2 text-sm font-normal text-gray-800"
                >
                  J'accepte les conditions de la politique de confidentialité et
                  RGPD.
                </label>
              </div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${
                  isFormValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContent;
