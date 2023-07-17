import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const UserForm = ({ currentUser, onSubmit, title, buttonText }) => (
  <div className="container flex flex-col text-center md:w-90 mx-auto border-2 p-2 rounded border-indigo-900 h-80 justify-between my-32">
    <h1 className="headerText ">{title}</h1>
    <Formik
      initialValues={currentUser}
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
      onSubmit={onSubmit}
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

        {/* <Field
            className=""
            type="file"
            name="avatar"
            placeholder="upload picture"
            // ref={register}
          ></Field> */}

        <button type="submit" className="btn">
          {buttonText}
        </button>
      </Form>
    </Formik>
  </div>
);
