import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdated = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, input);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Update the Book</h1>
      <form className="flex flex-col  gap-5 py-5">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          onChange={handleChange}
          className="w-[350px] p-3 border border-gray-200 outline-none"
        />
        <textarea
          type="text"
          placeholder="Book desc"
          name="desc"
          onChange={handleChange}
          className="w-[350px] p-3 border border-gray-200 outline-none"
        />
        <input
          type="number"
          placeholder="Book price"
          name="price"
          onChange={handleChange}
          className="w-[350px] p-3 border border-gray-200 outline-none"
        />
        <input
          type="text"
          placeholder="Book Cover"
          name="cover"
          onChange={handleChange}
          className="w-[350px] p-3 border border-gray-200 outline-none"
        />
        <button onClick={handleUpdated} className="py-3 px-8 bg-orange-500 text-white font-semibold">Update</button>
      </form>
    </div>
  );
};

export default Update;
