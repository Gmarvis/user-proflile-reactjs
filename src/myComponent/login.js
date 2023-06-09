import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";



/*
console.log(" works");
const arr = [1, 2, 3];
localStorage.setItem("our array", JSON.stringify(arr));

const localItem = JSON.parse(localStorage.getItem("our array"));
console.log(" this local item", localItem, typeof localItem);
*/
// localStorage.clear();
// localStorage.removeItem('our array')

export function Login() {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')))

// console.log(user)


        // handle submit
      // const  onSubmit={(values) => {
      //     setTimeout(() => {
      //       alert(JSON.stringify(values, null, 2));
      //       localStorage.setItem('userData', JSON.stringify(values))
      //       console.log(values)
      //     }, 1000);
      //   }}

      const handleSubmit = ()=>{
        console.log()
      }



  return (
    <div className="container flex flex-col text-center md:w-96 mx-auto border-2 p-2 rounded border-indigo-900 h-80 justify-between my-32">
      <h1 className="header ">Login form</h1>
      <p>create your acount</p>
      <Formik
        // initial values with keys
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = "first name required";
          }

          if (!values.lastname) {
            errors.lastname = "last name required";
          }

          if (!values.email) {
            errors.email = "email required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        // handle submit
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('userData', JSON.stringify(values))
            console.log(values)
          }, 1000);
        }}
      >
        <Form className="form flex-1 flex flex-col text-center justify-center justify-between">

          <Field
            className="field border p-1 rounded border-indigo-900 outline-none text-sm "
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
          ></Field>
          <ErrorMessage
            name="firstname"
            className=" error text-left italic font-thin text-base text-red-700"
            component="div"
          />
          {/* <br></br>
              <br></br> */}
          <Field
            className="field border p-1 rounded border-indigo-900 outline-none text-sm font-light"
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
          ></Field>
          <ErrorMessage
            name="lastname"
            className=" error text-xs text-left italic font-thin text-red-700"
            component="div"
          />
          {/* 
              <br></br>
              <br></br> */}

          <Field
            className="field border p-1 rounded border-indigo-900  outline-none text-sm font-light"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          ></Field>
          <ErrorMessage
            name="email"
            className=" error text-left italic font-thin text-base text-red-700"
            component="div"
          />

          {/* <br></br>
              <br></br> */}

          <button type="submit" onSubmit={ handleSubmit}
          className="btn  bg-indigo-900 w-2/5 mx-auto text-red-50 rounded-2xl p-2 ">
            sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
