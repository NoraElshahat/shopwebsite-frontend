import { AppBar,
   Toolbar , 
   makeStyles,
   Typography,
   Button, } from '@material-ui/core';
import React from "react";
import {Link} from 'react-router-dom';


const headersData = [
  {
    item:"Category",
    href:'/categories'
  }
    ,
  {
    item:"Product",
    href:'/products'
  }
  ];
const useStyles = makeStyles(() => ({
   menuButton :{
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px"
   },
   toolbar: {
    display: "flex",
    backgroundColor:"#43B7C2",
    justifyContent: "space-between",
  },


 }));

export default function Header() {
    const { toolbar , menuButton } = useStyles();

    const displayHeader = () => {
    return (
        <Toolbar className={toolbar}>
           {titleShop()}  
           <div>{getMenuButtons()}</div>
        </Toolbar>
        
    );
  };

  const titleShop = () =>{
    return(
    <Typography variant="h6" component="h1" >
      Shop Site
    </Typography>)
  }
  const getMenuButtons = () => {
    return headersData.map(({item , href}) => {
      return (
        <Button 
        {...{
          key: item,
          color: "inherit",
          component: Link ,
          to:href
        }}
        className = {menuButton}
        >
          {item}
        </Button>
      );
    });
  };

  return (
    <header >
      <AppBar>{displayHeader()}</AppBar>
    </header>
  );
}