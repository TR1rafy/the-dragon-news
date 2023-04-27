import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Home/NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      <h4>This is a category:{categoryNews.length}</h4>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
