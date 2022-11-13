import meal from "../assets/meal.svg"
import coding from "../assets/coding.svg"
import d_image from "../assets/default-image.jpg"
import diet from "../assets/diet.svg"
import home from "../assets/home.svg"
import mail from "../assets/mail.svg"

import meal2 from "../assets/meal2.svg"



import Footer from "../Components/Footer";
import {useState, useEffect} from "react";
import axios from "axios";
import Data from "../assets/data";
import { useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components"

const Login_div=styled.div`
position: relative;
min-height: 100vh;
form{
 
  background-color: #a4d76d;
  border-radius: 20px;

  height: 300px;
  width: 220px;
  position: absolute;
  top: 20%;
  left: 41%;
  div{
    
    margin: 10px;
    input{
      background-color: #57a90b;
      color: white;
      display: block;
      font-size: 24px;
      width: 200px;
      height: 50px;
      margin: auto;
        padding: 4px;
        border-radius: 20px;
        outline: none;
        border: none;
        &::placeholder{
          color: white;
        }
    }
    button{
        display: block;
        font-size: 24px;
        color: cornsilk;
        padding: 10px;
        width: 150px;
        height: 55px;
        margin: auto;
        margin-top: 110px;
        background-color: #080f01;
        border-radius: 50px;
        &:hover{
          transition: 50ms;
          background-color: cornsilk;;
          color: #080f01;
          scale:0.97;
        }
        
    }
  }

}

`;



const Login = ({isAuthorized,setIsAuthorized}) => {
  
 
  const[form,SetForm]=useState({
    username:"",
    password:""
  })
  
  const handleSubmit =(e)=>{
    e.preventDefault();
   if( Data.filter((item)=>
   (item.username===form.username)&&(item.password===form.password)
 ).length>0) setIsAuthorized(true);
 
 console.log('first');
 
    
  }

  
  return <Login_div>
      
      <form onSubmit={handleSubmit} action="">
        <div><input type="text" name="username" placeholder="USERNAME:aslan"  onChange={(e)=>{SetForm({...form, username:e.target.value,})}} /></div>
        <div><input type="password" name="password" placeholder="PASSWORD:1453" onChange={(e)=>{SetForm({...form, password:e.target.value,})}} /></div>
        <div><button type="submit">LOGIN </button></div>
          
      </form>
      
     
      

      {/* <img src={meal} alt="svgmeal" />
      <img src={meal2} alt="svgmeal" />
      <img src={mail} alt="svgmeal" />
      <img src={home} alt="svgmeal" />
      <img src={diet} alt="svgmeal" />
      <img src={coding} alt="svgmeal" />
      <img src={d_image} alt="svgmeal" /> */}

      
      {isAuthorized ? <Navigate  to="/" /> : ""  }
    <Footer/>  
  </Login_div>;
};

export default Login;
