import { CheckIcon } from "@heroicons/react/20/solid";

export const getContent = (content) => {
  switch (content.tag) {
    case "h2":
      return (
        <h2 className="text-justify text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
          {content.content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-justify text-lg lg:text-xl font-semibold text-gray-800  mt-12">
          {content.content}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-justify mt-16 text-normal font-semibold tracking-tight text-gray-800">
          {content.content}
        </h4>
      );
    case "p":
      return (
        <p className="text-justify text-nomral font-normal mt-5">
          {content.content}
        </p>
      );
    case "ul":
      return (
        <ul className="text-normal font-semibold">
          {content.content.map((listItem) => (
            <div className="flex mt-5">
              <CheckIcon
                className="mt-1 h-5 w-5 mr-2 flex-none text-blue"
                aria-hidden="true"
              />
              <li
                className="text-normal font-normal"
                key={listItem.tag + listItem.content}
              >
                {listItem.content}
              </li>
            </div>
          ))}
        </ul>
      );
    default:
      return null;
  }
};
