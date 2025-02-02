import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Home } from "./Home/Home";
import { createContext, useState, useEffect } from "react";
import { End } from "./End/End";
import { About } from "./About us/About";
import { Books } from "./Section/SectionBooks";
export const Mycontext = createContext();

const routes = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <End />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/books",
    element: <Books />,
  },
]);
function App() {
  const [num, setnum] = useState(0);
  const [list, setlist] = useState([]);
  const [name, setName] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const databook = async () => {
      const options = {
        method: "GET",
        url: "https://all-books-api.p.rapidapi.com/getBooks",
        headers: {
          "x-rapidapi-key":
            "05a9af8668mshf40fc4fbe7e50afp135a4fjsn5135df6bdeab",
          "x-rapidapi-host": "all-books-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const databook = Object.values(response.data);
        setData(databook);
        setName(databook);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    databook();
  }, []);

  const search = (event) => {
    const value = event.target.value.toLowerCase();
    setName(
      data.filter((item) => item.bookTitle.toLowerCase().includes(value))
    );
  };
  const selectbook = (item) => {
    setlist((prevCart) => {
      console.log("Previous cart:", prevCart);
      const bookExists = prevCart.some(
        (bookItem) => bookItem.bookIsbn === item.bookIsbn
      );

      if (bookExists) {
        return prevCart;
      }

      const newBookList = [...prevCart, item];
      console.log("Updated cart:", newBookList);
      return newBookList;
    });

    setnum((prevNum) => prevNum + 1);
  };

  return (
    <>
      <Mycontext.Provider
        value={{
          num,
          setnum,
          setlist,
          selectbook,
          list,
          search,
          name,
          setName,
        }}
      >
        <RouterProvider router={routes} />
      </Mycontext.Provider>
    </>
  );
}

export default App;
