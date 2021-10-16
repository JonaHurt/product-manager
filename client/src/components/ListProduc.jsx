import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const ListProduc = (props) => {
    const {product, removeFromDom} = props;
    const deleteProduct = (ProductId) => {
        axios.delete('http://localhost:8000/api/product/' + ProductId)
            .then(res => {
                removeFromDom(ProductId)
            })
    }

    
    console.log(removeFromDom);
    return (
        <div>
            <ul>
            {
                product?.map((product, l) =>
                {   
                   return  <li key={l}> <Link to={"/product/"+product._id} >{product.title} {product.price} {product.description} </Link>
                   <Link to={"/edit/"+product._id} >editar</Link><button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                   </li> 
                }
                )
            }
            </ul>
        </div>
    )
}

export default ListProduc