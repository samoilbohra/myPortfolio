import React from "react";
import {GoAlert} from 'react-icons/go'
import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Metadata from "../../Metadata";


const NotFound = () => {
  
  
  return (
    <div className="PageNotFound">
    <Metadata pageTitle={"Samoil - Not Found"}/>
    <GoAlert/>
      <h1>Page Not Found !! </h1>
      <Link to={'/'}  className='button'>Home{`    `}
         <span className='buttonIcon' ><FaArrowRight/></span>
         </Link>
    </div>
  );
};

export default NotFound;