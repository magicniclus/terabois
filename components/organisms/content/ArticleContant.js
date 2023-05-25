import { getContent } from "../../../utils/getContent";
import React from "react";

const ArticleContant = (props) => {
  const data = props.data;
  return (
    <div className="bg-blue w-full">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
        {data.title}
      </h1>
      {/* {data.content &&
        data.content.map((c, index) => <div key={index}>{getContent(c)}</div>)} */}
    </div>
  );
};

export default ArticleContant;
