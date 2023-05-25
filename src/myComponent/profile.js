import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const activeUser = JSON.parse(localStorage.getItem("userData"));
console.log(activeUser);

export function Profile() {
  return (
    <section className="mainSection flex flex-col mx-auto">
    <h1 className="headerText text-center md:w-96 mx-auto">hey {activeUser.firstname}</h1>


      <div className="container flex flex-col text-center md:w-96 mx-auto border-2 p-2 rounded border-indigo-900 h-80 my-32 justify-between">

        <div>
        <img
          alt="profile picture"
          src="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
          className="image mx-auto"
        ></img>
        <h1>
          {activeUser.firstname} {activeUser.lastname}
        </h1>
        <p>{activeUser.email}</p>

        </div>

        <div className="actionBtn flex flex-auto justify-around border-indigo-700 mt-3">

        <button className="bt border rounded border-indigo-900 h-6 px-2 text-center text-sm font-light">Edit Profile</button> 

        <button className="bt border rounded border-indigo-900 h-6 px-2 text-center text-sm font-light">Logout</button></div>
      </div>
    </section>
  );
}
