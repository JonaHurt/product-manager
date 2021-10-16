import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const ListProduc = ({product}) => {
    console.log(product);
    return (
        <div>
            <ul>
            {
                product?.map((product, l) =>
                {   
                   return  <li key={l}> <Link to={"/product/"+product._id} >{product.title} {product.price} {product.description} </Link></li> 
                }
                )
            }
            </ul>
        </div>
    )
}
