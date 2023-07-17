import React from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../component/user-form";
import { useProfile } from "../utils/useLocalStorage";

export function Update() {
  const navigate = useNavigate();
  const { value, setValue } = useProfile();
  return (
    <UserForm
      currentUser={value}
      title="Edit Profile"
      buttonText="update"
      onSubmit={(values) => {
        setTimeout(() => {
          setValue(value);
          navigate("/");
        }, 1000);
      }}
    />
  );
}
