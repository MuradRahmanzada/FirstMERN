import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Add new Book</h1>
      <form className="flex flex-col gap-5 py-5">
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
        <button onClick={handleClick} className="py-2 px-8 bg-orange-500 text-white font-semibold rounded-md">Add new Book</button>
      </form>
    </div>
  );
};

export default Add;
