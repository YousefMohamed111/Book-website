import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Mycontext } from "../App";

export function Books() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { selectbook, name } = useContext(Mycontext);

  const Getinformation = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {name.map((item, index) => (
          <div
            key={index}
            className="sm:w-1/3 md:w-1/5 lg:w-1/5 xl:w-1/7 p-5 rounded-xl hover:transform hover:scale-105 hover:transition hover:duration-500 relative flex justify-center items-center"
            onClick={() => Getinformation(index)}
          >
            <img
              src={item.bookImage}
              alt={item.bookTitle}
              className="h-60 w-40 object-cover rounded-lg"
            />
            {selectedIndex === index && (
              <div className="information bg-white rounded-lg shadow-lg absolute top-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center">
                  <p
                    className="close text-red-500 font-bold cursor-pointer text-right"
                    onClick={() => setSelectedIndex(null)}
                  >
                    &times;
                  </p>
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => {
                      selectbook(item);
                    }}
                  />
                </div>
                <p className="font-semibold mt-4 text-lg">{item.bookTitle}</p>
                <p className="text-black text-sm mt-2">
                  <span className="text-red-600">Description:</span>
                  {""}
                  {item.bookDescription}
                </p>
                <p className="text-black text-sm mt-2">
                  <span className="text-red-600"> Author:</span>{" "}
                  {item.bookAuthor}
                </p>
                <p className="text-black text-sm mt-1">
                  <span className="text-red-600"> Book Publisher:</span>{" "}
                  {item.bookPublisher}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
