import React from "react";


import { UserForm } from "../component/user-form";
import { useProfile } from "../utils/useLocalStorage";

export function Login() {
  const {setValue} = useProfile()
  
  return <UserForm currentUser={{}} title="Create Account" onSubmit={(values) => {
    setTimeout(() => {
      setValue(values)

      console.log(values);
    }, 1000);
  }} /> 

}
