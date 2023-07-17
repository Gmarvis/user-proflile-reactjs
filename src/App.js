// import React from 'react';
import "./App.css";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Update } from "./pages/edit-profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileProvider, useLocalStorage } from "./utils/useLocalStorage";

function App() {
  const { value, setValue } = useLocalStorage("profile");
  const auth = <Route element={<Login />} index path="/" />;

  const dashboard = (
    <>
      <Route element={<Profile />} path="/" index />
      <Route element={<Update />} path="/edit" />
    </>
  );
  return (
    <BrowserRouter>
    <ProfileProvider value={{value, setValue}}>
      <Routes>{value ? dashboard : auth}</Routes>
      </ProfileProvider>
    </BrowserRouter>
  );
}
export default App;
