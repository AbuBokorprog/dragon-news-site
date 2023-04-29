import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsD from "../../NewsD/NewsD";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  //console.log(categoryNews);
  return (
    <div>
      <h2>category {categoryNews.length}</h2>
      {categoryNews.map((news) => {
        <NewsD key={news._id} news={news}></NewsD>;
      })}
    </div>
  );
};

export default Category;
