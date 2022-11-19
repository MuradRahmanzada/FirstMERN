import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">BookShop</h1>
      <div className="flex items-center gap-5 py-10">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={book.cover} alt="" width={200} />
              <h1 className="my-5 text-2xl font-bold">{book.title}</h1>
              <p>{book.desc}</p>
              <span>${book.price}</span>
              <div className="flex flex-col gap-5">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="py-2 px-5 border border-red-200 text-red-500 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>
                <button className="text-center">
                  <Link
                    to={`/update/${book.id}`}
                    className="py-2 px-5 border border-blue-200 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    Update
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button className="py-3 px-7 bg-green-600 text-white rounded-md font-semibold">
          <Link to="/add">Add new book</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
