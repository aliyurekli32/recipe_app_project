import React from "react";
import styled from "styled-components";
import {Link, NavLink,useNavigate,Outlet} from "react-router-dom";

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #9cea0c;
    border: 1px solid brown;
    box-shadow: 5px 1px 10px 5px brown;
    border-radius: 15px;
  ul{
        list-style:none;
        font-size: 32px;
        margin: 20px;
        
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        @media screen and (max-width: 992px) {
   
            font-size: 12px;
        margin: 2px;
  }
}
    li:hover{
        transition: 50ms;
        scale:1.2;
        
    }
    a{
            color: white;
        }
    

`;
const Ul = styled.ul`
        
        display: flex;
        justify-content: center;
        color: red;
        list-style: none;
        
            li{
                padding: 5px;
                margin-right: 10px;
                font-family:Verdana, Geneva, Tahoma, sans-serif;
        @media screen and (max-width: 992px) {
   
            
        margin-right: 2px;
  }
                a{
                    text-decoration: none;
                }   
            }

        
`;

const Linka=styled(Link)`
    text-decoration: none !important;
    color:white;
`;

const Nav = ({isAuthorized,setIsAuthorized}) => {
    const navigate=useNavigate();
  return<>
  
  <NavContainer>
        <ul>
            <li>
                <Linka role="button"  to="/"> Recipe </Linka>
            </li>
        </ul>
        <Ul>
            {isAuthorized ?
            <li>
                <Linka onClick={()=>{setIsAuthorized(false)}} to="/">Logout</Linka>
            </li> : ""
            }
            <li>
                <a href="https://github.com/aliyurekli32" target="_blank" >Github</a>
            </li>
            <li>
                <Linka  to="/about">About</Linka>
            </li>
        </Ul>
            
  </NavContainer>
 <Outlet/>
  </> 
};

export default Nav;
