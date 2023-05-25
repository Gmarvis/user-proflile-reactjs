import React from 'react';
import './App.css';
import {Login} from './myComponent/login';
import { Profile } from './myComponent/profile';
import { Update } from './myComponent/editProfile';


function App() {
  return (
    <div className="container flex flex-col mx-auto">
      <Login />
      {/* {<Profile />} */}
      {/* {<Update />} */}
    </div>
  );
}

export default App;
