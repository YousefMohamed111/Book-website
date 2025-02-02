import React from "react";
import "./Hero.css";
import { Mycontext } from "../App";
import { useContext } from "react";
export function Hero() {
    const { search, name, setName } = useContext(Mycontext);
  
  return (
    <>
      <div className="containe">
        <p className="text-fuchsia-50 text-center text-4xl font-bold">
          Find Your Book
        </p>
        <p className="text-fuchsia-50 text-sm text-center pb-2">
          Welcome to the library. Here you will find everything you want from
          all kinds of books.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="search"
            className="p-3 lg:w-1/3 xl:w-1/3 md:w-1/3 rounded-2xl bg-white sm:1/1.5"
            placeholder="Enter Your Book here."
            onChange={search}
          />
        </div>
      </div>
    </>
  );
}
