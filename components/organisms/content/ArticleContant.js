import { getContent } from "../../../utils/getContent";
import React, { useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import BreadCrum from "../../molecules/breadCrum/BreadCrum";
import BlogProposition from "./BlogProposition";
import Cta from "../../organisms/cta/Cta";
import BadgeAide from "../badges/BadgeAide";
import { useDispatch } from "react-redux";

const ArticleContant = (props) => {
  const data = props.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_POST_ID", payload: data.id });
    }
  }, [data]);

  return (
    <>
      <div>
        <BreadCrum slug={data.slug} />
      </div>
      <div className="w-full mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row py-5">
        <div className="w-full lg:w-7/12 lg:pr-8 order-2 lg:order-1">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            {data.title}
          </h1>
          <h2 className="text-normal lg:text-lg font-semibold text-gray-800 mt-4">
            Auteur:{" "}
            <span className="font-normal text-blue">{data.author.name}</span>
          </h2>
          <div className="mt-10 items-center gap-x-6 flex flex-col ">
            <h3 className="text-lg font-normal">
              {" "}
              Vous souhaitez en savoir plus sur le sujet?
            </h3>
            <a
              href="/contact"
              className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueClear mt-5"
            >
              Prendre rendez-vous
            </a>
            <p className=" text-xs leading-8 text-gray-600">
              Rendez-vous sous 24/48h !
            </p>
          </div>
          <div className="relative">
            <img
              src={data.image.url}
              alt={data.image.alt}
              className="h-60 object-cover w-full rounded-xl mt-10"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black opacity-50 hidden lg:flex"></div>
          </div>
          {data.content &&
            data.content.map((c, index) => (
              <div key={index}>{getContent(c)}</div>
            ))}
          <div className="mt-10 items-center gap-x-6 flex flex-col ">
            <a
              href="/contact"
              className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueClear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueClear mt-5"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mb-10 lg:mb-0 order-1 lg:order-2">
          <div className=" p-10 px-16 w-full border-slate-800 rounded-xl h-min bg-gray-50 ring-1 ring-inset ring-gray-900/5">
            <div>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800">
                Sommaire:
              </h2>
              <ul className="text-normal font-normal list-decimal">
                {data.tableOfContents.map((c, index) => (
                  <li className="color-gray-800 mt-4" key={index}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex  mt-10">
              <ClockIcon className="h-6 w-6 flex-none text-gray-800 mr-3" />
              <h3 className="text-normal lg:text-lg font-semibold text-gray-800">
                Temps de lecture:{" "}
                <span className="font-normal">Moins de 2 minutes</span>
              </h3>
            </div>
          </div>
          <div className="mt-16  lg:flex flex-col items-center p-10 px-16 bg-gradient-to-b from-cyan-500 to-gray-600 rounded-xl  ring-1 ring-inset ring-gray-900/5 text-center shadow-xl hidden ">
            <h2 className="text-normal lg:text-lg font-bold text-white mt-4">
              Vous souhaitez isoler, rénover ou aménager votre maison?
            </h2>
            <h3 className="text-normal mt-3 text-white">
              N'attendez-plus, et contactez-nous.
            </h3>
            <a
              href="#"
              className="rounded-md w-3/6 mx-auto bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yeloow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 mt-7"
            >
              Prendre rendez-vous
            </a>
            <h3 className="mt-3  font-semibold text-white">
              Un de nos expert vous contactera pour faire un bilan complet de
              votre bien.
            </h3>
            <BadgeAide />
          </div>
        </div>
      </div>
      <BlogProposition />
      <Cta />
    </>
  );
};

export default ArticleContant;
