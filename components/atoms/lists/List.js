import React from "react";

const List = ({ options, status, onChange }) => {
  return (
    <div className="flex">
      <select
        id="status"
        name="status"
        className="mt-2 block w-content rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={status}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default List;
