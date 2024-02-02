"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NavBar } from "@/components/navbar";
import Artikels from "@/app/data/artikels";
export default function DetailArtikel({params}) {
  const artikel = Artikels.find((artikel) => artikel.id.toString() === params.id);
  return (
    <div>
      <NavBar></NavBar>
      <div className=" max-w-4xl mx-auto mt-6 p-4">
        <h1 className="text-3xl font-bold mb-4 text-left">
          {artikel.title}
        </h1>
        <p className="text-gray-600 mb-6">{artikel.date}</p>
        <img
          src={artikel.image}
          alt="kkn"
          className="w-full h-64 object-cover mb-6"
        />
        <div className="prose text-justify">
          {artikel.body}
        </div>
      </div>
    </div>
  );
}
