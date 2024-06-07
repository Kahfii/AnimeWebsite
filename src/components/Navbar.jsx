import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchTerm, showSearch = true  }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.type === "click" || event.key === "Enter") {
      event.preventDefault();
      setSearchTerm(searchKeyword);
      navigate(`/search/${searchKeyword}`);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchKeyword(value);
    if (value === "") {
      setSearchTerm("");
    }
  };

  return (
    <nav className="bg-customBorder flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between items-center p-5 gap-2 ">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">Anime<span>Tix</span></h1>
      </Link>
      <div className="relative">
        <input
          type="text"
          placeholder="Masukkan Judul"
          className="px-5 py-2 rounded-xl w-full"
          value={searchKeyword}
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <button className="absolute top-1 right-1" onClick={handleSearch}>
          <MagnifyingGlass size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
