// import React from "react";
// import { useParams } from "react-router-dom";
// export function Details() {
//   const { index } = useParams();
//   return (
//     <>
//       <div></div>
//     </>
//   );
// }
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state; // استلام بيانات الكتاب

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={book.bookImage}
          alt={book.bookTitle}
          className="h-80 w-60 object-cover mx-auto mb-6 rounded-lg"
        />
        <h1 className="text-2xl font-bold mb-4">{book.bookTitle}</h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Author:</strong> {book.bookAuthor}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Publisher:</strong> {book.bookPublisher}
        </p>
        <p className="text-gray-600 mt-4">{book.bookDescription}</p>
      </div>
    </div>
  );
};

export default BookDetails;
