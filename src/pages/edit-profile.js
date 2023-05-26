import React from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../component/user-form";
import { useProfile } from "../utils/useLocalStorage";

export function Update() {
  const navigate = useNavigate();
  const {value, setValue} = useProfile()
  return (
    <UserForm
      currentUser={value}
      title="Edit Profile"
      onSubmit={(values) => {
        setTimeout(() => {
          setValue(value)
          navigate("/");
          console.log(values);
        }, 1000);
      }}
    />
  );
}
