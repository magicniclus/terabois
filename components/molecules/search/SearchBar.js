import React, { useEffect, useState, Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBar(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const openSearch = useSelector((state) => state.openSearch);

  const [query, setQuery] = useState("");
  const debouncedSearchTerm = useDebounce(query, 1000);
  const [filteredPeople, setFilteredPeople] = useState([]);

  const [open, setOpen] = useState(openSearch);

  const data = props.data;
  const setData = props.setData;

  useEffect(() => {
    if (!open) {
      setQuery("");
      setFilteredPeople([]);
    }
  }, [open]);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value]);

    return debouncedValue;
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      const result =
        debouncedSearchTerm === ""
          ? []
          : data.filter((person) => {
              const personDate = new Date(
                person.date.seconds * 1000
              ).toLocaleDateString("fr-FR");
              return (
                person.name
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
                person.email
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
                person.phone
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
                personDate
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
                person.zipCode
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase()) ||
                (debouncedSearchTerm.toLowerCase() === "isolation" &&
                  person.isolation) ||
                (debouncedSearchTerm.toLowerCase() === "fenetre" &&
                  person.fenetre) ||
                (debouncedSearchTerm.toLowerCase() === "vmc" && person.vmc)
              );
            });
      setFilteredPeople(result);
    }
  }, [debouncedSearchTerm]);

  const handleChangePage = (id) => {
    router.push(`lead-manager/prospect/${id}`);
    dispatch({ type: "OPEN_SEARCH", payload: false });
  };

  useEffect(() => {
    setOpen(openSearch);
  }, [openSearch]);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(person) => (window.location = person.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {filteredPeople.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none px-4 py-2",
                            active && "bg-indigo-600 text-white"
                          )
                        }
                        onClick={() => {
                          handleChangePage(person.date.seconds);
                        }}
                      >
                        {person.name}{" "}
                        <span className="text-xs">
                          {new Date(
                            person.date.seconds * 1000
                          ).toLocaleDateString("fr-FR")}
                        </span>
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && filteredPeople.length === 0 && (
                  <p className="p-4 text-sm text-gray-500">No people found.</p>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
