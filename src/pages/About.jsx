import {useState} from "react";
import mail from "../assets/mail.svg"
import {Link,useNavigate} from "react-router-dom";

const About = () => {
  const[as,SetAs]=useState("hello world");
  let navigate=useNavigate()
  return <div style={{color:"green",fontSize:"24px"}}>
    
    {/* <button onClick={()=> navigate("/", {state:as})}>Sending</button>
    <Link to="/" state={as} >chncv</Link> */}
    <p>Hi I am Ali Yürekli.I am Full Stack Developer candidate in Clarusway Bootcamp.I am currently studying React and made this project with React Router.I am open to work.I love coding, problem solving and producing new things especially about algorithm and strategic tasks.Please send me suggestions.</p>   
    <p><img style={{width:"50px",height:"50px"}} src={mail} alt="" />  my email: adamjesperblack@gmail.com</p>
     </div>;
}

export default About;
