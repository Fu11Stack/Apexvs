
import React from 'react';
import styled from 'styled-components';
import BannerL from '../Images/NewBan.png';
import { motion } from 'framer-motion';


const Play = styled(motion.button)`
color: rgb(176,176,176);

justify content: space-between;
display: inline-block;
width: 209px;
height: 104px;
font-size: 22px;
font-weight: 600;
letter-spacing: 1px;
text-align: center;
background: rgb(46,46,46);
background: linear-gradient(180deg, rgba(46,46,46,0.7) 0%, rgba(46,46,46,0.8) 67%, rgba(46,46,46,0) 100%);
transform: skewX(45deg);
opacity: 1;
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
  color: #FFFFFF;
  background: rgb(69,69,69);
  background: linear-gradient(180deg, rgba(69,69,69,0.8) 0%, rgba(69,69,69,0.8) 67%, rgba(69,69,69,0) 100%);
  transform: skewX(45deg);
  }

span {
  display: block;
  position: relative;
  transform: skewX(-45deg);
}

`;
const TopBar = styled(motion.div)`
position: absolute;
display: flex;
justify-content: center;
` 


const Banner = styled.div`
  display: flex;
    .pic {
    width: 600px;
    height: auto;
`
const HeaderR = styled.div`
  display: inline block;
  width: 240px;
  height: 90px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  background: rgb(46,46,46);
  background: linear-gradient(180deg, rgba(46,46,46,0.7) 100%, rgba(46,46,46,0.8) 67%, rgba(46,46,46,0) 100%);
  transform: skewX(45deg);
  opacity: 1;
  border: none;
`

const Menu = () => {
  return (

  
  <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Wraith.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height : '100vh' }}> 
  
  <TopBar
        initial={{ right: '20%', top: '-20%' }}
        animate={{
        right: '2%',
        top: '0%',
        transition: { duration: 2, delay: 0.5 },
        }}>
      <Banner><img className="pic" src={BannerL} alt="Banner"/></Banner>
        <Play><span>PLAY</span></Play>
        <Play><span>LEGENDS</span></Play>
        <Play><span>TRACKER</span></Play>
        <Play><span>STORE</span></Play>
        <Play><span>APEX</span></Play>
        <HeaderR />
     
    </TopBar>  

  </div> 
 
  
  );
};

export default Menu;