  import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../utils/useLocalStorage";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useState } from "react";

// const activeUser = JSON.parse(localStorage.getItem("userData"));
// console.log(activeUser);

export function Profile() {
  
  const {value: activeUser} = useProfile()

  const navigate = useNavigate();
  // handle logout 
  const handleLogout = () => {
    localStorage.clear();
    // alert("you are about to logout")
    navigate("/");
  };

  // handle update
  const handleUpdate = ()=>{
    navigate('/edit')
  }



  return (
    <div className="mainSection flex flex-row  mx-auto justify-arond  w-screen">
      <div
        className="container flex flex-col 
      text-center w-6/12   p-2 rounded h-6/6 my-32 justify-between bg-indigo-900 "
      >
        <div className="kl text-yellow-600">
          <img
            alt="profile"
            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            className="image mx-auto border-8"
          ></img>

          <h2>
            {activeUser.firstname} {activeUser.lastname}
          </h2>
          <p>{activeUser.email}</p>
        </div>

        <div className="actionBtn flex flex-auto justify-around border-indigo-700 mt-6 text-white">

          <button onClick={handleUpdate} className="bt border rounded border-indigo-900 h-6 px-2 text-center text-sm font-light border-indigo-200">
            Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="bt border rounded border-indigo-200 h-6 px-2 text-center text-sm font-light shadow-inner"
          >
            Logout
          </button>
        </div>
      </div>

      <div
        className="head flex flex-col 
      text-center w-6/12   p-2 rounded h-6/6 my-32 justify-between  justify-items-center content-center "
      >
        <h1 className="welcome justify-items-center my-20 text-yellow-600 italic">
          Welcome, {activeUser.firstname}...
        </h1>
      </div>
    </div>
  );
}
prompt();
