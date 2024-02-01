'use client'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { NavBar } from "@/components/navbar";
import { Navbar } from "@material-tailwind/react";

export default function DetailArtikel() {
  return (
    <div>
      <div className=" max-w-2xl mx-auto mt-6 p-4">
        <h1 className="text-4xl font-bold mb-4">Article Title</h1>
        <p className="text-gray-600 mb-6">Published on January 31, 2024</p>
        <img
          src="https://placekitten.com/800/400"
          alt="Article Cover"
          className="w-full h-64 object-cover mb-6"
        />
        <div className="prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
          {/* Add your article content here */}
        </div>
      </div>
    </div>
  );
}
