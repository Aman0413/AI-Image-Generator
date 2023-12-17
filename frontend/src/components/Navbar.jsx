import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between  items-center px-5 py-5 bg-secondary border-2 text-text-primary z-10 top-0 fixed w-full">
      <h1 className="text-2xl"> Generator</h1>

      <div className="flex justify-center items-center gap-8 ">
        <Link to={"/"}>
          <div>Home</div>
        </Link>
        <Link to={"/create"}>
          <div>Create</div>
        </Link>
        <div className="bg-primary-blue px-4 py-2 rounded-md text-white">
          Login
        </div>
      </div>
    </div>
  );
}

export default Navbar;
