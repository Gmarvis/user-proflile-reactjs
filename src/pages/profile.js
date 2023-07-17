import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../utils/useLocalStorage";
import { Login } from "./login";

export function Profile() {
  const { value: activeUser } = useProfile();

  const navigate = useNavigate();
  // handle logout
  const handleLogout = () => {
    localStorage.clear("profile");
    window.location.reload();
  };

  // handle update
  const handleUpdate = () => {
    navigate("/edit");
  };

  return (
    <div className="mainSection flex flex-row  mx-auto justify-arond  w-screen">
      <div
        className="profile container flex flex-col 
      text-center w-6/12   p-2 rounded h-6/6 my-32 justify-between bg-indigo-900 "
      >
        <div className="kl text-yellow-600">
          <h1 className="headerText">welcome {activeUser.firstname}!</h1>
          <img
            alt="profile"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            className="image mx-auto border-8"
          ></img>

          <h2>
            {activeUser.firstname} {activeUser.lastname}
          </h2>
          <p>{activeUser.email}</p>
        </div>

        <div className="actionBtn border-indigo-700 text-white">
          <button onClick={handleUpdate} className="profileBtn">
            Edit Profile
          </button>

          <button onClick={handleLogout} className="profileBtn logout">
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
