// import React from 'react';
import './App.css';
import {Login} from './myComponent/login';
import { Profile } from './myComponent/profile';
import { Update } from './myComponent/editProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Login />} index />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Update /> } path='/edit' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


 // if(localStorage.getItem('userData') !== null){
  //   return(
  //     <div>
        
  //        {<Profile />}
  //     </div>
  //   )
  // } else return (
  //   <div className="container flex flex-row mx-auto">
  //     <Login />
  //     {/* {<Update />} */}
  //   </div>
  // );