import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const DataTable = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.dataDisplayManagment.page);

  const data = props.data;
  const setData = props.setData;

  // const [data, setData] = useState([]);
  const [pages, setPages] = useState(page);

  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    setPages(page);
  }, [page]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (Array.isArray(data)) {
      setSelectedData(data.slice(pages * 10 - 10, pages * 10));
    }
  }, [data]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setSelectedData(data.slice(pages * 10 - 10, pages * 10));
    }
  }, [pages]);

  const updateSort = (key) => {
    dispatch({ type: "SET_PAGE", payload: 1 });
    setSelectedData((oldData) => {
      const newData = [...data].sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
      });
      return newData.slice(0, 10);
    });
  };

  const updateSearch = (e) => {
    dispatch({ type: "OPEN_SEARCH" });
  };

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  Prospects
                </h1>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={updateSearch}
                >
                  Recherche
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0 cursor-pointer"
                          onClick={() => updateSort("name")}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white cursor-pointer"
                          onClick={() => updateSort("date")}
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white cursor-pointer"
                          onClick={() => updateSort("email")}
                        >
                          Code postal
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white cursor-pointer"
                        >
                          Prestations
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Tel</span>
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Email</span>
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {data &&
                        selectedData.map((person) => (
                          <tr key={person.date}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 ">
                              {capitalizeFirstLetter(person.name)}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300 ">
                              {new Date(
                                person.date.seconds * 1000
                              ).toLocaleDateString("fr-FR")}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300 ">
                              {person.zipCode}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300 ">
                              {[
                                person.isolation ? "Isolation" : null,
                                person.fenetre ? "Menuiserie" : null,
                                person.vmc ? "Vmc" : null,
                                person.chauffage ? "Chauffage" : null,
                                person.pompeAChaleurClim
                                  ? "Pompe à chaleur"
                                  : null,
                                person.solaireChauffeEau
                                  ? "chauffe-eau solaire"
                                  : null,
                              ]
                                .filter(Boolean)
                                .join(", ")}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300 cursor-pointer">
                              <a href={`tel:${person.phone}`} className="flex">
                                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                                {person.phone}
                              </a>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300 cursor-pointer">
                              <a href={`mailto:${person.email}`}>
                                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                              </a>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                href={`lead-manager/prospect/${person.phone}`}
                                className="text-indigo-400 hover:text-indigo-300"
                              >
                                Edit
                                <span className="sr-only">, {person.name}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
