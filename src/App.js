
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {usestate} from "react"
import { useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import Footer from "./Components/Footer";
import PrivateRouter from "./pages/PrivateRouter";
import Details from "./pages/Details";






function App() {
  const[isAuthorized, setIsAuthorized]=useState(false);
  const[flags,setFlags]=useState({
    flag1:false,
    flag2:false
  })

  return (
    
      <>
        <Routes>
          <Route index path="/" element ={<PrivateRouter isAuthorized={isAuthorized} />} >
                <Route  path="" element ={<Home isAuthorized={isAuthorized} />}>
                    <Route path="about" element={<About isAuthorized={isAuthorized} />} />   
                    <Route index element={<Recipe flags={flags} setFlags={setFlags} isAuthorized={isAuthorized} />} />   
                </Route>
          </Route>
          <Route  path="login" element={<Login isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />} />
          <Route path="details" element={<Details isAuthorized={isAuthorized}  />} />  
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
             
      </>


   
  );
}

export default App;
