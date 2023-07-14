import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Pagination = () => {
  const page = useSelector((state) => state.dataDisplayManagment.page);
  const numberOfDatas = useSelector(
    (state) => state.dataDisplayManagment.numberOfDatas
  );
  const numberOfPages = useSelector(
    (state) => state.dataDisplayManagment.numberOfPages
  );
  const dispatch = useDispatch();

  const updatePagePrev = () => {
    dispatch({
      type: "SET_PAGE",
      payload: page - 1,
    });
  };

  const updatePageNext = () => {
    dispatch({
      type: "SET_PAGE",
      payload: page + 1,
    });
  };

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Nbr de prospect <span className="font-medium">{page * 10}</span> sur{" "}
          <span className="font-medium">{numberOfDatas}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {page > 1 ? (
          <a
            href="#"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={() => updatePagePrev()}
          >
            Précédent
          </a>
        ) : null}
        {page < numberOfPages ? (
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={() => updatePageNext()}
          >
            Suivant
          </a>
        ) : null}
      </div>
    </nav>
  );
};

export default Pagination;
