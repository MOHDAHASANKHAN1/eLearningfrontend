import React from "react";
import ReactDOM from "react-dom";
import  {NumberContext}  from './context';

export default function Display(){
  const value = React.useContext(NumberContext);
  return(
      <>
        <h1>hii it is ahsan {value}</h1>
        <h1>hii it is ahsan {value}</h1>
      </>
    );
}