import React from "react";
import img1 from "./img/photo-1571193161738-deaba9b6cc26.avif";

export function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 lg:p-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img1}
            className="w-full max-w-[620px] h-auto rounded-2xl"
            alt="About Us"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <p className="text-3xl font-bold pb-4">About Us</p>
          <p className="text-lg max-w-lg">
            We are a group of passionate individuals dedicated to providing a
            comprehensive platform for book lovers. Our website offers a wide
            range of books across various genres, complete with essential
            details such as the title, author, description, publisher, and more.
            Similar to IMDb for movies, we aim to create a space where readers
            can discover, explore, and learn about books from all over the
            world. Whether you're looking for a new read or researching your
            favorite authors, we strive to make your book discovery experience
            as enjoyable and informative as possible.
          </p>
        </div>
      </div>
    </>
  );
}
