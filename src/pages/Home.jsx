import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Recipe from "./Recipe";

const Header = styled.h1`
text-align: center;
font-family: 'Dancing Script', cursive;
color: #467302;
margin: 20px auto;
font-size: 64px;

`;

const Home = ({setIsAuthorized, isAuthorized}) => {
  
  const location=useLocation();
  console.log(location);
  
  return <>
    <Header>FOOD RECİPE</Header>
    <Nav isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
  </>
};

export default Home;
