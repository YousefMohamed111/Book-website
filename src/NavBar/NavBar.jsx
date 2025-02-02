import React, { useState, useContext } from "react";
import logo from "./img/icons8-book-80.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faBook } from "@fortawesome/free-solid-svg-icons";
import { Mycontext } from "../App";

export function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [messagelist, setmessagefavouritelist] = useState(false);
  const clickToToggle = () => setToggle(!toggle);
  const clicktoshowlist = () => setmessagefavouritelist(!messagelist);
  const { list, num } = useContext(Mycontext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="flex bg-red-600 justify-between items-center px-4 py-2 relative">
        <div>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>
        <div className="hidden md:!flex items-center space-x-6">
          <p
            className="text-amber-50"
            href="#books"
            onClick={() => scrollToSection("books")}
          >
            Books
          </p>
          <p
            className="text-amber-50"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </p>

          <p className="text-amber-50" onClick={() => scrollToSection("about")}>
            About Us
          </p>

          <FontAwesomeIcon
            icon={faBook}
            className="text-white text-2xl"
            onClick={clicktoshowlist}
          />
          <p className="absolute right-9 top-1">{num}</p>
          {messagelist &&
            (list.length == 0 ? (
              <div className="bg-white p-4 rounded-md shadow-lg absolute top-12 right-0">
                <p>Your list is empty</p>
              </div>
            ) : (
              list.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-lg absolute top-20 right-0 w-max"
                >
                  <div className="flex flex-col gap-4">
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <img
                        src={item.bookImage}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ))
            ))}
        </div>

        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faList}
            className="text-white text-2xl cursor-pointer"
            onClick={clickToToggle}
          />
        </div>

        {toggle && (
          <div className="absolute top-12 right-0 bg-red-600 p-4 rounded-md shadow-lg flex flex-col space-y-3">
            <p className="text-amber-50">Books</p>
            <p className="text-amber-50">Contact</p>
            <p className="text-amber-50">About Us</p>
            <FontAwesomeIcon
              icon={faBook}
              className="text-white text-2xl"
              onClick={clicktoshowlist}
            />
            {messagelist &&
              (list.length == 0 ? (
                <div className="bg-white p-4 rounded-md shadow-lg absolute top-40 right-0">
                  <p>Your list is empty</p>
                </div>
              ) : (
                list.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-lg absolute top-20 right-40 w-max"
                  >
                    <div className="flex flex-col gap-4">
                      <div
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <img
                          src={item.bookImage}
                          className="h-16 w-16 object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ))}
          </div>
        )}
      </nav>
    </>
  );
}
