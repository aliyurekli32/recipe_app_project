import axios from "axios";
import styled from "styled-components";
import d_image from "../assets/default-image.jpg"
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";


const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const Card=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
align-self: center;
border-radius: 50px;

  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  width: 320px;
  height: 370px;
  background-color: #9CBF1F;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    height: 64px;
    margin: auto;
   
    h3{
      font-family: cursive;
    color: #467302;
    }
    
  }
  img{
    border-radius: 10px;
    width: 300px;
    height: 250px;
    margin-left: 5px;

    &:hover{
      transition: 0.7s;
      scale: 1.05;
    }
  }
  button{
    
    font-size: 20px;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 200px;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #467302;
    color: #F2F2F2;
    border-radius: 30px;
    border: none;
    &:hover{
      transition: 0.1s;
      scale:0.99;
    }
   
  }
`;

const Linka=styled(Link)`
  color: #F2F2F2;
  text-decoration: none;
`; 

const Label = styled.label`
    font-size: 32px;
    color: #8C1C03;
    font-style: oblique;
    font-family: 'Dancing Script', cursive;;
`;

const Select =styled.select`
  width: 150px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  font-family: cursive;
  background-color:#467302;
  color: #F2F2F2;
   
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 2px 30px 2px 2px;
    border: none;

  &::-ms-expand{
    display: none;
  }
  

  option{
    color: #9CBF1F;
    font-family: cursive;
    font-size: 16px;
    border-radius: 25px;
    background-color: #467302;

    &:hover{
      color: #F2F2F2;
      transition: all 0.8s;
    }
  }

`;

const Input =styled.input`
  width: 150px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  font-family: cursive;
  background-color:#467302;
  color: #F2F2F2;

  &::placeholder {
    color:#F2F2F2;
  }
`;

const Button=styled.button`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 200px;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #467302;
    color: #F2F2F2;
    border-radius: 30px;
    border: none;
    &:hover{
      transition: 0.1s;
      scale:0.99;
    }
`;

const Div=styled.div`
text-align: center;
`;



const Recipe = ({flags,setFlags}) => {
  const APP_ID=process.env.REACT_APP_APP_ID
  const APP_PASSWORD=process.env.REACT_APP_APP_PASSWORD
  const[formData,setFormData]=useState({
    mealType:"",
    dishType:""
  })


  

  const[data,setData]=useState(JSON.parse(localStorage.getItem("data"))??[]);
  if(flags.flag1) localStorage.setItem("data", JSON.stringify(data));
  
  
  const url=`https://api.edamam.com/api/recipes/v2?type=any&beta=false&app_id=${APP_ID}&app_key=${APP_PASSWORD}&mealType=${!formData.mealType ? "Lunch" : formData.mealType}&q=${!formData.dishType ? "Pizza" : formData.dishType}`;
  const[url2,setUrl2]=useState(url);
  
  
  const getRecipe =async ()=>{
    const newFoodList= await axios(url);
    setData([newFoodList]);
    setUrl2(newFoodList.data._links.next.href)
    
  }

  
 
  useEffect(() => {
    if(!flags.flag1){
      // getRecipe();
      setFlags({...flags, flag1:true})
    }
  },[]);

  // console.log({flags}.flag1);
  
  
const getRecipe2 =async ()=>{
  const newFoodList= await axios(url2);
  setData([newFoodList]);
  setUrl2(newFoodList.data._links.next.href)
  
}
 
  
  
  return (<>
    
    <Div>
    <Label forhtml="mealType">Choose a mealType: </Label>
  <Select onChange={(e)=>{setFormData({ ...formData,mealType:e.target.value})}} name="mealType" id="mealType">
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Snack">Snack</option>
    <option value="Teatime">Teatime</option>
  </Select>

  <Label forhtml="dishType">Food Name: </Label>
  <Input type="text" value={formData.dishType} id="dishType" placeholder="example:chicken" name="dishType" onChange={(e)=>{setFormData({ ...formData,dishType:e.target.value})}}  />

    </Div>
  
    <Div>
  <Button onClick={()=>{getRecipe()}} >Search</Button>
  <Button onClick={()=>{getRecipe2()}} >Next</Button>
  </Div>

  {!data[0].data.count && <div><h1>HATALI GİRİŞ YAPTINIZ</h1> <div><img src={d_image} alt="resim" /></div>  </div> }

  {data[0].data.count && <div>

  <div>
    {data.length>0 && <Div style={{fontSize:"32px",color:"brown",fontWeight:"700"}}><span>From: {data[0].data.from}</span> <span>To: {data[0].data.to}</span> <span>Total Count: {data[0].data.count}</span> </Div>}
  </div>
  
  <Container >
   {data.length>0 && data[0].data.hits.map((item,index)=>{
                  return(<Card key={index}>
                        <div>
                          <h3>{item.recipe.label}</h3>
                        </div>
                      <img  src={item.recipe.images.SMALL.url} alt="resim" />
                      <button><Linka type="button" to="/details" state={item}>Details</Linka></button>
                       
                  </Card>)
                }) }
  </Container>
  </div>}
  </>);

  
};

export default Recipe;
