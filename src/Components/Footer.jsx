import React from "react";
import edamam from "../assets/Edamam_Badge_White.svg"
import styled from "styled-components";
const Foot = styled.div`
position: absolute;
bottom: 50px;
left: calc(50% - 100px);


`;
const Footer = () => {
  return <Foot><div id="edamam-badge" data-color="dark"></div> </Foot>;
};

export default Footer;
