import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa";

const Logo = () => {
  return (
    <img
      style={{ width: "100px" }}
      src="https://img.etimg.com/thumb/msid-59738998,width-640,resizemode-4,imgsize-65961/pepsi.jpg"
      alt="logo image here"
    ></img>
  );
};

const SearchBar = () => {
  return (
    <input
      style={{ height: "20px", width: "300px", paddingLeft: "10px" }}
      type="text"
      placeholder="Search"
    ></input>
  );
};

const UserIcon = () => {
  return (
    <span>
      <FaUserCircle />
    </span>
  );
};

const Container = () => {
  return (
    <>
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Logo />
        <SearchBar />
        <UserIcon />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
