import React from 'react';
import styled from 'styled-components';

const Play = styled.button`


display: inline block;
width: 179px;
height: 100px;
text-decoration: none;
color: #b0b0b0;
font-size: 27px;
font-weight: 600;
letter-spacing: 1px;
text-align: center;
background: rgb(46,46,46);
background: linear-gradient(180deg, rgba(46,46,46,0.7) 0%, rgba(46,46,46,0.8) 67%, rgba(46,46,46,0) 100%);
transform: skewX(45deg);
opacity: .85;
border: none;


&:after {
  display: block;
  content: "";
  position: relative;
  height: 8px;
  width: 100%;
  background-color: #8c8c8c;
}

&:hover {
background: rgb(69,69,69);
background: linear-gradient(180deg, rgba(69,69,69,0.8) 0%, rgba(69,69,69,0.8) 67%, rgba(69,69,69,0) 100%);
transform: skewX(45deg);
}
`;

const Txt = styled.div`
color: #fff;
transform: skewX(-45deg)

`

const Menu = () => {
  return (
  <div> 
   <Play><Txt>PLAY</Txt></Play>
   <Play><Txt>LEGENDS</Txt></Play>
   <Play><Txt>TRACKER</Txt></Play>
   <Play><Txt>STORE</Txt></Play>
  </div> 

   

  );
};

export default Menu;