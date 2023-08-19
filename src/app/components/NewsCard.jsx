"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsCard({ id, article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/article/${id}`}
      className=" border border-black rounded-md p-2 bg-slate-100"
    >
      
      <p className="text-sm font-medium text-gray-500">{formattedDate},
        <></>
      </p>
      <h1 className="text-xl font-bold">{article.title}</h1>
      <p>{article.description}</p>
      <img
        className="border  border-black rounded-md"
        src={article.urlToImage}
       
      />
    </Link>
  );
}

export default NewsCard;
