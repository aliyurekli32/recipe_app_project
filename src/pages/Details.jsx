import React from "react";
import {Link, Navigate,useLocation,useNavigate} from "react-router-dom"
import styled from "styled-components";
import Data from "../assets/data";
import Nav from "../Components/Nav";

const Div=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li{
    font-size: 24px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
`;

const Divx=styled(Div)`
flex-direction:column;
margin: 30px;
`;

const Img=styled.img`
   width: 300px;
   height: 300px;
   border-radius: 15px;
`;
const Imgx=styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50px;
`;

const Details = ({isAuthorized}) => {
    const location=useLocation();
    console.log(location.state);
    const navigate=useNavigate();

    if(isAuthorized){
        return(
            <>
            <Nav isAuthorized={isAuthorized}/>
            <Div>               
                <Divx>
                <h1>NUTRİENTS</h1><hr />
                    <ol>
                        <li>{location.state.recipe.totalNutrients.CA.label}: {location.state.recipe.totalNutrients.CA.quantity} {location.state.recipe.totalNutrients.CA.unit}</li>
                         <li>{location.state.recipe.totalNutrients.CHOCDF.label}: {location.state.recipe.totalNutrients.CHOCDF.quantity} {location.state.recipe.totalNutrients.CHOCDF.unit}</li>
                        <li>{location.state.recipe.totalNutrients.PROCNT.label}: {location.state.recipe.totalNutrients.PROCNT.quantity} {location.state.recipe.totalNutrients.PROCNT.unit}</li>
                         <li>{location.state.recipe.totalNutrients.FAT.label}: {location.state.recipe.totalNutrients.FAT.quantity} {location.state.recipe.totalNutrients.FAT.unit}</li>
                         <li>{location.state.recipe.totalNutrients.CHOLE.label}: {location.state.recipe.totalNutrients.CHOLE.quantity} {location.state.recipe.totalNutrients.CHOLE.unit}</li>
                         <li>{location.state.recipe.totalNutrients.ENERC_KCAL.label}: {location.state.recipe.totalNutrients.ENERC_KCAL.quantity} {location.state.recipe.totalNutrients.ENERC_KCAL.unit}</li>
                    </ol>
                </Divx>
                <Divx>
                    <Img src={location.state.recipe.image} alt="resim" />
                </Divx>
                <Divx>
                    <h2><b>INGREDIENTS</b></h2> <hr />
                    {location.state.recipe.ingredients.map((item,index)=>{
                        return(<div key={index}>
                        <h3>{item.text} </h3>
                        <p> <Imgx src={item.image} alt="resim" /> </p>
                        </div>)
                    })}
                </Divx>
            
            </Div>
            
            </>
        )
    }else{
        return(
            <><Navigate to="/login" /></>
        )
    }
  
};

export default Details;
